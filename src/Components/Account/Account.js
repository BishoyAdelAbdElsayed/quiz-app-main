import React from 'react'
import "../../App.js";
const Account = () => {
  return (
    <div className='Account'>
      <h1 className='mainhead1'>personal information</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name<span>*</span></label>
          <input
            type="text"
            name="name"
            id="name"
            />
            </div>
            <div className='form-group'>
            <label htmlFor='name'>Phone/Mobile<span>*</span></label>
          <input
            type="text"
            name="phone"
            id="phone"
            />
            </div>
            <div className='form-group'>
            <label htmlFor='name'>Email<span>*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            />
            </div>
            <div className='form-group'>
            <label htmlFor='name'>Age<span>*</span></label>
          <input
            type="age"
            name="age"
            id="age"
            />
            </div>
            <div className='form-group'>
            <label htmlFor='name'>city<span>*</span></label>
          <input
            type="city"
            name="city"
            id="city"
            />
            </div>
            
        </div>
        <button className='mainbutton1'>Save Changes</button>
    </div>
  )
}

export default Account
