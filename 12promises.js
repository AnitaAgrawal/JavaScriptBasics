// **************************************** Promises *************************************

// To execute this code, go to index.html line #15 and replace it with
// <script src="./12promises.js"></script>

/** Course overview
 * Consuming and creating Promises
 * Asynchronous programming
 * Using Async/Await in JavaScript
 */

/** Prerequisites:
 * JavaScript syntax
 */

/*
export function raceCondition() {
    // Service call 1
    // 1. create xml http Request object
    let xhr = new XMLHttpRequest()
    xhr.open('GET', "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e279ce8e361736&text=Finback%20Whale&format=json&nojsoncallback=1&safe_search=1")
    let photos = []
    // 2. Add URL to the request
    // 3. Load success block
    xhr.onload = () => {
        photos = JSON.parse(xhr.responseText)
        console.log(photos)
    }
    //4. Call the service
    xhr.send()

    // Service call 2
    let xhr2 = new XMLHttpRequest()
    xhr2.open('GET', "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=3e7cc266ae2b0e0d78e279ce8e361736&photo_id=51134911427&format=json&nojsoncallback=1&safe_search=1")
    xhr2.onload = () => {
        const photoDetails = JSON.parse(xhr2.responseText)
        console.log(photoDetails)
        const description = photos.photos.photo.map(item => {
            if (item.id === photoDetails.photo.id) {
                return photoDetails.photo.urls.url[0]._content
            }
        })[0]
        console.log(description)
    }
    xhr2.send()
}

raceCondition()
//TypeError: undefined is not an object (evaluating 'photos.photos.photo')
// This is happening because second service call was trying to access the result of first service call which is yet to be finished
*/


// To fix the above issue, we can move around the code
/*
function raceCondition() {
    // Service call 1
    // 1. create xml http Request object
    let xhr = new XMLHttpRequest()
    // 2. Add URL to the request
    xhr.open('GET', "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e279ce8e361736&text=Finback%20Whale&format=json&nojsoncallback=1&safe_search=1")
    let photos = []
    // 3. Load success block
    xhr.onload = () => {
        photos = JSON.parse(xhr.responseText)
        console.log(photos)

        // Service call 2
        let xhr2 = new XMLHttpRequest()
        xhr2.open('GET', "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=3e7cc266ae2b0e0d78e279ce8e361736&photo_id=51134911427&format=json&nojsoncallback=1&safe_search=1")
        xhr2.onload = () => {
            const photoDetails = JSON.parse(xhr2.responseText)
            console.log(photoDetails)
            const description = photos.photos.photo.filter(item => {
                if (item.id === photoDetails.photo.id) {
                    console.log(photoDetails.photo.urls.url[0]._content)
                    return true
                }
            })[0]
            console.log(description)
        }
        xhr2.send()
    }
    //4. Call the service
    xhr.send()
}
*/
// raceCondition()

// Here we moved service call 2 inside service call 1, which makes it serial call
// Though this solves the problem, but loses the asynchronism and creates Callback Pyramid of Doom (multi levels of indentation)
// If we have many service calls for ex. 4, then it would look like roughly, if you monitor the left indentation 
// from line #96-107 it would look like pyramid. 
// This will look dirty and error prone if we have to write some logic with every response
/*
xhr1.onload = () => {
    const response1 = JSON.parse(xhr1.responseText)
    xhr2.onload = () => {
        const response2 = JSON.parse(xhr2.responseText)
        xhr3.onload = () => {
            const response3 = JSON.parse(xhr3.responseText)
            xhr4.onload = () => {
                const response4 = JSON.parse(xhr4.responseText)
            }
        }
    }
}
*/

// This will also be another headache to write error handling for each service call, this can make code completely messy

/*
xhr1.onload = () => {
    const response1 = JSON.parse(xhr1.responseText)
    xhr2.onload = () => {
        const response2 = JSON.parse(xhr2.responseText)
        xhr3.onload = () => {
            const response3 = JSON.parse(xhr3.responseText)
            xhr4.onload = () => {
                const response4 = JSON.parse(xhr4.responseText)
            }
            xhr4.onerror = () => {}
        }
        xhr3.onerror = () => {}
    }
    xhr2.onerror = () => {}
}
xhr1.onerror = () => {}
*/

// To fix the above issue we will use promises
// Promise: is an object that represents the eventual completion/failure of an asynchronous operation,
// and its resulting value. For more details visit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Promises represent processes that are already happening, which can be chained with callback functions.

// Promise States
// 1. Pending - For service call, the promise will be in pending state until receives the response from network
// 2. Fulfilled - A promise will be moved from Pending to Fulfilled state once asynchronous call has completed successfully with response.
// 3. Rejected - A promise will be moved from Pending to Rejected state when the asynchronous call has failed, with failure response.
// 4. Settled/Resolved - Whenever a promise is in fulfilled or rejected state.

/**
 * Promise(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void): Promise<any>
 * A callback used to initialize the promise. 
 * This callback is passed two arguments: 
 * 1. a resolve callback used to resolve the promise with a value or the result of another promise, and 
 * 2. a reject callback used to reject the promise with a provided reason or error.
 * 
 * Creates a new Promise.
 * 
 * Resolve callback can be treated as success block
 * Reject callback can be treated as failure block
 */
// 

import { validatePassword } from "./5conditionalsAndOperators.js";


let myPromise = new Promise((resolve, reject) => {
    try {
        let result = validatePassword('helloWorld1')
        resolve(result)
    } catch (error) {
        reject(error.message)
    }
})

function successBlock(msg) {
    console.log(`success block called with msg: ${msg}`)
}

function failureBlock(msg) {
    console.log(`failure block called with msg: ${msg}`)
}
/**
 * then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => PromiseLike<never>): Promise<any>
 * The callback to execute when the Promise is resolved.

 * Attaches callbacks for the resolution and/or rejection of the Promise.

 * @returns — A Promise for the completion of which ever callback is executed.
 */

myPromise.then(successBlock, failureBlock) //success block called with msg: Valid password

/**
 * The methods 
 * promise.then(), 
 * promise.catch(), and 
 * promise.finally() 
 * are used to associate further action with a promise that becomes settled.
 */

myPromise.then(value => { return value + ' first then ' })
    .then(value => { return value + 'followed by second then ' })
    .then(value => { return value + 'and one more then' })
    .then(value => { console.log(`printing value of 4th then: ${value}`) })
// printing value of 4th then: Valid password first then followed by second then and one more then


function handlePasswordValidation(passwordText) {
    let passwordPromise = new Promise((resolve, reject) => {
        try {
            let result = validatePassword(passwordText)
            resolve(result)
        } catch (error) {
            reject(error.message)
        }
    })
    return passwordPromise
}

handlePasswordValidation('hello')
    .then(value => { console.log(`success response: ${value}`) })
    .catch(value => { console.log(`failure response: ${value}`) })
//failure response: Password must be between 6 to 20 characters and must not contain other than alphnumeric characters

function fetchFinbackWhalePhotosFromSearchAPI() {
    let fetchPromise = new Promise((resolve, reject) => {
        // Service call 1
        // 1. create xml http Request object
        let xhr = new XMLHttpRequest()
        // 2. Add URL to the request
        xhr.open('GET', "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e279ce8e361736&text=Finback%20Whale&format=json&nojsoncallback=1&safe_search=1")
        let photos = []
        // 3. Load success block
        xhr.onload = () => {
            photos = JSON.parse(xhr.responseText)
            console.log('fetchFinbackWhalePhotosFromSearchAPI success: ', photos)
            resolve(photos)
        }
        xhr.onerror = () => {
            console.log('fetchFinbackWhalePhotosFromSearchAPI error occurred: ', xhr.responseText)
            reject(xhr.responseText)
        }
        //4. Call the service
        xhr.send()
    })
    return fetchPromise
}

function getPhotoInfo(photos) {
    // Service call 2
    let xhr2 = new XMLHttpRequest()
    xhr2.open('GET', "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=3e7cc266ae2b0e0d78e279ce8e361736&photo_id=51134911427&format=json&nojsoncallback=1&safe_search=1")
    xhr2.onload = () => {
        const photoDetails = JSON.parse(xhr2.responseText)
        console.log(photoDetails)
        const description = photos.photos.photo.filter(item => {
            if (item.id === photoDetails.photo.id) {
                console.log(photoDetails.photo.urls.url[0]._content)
                return true
            }
        })[0]
        console.log(description)
    }
    xhr2.onerror = () => {
        throw xhr2.responseText
    }
    xhr2.send()
}

fetchFinbackWhalePhotosFromSearchAPI()
.then(value => getPhotoInfo(value))
.catch(error => console.log('error occurred: ', error.description))