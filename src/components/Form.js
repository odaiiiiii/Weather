


import React from 'react'

export default function Form(props) {
  return (
    <div className='container'>    
    <form className='my-5' onSubmit={props.getData}>

    <div className='row '> 

    <div className='col-5 col-md-5 input-form'>
    <input type="text" className="form-control" name='Country' id="Country" placeholder="Country Name"  />
    </div>

    <div className='col-5   col-md-5 input-form'>
    <input type="text" className="form-control" name='City' id="City" placeholder="City Name" />
    </div>

    <div className='col-2   col-md-2   btn-form'>
    <button className='btn  w-100 color-btn' >Search </button>
    </div>
    </div>


    </form>
    </div>
  )
}
