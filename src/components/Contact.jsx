import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container contact">
            <h1>Contact</h1><br />
            <p className='tasteit'>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p className='catering'>Catering Service, 42nd Living St, 43043 New York, NY</p>
            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form action="" target='_blank'>
                <p>
                    <input type="text" placeholder='Name' required='Name' />
                </p>
                <p>
                    <input type="text" placeholder='How many people' required='Name' />
                </p>
                <p>
                    <input type="datetime-local" placeholder='Date and time' required='date' />
                </p>
                <p>
                    <input type="text" placeholder='Message \ Special requirements' required='Message' />
                </p><br />
                <p>
                    <button type='submit'>SEND MESSAGE</button>
                </p>
            </form>
        </div>
        <footer>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target='_blank'>w3.css</a></p>
        </footer>
      </div>
    )
  }
}

export default Contact