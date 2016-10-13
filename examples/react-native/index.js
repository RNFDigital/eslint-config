/* @flow */

if (__DEV__) {
    alert('Hello World') // eslint-disable-line no-alert

    setImmediate(() => 1)

    setInterval(() => 1, 1000)

    requestAnimationFrame(() => 1)

    setTimeout(() => {
        console.log('Hello') // eslint-disable-line no-console
    }, 1000)
}
