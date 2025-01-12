const API_KEY = '48185662-a1ecae6a7cb89564c9e1793e1'
const BASE_URL = 'https://pixabay.com/api/'

export const fetchImages = async (query, page = 1, perPage = 12) => {
const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
})

const url = `${BASE_URL}?${params.toString()}`

try {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return await response.json()
    } catch (error) {
        throw error
    }
}