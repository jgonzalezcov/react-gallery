import React from 'react'
const Header = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: props.alignment }} className={props.classname}>
        {props.title}
      </h1>
    </div>
  )
}
export default Header
