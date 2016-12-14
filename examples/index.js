/* @flow */
/* eslint-disable no-unused-vars */

// Imports

import moment from 'moment'

// Function spacing

const add = (a: number, b: number): number => a + b
const addAsync = async (a: number, b: number): Promise<number> => a + b

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
addAsync(
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

moment.utc()

/* eslint-enable no-unused-vars */
