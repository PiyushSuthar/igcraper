export interface Root {
    graphql: Graphql
}

export interface Graphql {
    shortcode_media: ShortcodeMedia
}

export interface ShortcodeMedia {
    __typename: string[]
    id: string[]
    shortcode: string[]
    dimensions: Dimensions
    gating_info: any[]
    fact_check_overall_rating: any[]
    fact_check_information: any[]
    sensitivity_friction_info: any[]
    sharing_friction_info: SharingFrictionInfo
    media_overlay_info: any[]
    media_preview: string | undefined[]
    display_url: string[]
    display_resources: DisplayResource[]
    accessibility_caption: any
    dash_info: DashInfo
    has_audio: boolean
    video_url: string
    video_view_count: number
    video_play_count: any
    is_video: boolean[]
    tracking_token: string[]
    edge_media_to_tagged_user: EdgeMediaToTaggedUser
    edge_media_to_caption: EdgeMediaToCaption
    caption_is_edited: boolean[]
    has_ranked_comments: boolean[]
    edge_media_to_parent_comment: EdgeMediaToParentComment
    edge_media_to_hoisted_comment: EdgeMediaToHoistedComment
    edge_media_preview_comment: EdgeMediaPreviewComment
    comments_disabled: boolean[]
    commenting_disabled_for_viewer: boolean[]
    taken_at_timestamp: number[]
    edge_media_preview_like: EdgeMediaPreviewLike
    edge_media_to_sponsor_user: EdgeMediaToSponsorUser
    location: Location
    viewer_has_liked: boolean[]
    viewer_has_saved: boolean[]
    viewer_has_saved_to_collection: boolean[]
    viewer_in_photo_of_you: boolean[]
    viewer_can_reshare: boolean[]
    owner: Owner3
    is_ad: boolean[]
    edge_web_media_to_related_media: EdgeWebMediaToRelatedMedia
    encoding_status: any
    is_published: boolean
    product_type: string
    title: string
    video_duration: number
    thumbnail_src: string
    clips_music_attribution_info: any
    edge_related_profiles: EdgeRelatedProfiles
    edge_sidecar_to_children: EdgeSidecarToChildren
}

export interface Dimensions {
    height: number[]
    width: number[]
}

export interface SharingFrictionInfo {
    should_have_sharing_friction: boolean[]
    bloks_app_url: any[]
}

export interface DisplayResource {
    src: string
    config_width: number
    config_height: number
}

export interface DashInfo {
    is_dash_eligible: boolean
    video_dash_manifest: string
    number_of_qualities: number
}

export interface EdgeMediaToTaggedUser {
    edges: any[]
}

export interface EdgeMediaToCaption {
    edges: Edge[]
}

export interface Edge {
    node: Node
}

export interface Node {
    text: string
}

export interface EdgeMediaToParentComment {
    count: number[]
    page_info: PageInfo
    edges: Edge2[]
}

export interface PageInfo {
    has_next_page: boolean[]
    end_cursor: any[]
}

export interface Edge2 {
    node: Node2
}

export interface Node2 {
    id: string
    text: string
    created_at: number
    did_report_as_spam: boolean
    owner: Owner
    viewer_has_liked: boolean
    edge_liked_by: EdgeLikedBy
    is_restricted_pending: boolean
    edge_threaded_comments: EdgeThreadedComments
}

export interface Owner {
    id: string
    is_verified: boolean
    profile_pic_url: string
    username: string
}

export interface EdgeLikedBy {
    count: number
}

export interface EdgeThreadedComments {
    count: number
    page_info: PageInfo2
    edges: any[]
}

export interface PageInfo2 {
    has_next_page: boolean
    end_cursor: any
}

export interface EdgeMediaToHoistedComment {
    edges: any[]
}

export interface EdgeMediaPreviewComment {
    count: number[]
    edges: Edge3[]
}

export interface Edge3 {
    node: Node3
}

export interface Node3 {
    id: string
    text: string
    created_at: number
    did_report_as_spam: boolean
    owner: Owner2
    viewer_has_liked: boolean
    edge_liked_by: EdgeLikedBy2
    is_restricted_pending: boolean
}

export interface Owner2 {
    id: string
    is_verified: boolean
    profile_pic_url: string
    username: string
}

export interface EdgeLikedBy2 {
    count: number
}

export interface EdgeMediaPreviewLike {
    count: number
    edges: Edge4[]
}

export interface Edge4 {
    node: Node4
}

export interface Node4 {
    id: string
    is_verified: boolean
    profile_pic_url: string
    username: string
}

export interface EdgeMediaToSponsorUser {
    edges: any[]
}

export interface Location {
    "0": any
    id: string
    has_public_page: boolean
    name: string
    slug: string
    address_json: string
}

export interface Owner3 {
    id: string[]
    is_verified: boolean[]
    profile_pic_url: string[]
    username: string[]
    blocked_by_viewer: boolean[]
    restricted_by_viewer: boolean[]
    followed_by_viewer: boolean[]
    full_name: string[]
    has_blocked_viewer: boolean[]
    is_private: boolean[]
    is_unpublished: boolean[]
    requested_by_viewer: boolean[]
    pass_tiering_recommendation: boolean[]
    edge_owner_to_timeline_media: EdgeOwnerToTimelineMedia
    edge_followed_by: EdgeFollowedBy
}

export interface EdgeOwnerToTimelineMedia {
    count: number[]
}

export interface EdgeFollowedBy {
    count: number[]
}

export interface EdgeWebMediaToRelatedMedia {
    edges: any[]
}

export interface EdgeRelatedProfiles {
    edges: any[]
}

export interface EdgeSidecarToChildren {
    edges: Edge5[]
}

export interface Edge5 {
    node: Node5
}

export interface Node5 {
    __typename: string
    id: string
    shortcode: string
    dimensions: Dimensions2
    gating_info: any
    fact_check_overall_rating: any
    fact_check_information: any
    sensitivity_friction_info: any
    sharing_friction_info: SharingFrictionInfo2
    media_overlay_info: any
    media_preview: string
    display_url: string
    display_resources: DisplayResource2[]
    accessibility_caption: string
    is_video: boolean
    video_url: string
    tracking_token: string
    edge_media_to_tagged_user: EdgeMediaToTaggedUser2
}

export interface Dimensions2 {
    height: number
    width: number
}

export interface SharingFrictionInfo2 {
    should_have_sharing_friction: boolean
    bloks_app_url: any
}

export interface DisplayResource2 {
    src: string
    config_width: number
    config_height: number
}

export interface EdgeMediaToTaggedUser2 {
    edges: any[]
}
