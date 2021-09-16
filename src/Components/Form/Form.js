import React, { useState } from 'react'
import './Form.css'

 const Form = (props) => {
    const [name, setName] = useState('')
    console.log(name)

    return (
        <form
        onSubmit={(event)=>{
            event.preventDefault()
            props.searchCity(name)
            }}
            >
            <div className='searchBar'>

            <input type="text"
            value={name}
                onChange = {(event) => setName(event.target.value)}
            />
            <button>search</button>
            </div>
        </form>
    )
}
export default Form