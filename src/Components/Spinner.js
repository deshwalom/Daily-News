import React, { Component } from 'react'
import load1 from './load1.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
          <img className=" my-3"src={load1} alt='loading' style={{height:'35px'}}/>
      </div>
    )
  }
}

export default Spinner
