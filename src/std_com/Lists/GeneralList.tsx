import React from 'react'

type GeneralList<T> = {
  batch : T[], 
  renderMethod : (val : T, index : number, array : T[]) => React.ReactNode, 
  currentSelection : number, 
  setCurrentSelected : React.SetStateAction<number>, 
  listContainerStyle : React.CSSProperties, 
}

function GeneralList<T>(props : GeneralList<T>) {
  return (
    <div style={props.listContainerStyle} >
      {
        props.batch.map(props.renderMethod)
      }
    </div>
  )
}

export default GeneralList