import React from 'react'

const AddTask = () => {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type="text"></input>
        </div>
        <div className='form-control'>
            <label>Date and Time</label>
            <input type="text"></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox"></input>
        </div>
        <input type="submit" value="Save Task" className='btn btn-block'></input>
    </form>
  )
}

export default AddTask