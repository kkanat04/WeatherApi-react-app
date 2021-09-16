import axios from 'axios';
import React, { useState } from 'react'
import Form from './Components/Form /Form'
import Output from './Components/Output.js/Output';
import {API, KEY} from './Config'
import './App.css'

const App = () => {
  const [data, setData] = useState(null)

  const searchCity = (name) => {
    axios.get(API + name + KEY)
    .then(data => {
      console.log(data)
     setData(data)
    })
  }

  return (
    <div >
      <Form searchCity={searchCity}/>
      <Output 
        data={data}
      />
    </div>
  );
}

export default App;
