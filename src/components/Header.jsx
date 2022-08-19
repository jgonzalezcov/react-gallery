import React from 'react'
const Header = (props) => {
  return (
    <header>
      <h1 style={{ textAlign: props.alignment }} className={props.classname}>
        {props.title}
      </h1>
    </header>
  )
}
export default Header
