import React from 'react'

export default function Spacer({offset} : {offset : number}) {
  return (
    <div style={{height : offset}}/>
  )
}
