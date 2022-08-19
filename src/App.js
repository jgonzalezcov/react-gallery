import Gallery from './components/Gallery.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import React from 'react'
import ArrayInfo from './components/ArrayInfo.jsx'

const heroeImages = require.context('./assets/img', true)
function App() {
  return (
    <div>
      <Header
        title="Galería Dragon Ball Super (ReactJs)"
        alignment="center"
        classname="header_title"
      />
      <main className="card_container">
        {ArrayInfo.map((e) => (
          <Gallery
            key={e.id}
            srcs={heroeImages(e.srcs)}
            alt={e.alt}
            name={e.nombre}
            category={e.raza}
          />
        ))}
      </main>
      <Footer />
    </div>
  )
}
export default App
