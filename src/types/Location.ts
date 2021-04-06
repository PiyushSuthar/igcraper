export interface Root {
    graphql: Graphql
    native_location_data: any
    logging_page_id: string
    photos_and_videos_header: boolean
    recent_pictures_and_videos_subheader: boolean
    top_images_and_videos_subheader: boolean
}

export interface Graphql {
    location: Location
}

export interface Location {
    id: string
    name: string
    has_public_page: boolean
    lat: number
    lng: number
    slug: string
    blurb: string
    website: string
    phone: string
    primary_alias_on_fb: string
    address_json: string
    profile_pic_url: string
    edge_location_to_media: EdgeLocationToMedia
    edge_location_to_top_posts: EdgeLocationToTopPosts
    directory: Directory
}

export interface EdgeLocationToMedia {
    count: number
    page_info: PageInfo
    edges: Edge[]
}

export interface PageInfo {
    has_next_page: boolean
    end_cursor: string
}

export interface Edge {
    node: Node
}

export interface Node {
    comments_disabled: boolean
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

export interface EdgeLocationToTopPosts {
    count: number
    page_info: PageInfo2
    edges: Edge3[]
}

export interface PageInfo2 {
    has_next_page: boolean
    end_cursor: any
}

export interface Edge3 {
    node: Node3
}

export interface Node3 {
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
    accessibility_caption: any
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

export interface Directory {
    country: Country
    city: City
}

export interface Country {
    id: string
    name: string
    slug: string
}

export interface City {
    id: string
    name: string
    slug: string
}
