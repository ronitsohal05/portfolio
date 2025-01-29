import { useState } from 'react'
import { Intro } from './Intro'
import './App.css'
import { WireframeAnimation } from './WireframeAnimation';

function App() {

  return (
    <div className='flex flex-row items-center justify-around min-h-screen bg-primary text-white'>
      <Intro
        name = "Ronit Sohal"
        characteristics={["developer", "problem-solver", "team player"]}
      />
      <WireframeAnimation />
    </div>

  );
}

export default App
