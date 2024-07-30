export const getStorageItem = (item) => {
    return localStorage.getItem(item)
}

export const getHeaders = () => {
    const token = localStorage.getItem("token")
    const auth = {
        headers: {
            Authorization: token
        }
    }
    return auth
}