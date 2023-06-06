import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
                <img src="https://www.w3schools.com/w3css/img_tablesetting2.jpg" alt="" className='tablesetting' />
            </div>
            <div className="col-12 col-sm-6 col-md-6 mt-5">
                <h1 className='aboutcatering'>About Catering</h1><br /><br />
                <h5>Tradition since 1889</h5>
                <div className="container centertag">
                <div className="row">
                <p className='firstp'>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur.We only use <span>seasonal</span> ingredients.</p>
                  <p className='secondp'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod 
                    temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </div>
            </div>
        </div>
      </div>
      <hr />
      </div>
      )
  }
}

export default About