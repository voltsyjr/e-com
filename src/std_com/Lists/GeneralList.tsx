import React from 'react'

/*
  T == the type of the data 
  render method
*/

type GeneralListParams<T> = {
  batch : T[], 
  renderMethod : (val : T, index : number, array : T[]) => React.ReactNode, 
  listContainerStyle : React.CSSProperties, 
}

function GeneralList<T>(props : GeneralListParams<T>) {
  return (
    <div style={props.listContainerStyle} >
      {
        props.batch.map(props.renderMethod)
      }
    </div>
  )
}

export default GeneralList