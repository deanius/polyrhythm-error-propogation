import React from "react"

export function Listener({ max=1, num=0, throwOnNumber }) {
    if(num === throwOnNumber) {
        throw new Error('Listener error!')
    }
    return <li>
        <div style={{backgroundColor: 'blue', minHeight: 10, width: `${num/max*100}%`, transition: 'width 1s'}}/>
    </li>
}