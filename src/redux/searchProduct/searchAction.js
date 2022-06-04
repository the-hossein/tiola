export const query = targetProduct => {
    return { type: "SEARCH", payload: targetProduct }
}