export const apiFetch = async (url, options = {}) => {
  try {
    const response = await fetch(`${baseURL}${url}`, {
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    })    
    return await response.json()
  } catch (error) {
    console.log(`Api error: ${error}`)
    throw error
  }
}