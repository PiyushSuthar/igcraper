import { PostType } from "../../types";

type SingleObject = {
    src: string,
    isVideo: boolean
}

export interface FilteredData {
    dataArray: SingleObject[]
    likes: number | string
    caption: string
}

function generateData(data: PostType): FilteredData {
    const { graphql: { shortcode_media } } = data

    // Array where all the Object will be stored
    let dataArray: SingleObject[] = [];

    // Utility Func
    const push = (data: SingleObject) => dataArray.push(data)

    const singleVideoURL = shortcode_media.video_url

    if (singleVideoURL) {
        push({
            src: shortcode_media.video_url,
            isVideo: true
        })
    }

    const multipleChildArray = shortcode_media.edge_sidecar_to_children

    if (multipleChildArray) {

        multipleChildArray.edges.forEach(({ node }) => {
            if (node.is_video) {
                push({
                    src: node.video_url,
                    isVideo: true
                })
            } else {
                const { display_resources } = node
                let lastItemIndex = display_resources.length - 1

                push({
                    src: display_resources[lastItemIndex].src,
                    isVideo: false
                });
            }
        }
        );
    } else {
        const { display_resources } = shortcode_media
        let lastItemIndex = display_resources.length - 1

        push({
            src: display_resources[lastItemIndex].src,
            isVideo: false
        });
    }


    return {
        dataArray,
        likes: shortcode_media.edge_media_preview_like.count,
        caption: shortcode_media.edge_media_to_caption.edges[0].node.text
    }
}

export default generateData
