import React, { useState } from 'react'


const AddTask = ({onAdd}) => {
  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
      alert("Please add task")
      return
    }
    if(!day){
      alert("Please add day")
      return
    }
    onAdd({text, day, reminder})
    setText("")
    setDay("")
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            {/* e = event object */}
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Date and Time</label>
            <input type="datetime-local" value={day} onChange={(e)=> setDay(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type="submit" value="Save Task" className='btn btn-block' ></input>
    </form>
  )
}

export default AddTask