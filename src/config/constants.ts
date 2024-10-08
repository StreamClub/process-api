import { config } from "@config";

export const ARTISTS_URL = `${config.capiUrl}/artists`;
export const AUTH_URL = `${config.uapiUrl}/auth`
export const UAPI_HEALTH = `${config.uapiUrl}/health`;
export const CAPI_HEALTH = `${config.capiUrl}/health`;
export const RAPI_HEALTH = `${config.rapiUrl}/health`;
export const MOVIES_URL = `${config.capiUrl}/movies`;
export const SEEN_CONTENT_URL = `${config.capiUrl}/seenContent`;
export const STREAM_PROVIDERS_URL = `${config.capiUrl}/streamProviders`;
export const SERIES_URL = `${config.capiUrl}/series`;
export const REVIEWS_URL = `${config.capiUrl}/reviews`;
export const PRIVACY_URL = `${config.capiUrl}/privacy`;
export const TRIVIA_URL = `${config.capiUrl}/trivias`;
export const GET_USER_NAMES_URL = `${config.uapiUrl}/users/userNames`;
export const WATCHLIST_URL = `${config.capiUrl}/watchlist`;
export const POINTS_URL = `${config.uapiUrl}/points`;
export const USER_URL = `${config.uapiUrl}/users`
export const FRIEND_URL = `${config.uapiUrl}/friends`
export const GROUP_URL = `${config.uapiUrl}/groups`
export const MOVIES_REC_URL = `${config.rapiUrl}/recommendations/movie`
export const USER_REC_URL = `${config.rapiUrl}/recommendations/user`
export const SERIES_REC_URL = `${config.rapiUrl}/recommendations/series`
export const GROUPS_REC_URL = `${config.rapiUrl}/recommendations/groups`

export const POINTS_PER_REVIEW = 500;