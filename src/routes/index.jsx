import { BrowserRouter as Router, Route } from "react-router-dom"
import React from "react"
import Index from "./App"

const App = () => {
  return (
    <Router>
      <Route exact component={Index} path="/" />
    </Router>
  )
}

export default App
