/* @flow */
/* eslint-disable no-unused-vars */

// Imports

import moment from 'moment'

// Function spacing

const add = (a: number, b: number): number => a + b

// Trailing commas

const array1 = [1, 2, 3]
const array2 = [1, 2, 3, 4]

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
}
const obj2 = {
    a: 1,
    b: 2,
    c: 3,
}

add(1, 2)
add(1, 2)

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
const a = (b = c = 5) // eslint-disable-line no-multi-assign

// Promises

const badPromise = new Promise((resolve: Function, reject: Function) => {
    if (a === 5) {
        return resolve('Success')
    }

    return reject('Something bad happened') // eslint-disable-line prefer-promise-reject-errors
})

const goodPromise = new Promise((resolve: Function, reject: Function) => {
    if (a === 5) {
        return resolve('Success')
    }

    return reject(new Error('Something bad happened'))
})

// No Await in Loop

const foo = async (things: any) => {
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

// Class methods use this

class SampleComponent {
    // eslint-disable-next-line class-methods-use-this
    getSumOfArray(numbers: Array<number> = []) {
        return numbers.reduce((sum: number, item: number) => sum + item, 0)
    }
}

// Function call spacing

const sum = (a: number, b: number): number => a + b

sum(1, 2)

// Function name matching

// eslint-disable-next-line func-name-matching
const helpers = function utility() {
    return {}
}

// Extra line after Directives
const subtract = (a: number, b: number) => {
    'use asm'
    const answer = a - b // eslint-disable-line padding-line-between-statements
}
subtract() // eslint-disable-line padding-line-between-statements

// ObjectExpression formatting
const onePropertyObject = {one: 1} // One liner for one property only
const twoPropertyObject = {one: 4, two: 2}
const threePropertyObject = {
    one: 1,
    two: 2,
    three: 3,
}

// ObjectPattern formatting

/* eslint-disable no-redeclare */
const {one, two} = twoPropertyObject
const {one, two, three} = threePropertyObject

/* eslint-enable no-redeclare */

// No `new Symbol()`
const symbolFoo = new Symbol('foo') // eslint-disable-line no-new-symbol

/* eslint-enable no-unused-vars */

// Jest

describe('module 1', () => null)
it('does not have eslint error', () => null)

describe.skip('disabled 1', () => null) // eslint-disable-line jest/no-disabled-tests
it.skip('disabled 2', () => null) // eslint-disable-line jest/no-disabled-tests
test.skip('disabled 3', () => null) // eslint-disable-line jest/no-disabled-tests
xdescribe('disabled 4', () => null) // eslint-disable-line jest/no-disabled-tests
xit('disabled 5', () => null) // eslint-disable-line jest/no-disabled-tests
xtest('disabled 6', () => null) // eslint-disable-line jest/no-disabled-tests

describe.only('focused 1', () => null) // eslint-disable-line jest/no-focused-tests
it.only('focused 2', () => null) // eslint-disable-line jest/no-focused-tests
test.only('focused 3', () => null) // eslint-disable-line jest/no-focused-tests
fdescribe('focused 4', () => null) // eslint-disable-line jest/no-focused-tests
fit('focued 5', () => null) // eslint-disable-line jest/no-focused-tests
ftest('focused 6', () => null) // eslint-disable-line jest/no-focused-tests, no-undef

describe('foo', () => {
    it('should do bar', () => null)
    it('should do bar', () => null) // eslint-disable-line jest/no-identical-title

    describe('baz', () => null)
    describe('baz', () => null) // eslint-disable-line jest/no-identical-title
})

// eslint-disable-next-line no-restricted-syntax, for-direction, no-empty
for (let i = 10; i < 10; i--) {}
