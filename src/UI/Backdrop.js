import React from 'react'
import ReactDOM from 'react-dom'

import './Backdrop.scss'

const Backdrop = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="backdrop" onClick={props.onClick}>
          {props.children}
        </div>,
        document.getElementById('backdrop')
      )}
    </React.Fragment>
  )
}

export default Backdrop
