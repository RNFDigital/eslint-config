/* @flow */
/* eslint-disable no-unused-vars */

// Imports

import moment from 'moment'

// Function spacing

const add = (a: number, b: number): number => a + b

// Trailing commas

const array1 = [1, 2, 3]
const array2 = [
    1,
    2,
    3,
    4,
]

const obj1 = {a: 1, b: 2, c: 3}
const obj2 = {
    a: 1,
    b: 2,
    c: 3,
}

add(1, 2)
add(
    1,
    2,
)

// Classes

class Hello {
    static foo = () => 1
    bar = () => {
        this.bar = 1
    }
}

// Moment

moment() // eslint-disable-line moment-utc/no-moment-without-utc
moment.utc()

// No Multi Assign

let b = null
let c = null
const a = b = c = 5 // eslint-disable-line no-multi-assign

// Promises

const badPromise = new Promise((resolve, reject) => {
    if (a === 5) {
        return resolve('Success')
    }

    return reject('Something bad happened') // eslint-disable-line prefer-promise-reject-errors
})

const goodPromise = new Promise((resolve, reject) => {
    if (a === 5) {
        return resolve('Success')
    }

    return reject(new Error('Something bad happened'))
})

// Prefer Destructuring

const arr = [1, 2]
const obj = {f: 1, g: 2}

const d = arr[0]
const f = obj.f // eslint-disable-line prefer-destructuring

const [g] = arr
const {h} = obj

// No Await in Loop

const foo = async (things) => {
    const results = []

    for (const thing of things) {
        results.push(await goodPromise(thing)) // eslint-disable-line no-await-in-loop
    }

    return results
}

// Require Await

const badAsync = async () => 1 // eslint-disable-line require-await

// Return Await

const badReturnAwait = async () => await badAsync() // eslint-disable-line no-return-await

/* eslint-enable no-unused-vars */
