/* @flow */

export const b = 1
export const c = 2

const add = (a: number, b: number): number => a + b

const a = 1

add(a, 1)

const foo = async (): Promise<string> => 'foo'

foo()
