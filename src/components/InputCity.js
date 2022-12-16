import React from 'react'

export default function InputCity({city , onInputHandler , onSubmitHandler}) {
  return (
   <>
    <div className="input">
        <input  type="text " placeholder='City' onChange={onInputHandler} value={city}/>
        <br/>
        <button className='btn-search' onClick={onSubmitHandler}>Search</button>
    </div>
   
   </>
  )
}
