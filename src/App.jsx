import React from "react"
import './App.css'
import Navbar from "./Components/Navbar"
import Posts from "./Components/Posts"

function App() {

  return (
    <>
      <div className="App">
      <Navbar />
      <Posts title="Hamza" height="300" imgSrc="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" icon="H" />
      <Posts title="Rayyan" height="300" imgSrc="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" icon="R" />
      <Posts title="Tayyab" height="300" imgSrc="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" icon="T" />
      </div>
    </>
  )
}

export default App
