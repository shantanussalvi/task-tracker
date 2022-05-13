import React from 'react'
import Button from "./Button";

const header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button  color= {props.show ? "red" : "green"} text={props.show ? "Close" : "Add"} onclick={props.onAdd} />
        </header>
  )
}

header.defaultProps = {
    title: "Task Tracker",
}

export default header