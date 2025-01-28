import { useState } from 'react'
import { Intro } from './Intro'
import './App.css'

function App() {

  return (
    <Intro 
    name = "Ronit Sohal"
    characteristics={["developer", "problem-solver", "team player"]}
    />
  );
}

export default App
