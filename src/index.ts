import { HashtagType, LocationType, PostType, UserType } from "./types";
import fetchData from "./utils/fetchers";
import filterData, { FilteredData } from "./utils/filtre/index";

/**
 * Scrape out Instagram Data.
 */
export default class IgCraper {
    /**
     * Get Information about the user, like followers, recent 15 posts, etc.
     * 
     * Usage:-
     * ```js
     * const IgCraper = require('igcraper').default
     * 
     * const igCraper = new IgCraper()
     * 
     * // Use VScode for autocompletion
     * await igCraper.getUser('piyushsthr') 
     * ```
     * 
     * @param username Username of the user.
     */
    async getUser(username: string): Promise<UserType> {
        if (!username) throw new Error("Username Not Provided");

        const data = await fetchData({
            type: "user",
            username
        })

        return data[0]
    }

    /**
     * Get Information about the Post, like images, likes count, etc.
     * 
     * Supported Types:-
     * - Image
     * - Video
     * - Multiple Image and Video Post.
     * - Reel
     * 
     * Usage:-
     * ```js
     * const IgCraper = require('igcraper').default
     * 
     * const igCraper = new IgCraper()
     * 
     * // Use VScode for autocompletion
     * // Reels work too.
     * const data = await igCraper.getPost('https://www.instagram.com/p/CDL3Ut0ndO0/') 
     * 
     * // Recommended Next step, if you want just post's images and videos
     * const filtredData = igCraper.filterPost(data)
     * ```
     * 
     * @param url URL of the post
     */
    async getPost(url: string): Promise<PostType> {
        if (!url) throw new Error("URL Not Provided");

        const data = await fetchData({
            type: "post",
            url
        })

        return data[0]
    }

    /**
     * Get Information and Posts About hashtag.
     * 
     * Usage:- 
     * ```js
     * const IgCraper = require('igcraper').default
     * 
     * const igCraper = new IgCraper()
     * 
     * // Use VScode for autocompletion
     * const data = await igCraper.getHashtag('instagram') 
     * 
     * ```
     * @param hashtag Hashtag from Instagram
     */
    async getHashtag(hashtag: string): Promise<HashtagType> {
        if (!hashtag) throw new Error("Hashtag Not Provided");

        const data = await fetchData({
            type: "hashtag",
            hashtag
        })

        return data[0]
    }

    /**
     * Gets posts and information about the location.
     * 
     * Usage:-
     * ```js
     * const IgCraper = require('igcraper').default
     * 
     * const igCraper = new IgCraper()
     * 
     * // Use VScode for autocompletion
     * const data = await igCraper.getLocation('238765449') 
     * 
     * ```
     * @param location Locations id of the location, ex. 238765449
     */
    async getLocation(location: number | string): Promise<LocationType> {
        if (!location) throw new Error("Location Not Provided");

        const data = await fetchData({
            type: "location",
            location
        })

        return data[0]
    }


    /**
     * Filters out resposne from getPost method and just gives the image and video urls.
     * 
     * Supported Types:-
     * - Image
     * - Video
     * - Multiple Image and Video Post.
     * - Reel
     * 
     * Usage:-
     * ```js
     * const IgCraper = require('igcraper').default
     * 
     * const igCraper = new IgCraper()
     * 
     * // Use VScode for autocompletion
     * const data = await igCraper.getPost('https://www.instagram.com/p/CDL3Ut0ndO0/') 
     * 
     * const filtredData = igCraper.filterPost(data)
     * ```
     * 
     * @param Post  getPost response
     */
    filterPost(Post: PostType): FilteredData {
        return filterData(Post)
    }
}
