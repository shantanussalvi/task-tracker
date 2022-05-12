import React from 'react'
import Button from "./Button";

const header = (props) => {
    const onclick = () => {
        console.log("Click");
    }
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color="green" text="Add" onclick={onclick} />
        </header>
  )
}

header.defaultProps = {
    title: "Task Tracker",
}

export default header