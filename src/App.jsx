import React, { Component } from 'react'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Ourmenu from './components/Ourmenu'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Hero />
       <About />
       <Ourmenu />
       <Contact />
      </div>
    )
  }
}

export default App