/* @flow */

import React from 'react'

const selfClosing = <div/>
const multiLine = (
    <div>
        <span>Hello World</span>
        <div>{selfClosing}</div>
    </div>
)

const singleProp = <input onChange={() => 1}/>
const multiProp = (
    <input
        onBlur={() => 2}
        onChange={() => 1}
    >
        {multiLine}
    </input>
)

const a = ( // eslint-disable-line no-unused-vars
    <div>
        {singleProp}
        {multiProp}
    </div>
)
