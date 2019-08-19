// eslint-disable-next-line no-unused-vars
import React from "react"
import logo from "./logo.svg"
import style from "./App.module.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className={style.App}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={style.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  )
}

export default App
