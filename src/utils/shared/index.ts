/**
 * Parsing the response.
 * @param res response to be parsed
 */
export const parseResponse = (res: string) => {
    const data = res.split("window._sharedData = ")[1].split(";</script>")[0]
    return JSON.parse(data)
}

/**
 * Checking if it's an URL
 * @param id 
 */
export const isUrl = (id: string | undefined) => {
    if (!id) return false
    return id.includes("https") || id.includes('http') || id.includes(".com")
}