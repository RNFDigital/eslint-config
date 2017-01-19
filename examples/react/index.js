/* @flow */

import React, {PropTypes} from 'react'

const selfClosing = <div />
const multiLine = (
    <div>
        <span>Hello World</span>
        <div>{selfClosing}</div>
    </div>
)

const onChange = () => 1

const singleProp = <input onChange={onChange} />
const multiProp = (
    <input
        onBlur={onChange}
        onChange={onChange}
    >
        {multiLine}
    </input>
)
const multiPropSelfClosing = (
    <input
        onBlur={onChange}
        onChange={onChange}
    />
)

const a = ( // eslint-disable-line no-unused-vars
    <div>
        {singleProp}
        {multiProp}
        {multiPropSelfClosing}
    </div>
)

const Hello = () => <span>Hello</span> // eslint-disable-line no-unused-vars

const Hello2 = () => <span>Hello 2</span> // eslint-disable-line no-unused-vars

const onAsHandlePrefix = (props) => (
    <input
        onChange={props.onChange}
    />
)

onAsHandlePrefix.propTypes = {
    onChange: PropTypes.func,
}
