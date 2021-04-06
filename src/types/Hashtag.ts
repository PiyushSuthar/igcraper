export interface Root {
    graphql: Graphql
}

export interface Graphql {
    hashtag: Hashtag
}

export interface Hashtag {
    id: string
    name: string
    allow_following: boolean
    is_following: boolean
    is_top_media_only: boolean
    profile_pic_url: string
    edge_hashtag_to_media: EdgeHashtagToMedia
    edge_hashtag_to_top_posts: EdgeHashtagToTopPosts
    edge_hashtag_to_content_advisory: EdgeHashtagToContentAdvisory
    edge_hashtag_to_related_tags: EdgeHashtagToRelatedTags
    edge_hashtag_to_null_state: EdgeHashtagToNullState
}

export interface EdgeHashtagToMedia {
    count: number
    page_info: PageInfo
    edges: Edge[]
}

export interface PageInfo {
    has_next_page: boolean
    end_cursor: any
}

export interface Edge {
    node: Node
}

export interface Node {
    comments_disabled: boolean
    __typename: string
    id: string
    edge_media_to_caption: EdgeMediaToCaption
    shortcode: string
    edge_media_to_comment: EdgeMediaToComment
    taken_at_timestamp: number
    dimensions: Dimensions
    display_url: string
    edge_liked_by: EdgeLikedBy
    edge_media_preview_like: EdgeMediaPreviewLike
    owner: Owner
    thumbnail_src: string
    thumbnail_resources: ThumbnailResource[]
    is_video: boolean
    accessibility_caption?: string
    product_type?: string
    video_view_count?: number
}

export interface EdgeMediaToCaption {
    edges: Edge2[]
}

export interface Edge2 {
    node: Node2
}

export interface Node2 {
    text: string
}

export interface EdgeMediaToComment {
    count: number
}

export interface Dimensions {
    height: number
    width: number
}

export interface EdgeLikedBy {
    count: number
}

export interface EdgeMediaPreviewLike {
    count: number
}

export interface Owner {
    id: string
}

export interface ThumbnailResource {
    src: string
    config_width: number
    config_height: number
}

export interface EdgeHashtagToTopPosts {
    edges: Edge3[]
}

export interface Edge3 {
    node: Node3
}

export interface Node3 {
    __typename: string
    id: string
    edge_media_to_caption: EdgeMediaToCaption2
    shortcode: string
    edge_media_to_comment: EdgeMediaToComment2
    taken_at_timestamp: number
    dimensions: Dimensions2
    display_url: string
    edge_liked_by: EdgeLikedBy2
    edge_media_preview_like: EdgeMediaPreviewLike2
    owner: Owner2
    thumbnail_src: string
    thumbnail_resources: ThumbnailResource2[]
    is_video: boolean
    accessibility_caption?: string
    product_type?: string
    video_view_count?: number
}

export interface EdgeMediaToCaption2 {
    edges: Edge4[]
}

export interface Edge4 {
    node: Node4
}

export interface Node4 {
    text: string
}

export interface EdgeMediaToComment2 {
    count: number
}

export interface Dimensions2 {
    height: number
    width: number
}

export interface EdgeLikedBy2 {
    count: number
}

export interface EdgeMediaPreviewLike2 {
    count: number
}

export interface Owner2 {
    id: string
}

export interface ThumbnailResource2 {
    src: string
    config_width: number
    config_height: number
}

export interface EdgeHashtagToContentAdvisory {
    count: number
    edges: any[]
}

export interface EdgeHashtagToRelatedTags {
    edges: any[]
}

export interface EdgeHashtagToNullState {
    edges: any[]
}
