import React from 'react'
import Hero from './components/Hero'

const App = () => {
  return (
    <main className="relative, min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="h-64 bg-blue-300"></section>
    </main>
  )
}

export default App