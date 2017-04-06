/* @flow */

if (__DEV__) {
    alert('Hello World') // eslint-disable-line no-alert

    setImmediate((): number => 1)

    setInterval((): number => 1, 1000)

    requestAnimationFrame((): number => 1)

    setTimeout(() => {
        console.log('Hello') // eslint-disable-line no-console
    }, 1000)
}
