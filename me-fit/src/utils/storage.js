// Saves the provided value under the given key in local storage
export const storageSave = (key, value) => {

    // Throw an error if no key is provided
    if (!key) {
        throw new Error('storageSave: No storage key provided')
    }

    // Throw an error if no value is provided for the given key
    if (!value) {
        throw new Error('storageSave: no value provided for ' + key)
    }

    // Save the provided value under the given key as a JSON string
    localStorage.setItem(key, JSON.stringify(value))
}

// Reads and parses the JSON data stored under the given key in local storage
export const storageRead = key => {
    // Retrieve the data stored under the given key
    const data = localStorage.getItem(key)

    // If there is data stored under the key, parse it as JSON and return it
    if (data) {
        return JSON.parse(data)
    }

    // If there is no data stored under the key, return null
    return null
}

// Deletes the data stored under the given key in local storage
export const storageDelete = key => {
    localStorage.removeItem(key)
}