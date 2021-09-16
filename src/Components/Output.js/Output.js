import { Repeat } from '@material-ui/icons'
import React from 'react'
import './Output.css'


 const Output = (props) => {
    // let lat = {props.data.data.coord.lat}

     let mapUrl= 'https://www.google.com/maps/d/u/0/embed?mid=1fsdvcNQxxgklEVIuJfJBVe3rNqYf7C_e&ll='
    return (
        
        <div className={
            props.data?.data.weather[0].main === 'Clear' ? "clear" : 
            props.data?.data.weather[0].main === 'Rain' ? "rain" : 
            props.data?.data.weather[0].main === 'Clouds' ? "clouds" :
            props.data?.data.weather[0].main === 'Snow' ? "snow" :
            "default"
        }>


        {
            props.data?
       <div>
       <h1>{props.data.id}</h1>
       <p>{props.data.data.name}</p>
       <p>{props.data.data.main.temp}</p>
       <p>{props.data.data.weather[0].main}</p>
       
       {/* {<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=900&amp;height=600&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>} */}
       <iframe src={mapUrl + props.data.data.coord.lat + ',' + props.data.data.coord.lon} width="640" height="480"></iframe>
       </div>
        
        
       :

       <h2 className='h2w' style={{background: 'teal', width: '100%', height: '100vh'}}>Weather</h2>
        }
   </div>
    )
}
export default Output