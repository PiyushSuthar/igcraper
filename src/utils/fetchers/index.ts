import { isUrl, parseResponse } from '../shared'
import axios from "axios";
import { HashtagType, LocationType, PostType, UserType } from '../../types';

interface UserOptions {
    type: "user"
    username: string
    url?: string
    hashtag?: string
    location?: string
}
interface PostOptions {
    type: "post"
    url: string
    username?: string
    hashtag?: string
    location?: string
}
interface TagOptions {
    type: "hashtag"
    url?: string
    username?: string
    location?: string
    hashtag: string
}
interface LocationOptions {
    type: "location"
    url?: string
    username?: string
    hashtag?: string
    location: string | number
}

type Options = UserOptions | PostOptions | TagOptions | LocationOptions
type TypeName = "post" | "user" | "hashtag" | "location"

function getUrl(
    type: TypeName,
    username: string | undefined,
    url: string | undefined,
    hashtag: string | undefined,
    location: string | number | undefined
) {
    switch (type) {
        case "post":
            return isUrl(url) ? url! : `https://instagram.com/p/${url}`

        case "user":
            return `https://instagram.com/${username}`

        case "hashtag":
            return `https://instagram.com/explore/tags/${hashtag}`

        case "location":
            return `https://instagram.com/explore/locations/${location}`

        default:
            return false
    }
}

/**
 * fetch instagram data
 */
async function fetchData({
    type,
    username,
    url,
    hashtag,
    location
}: Options) {
    const URL = getUrl(type, username, url, hashtag, location)

    if (!URL) throw new Error("Username or Url is not provided")

    const res = await axios.get(URL, {
        withCredentials: true,
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.68"
        }
    })

    const data = await res.data
    const parsedResponse = parseResponse(data)

    return parsedResponse.entry_data.PostPage || parsedResponse.entry_data.ProfilePage || parsedResponse.entry_data.TagPage || parsedResponse.entry_data.LocationsPage
}

export default fetchData
