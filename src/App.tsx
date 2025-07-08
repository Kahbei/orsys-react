import React, { useState } from 'react'
import './App.css';
import FlexVerticalThirGrow from './components/layout/FlexVerticalThirGrow/FlexVerticalThirGrow';
import FlexHorizontalFirstGrow from './components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import MemeForm from './components/MemeForm/MemeForm';
import Footer from './components/ui/Footer/Footer';
import { emptyMeme, MemeSVGViewer } from 'orsys-tjs-meme';

const App = () => {
  const [meme, setMeme] = useState(emptyMeme);

  return (
    <>
      <div>{JSON.stringify(meme)}</div>
      <div className='App'>
        <FlexVerticalThirGrow>
          <Header />
          <Navbar />
          <FlexHorizontalFirstGrow>
            <MemeSVGViewer image={undefined} meme={meme} />
            <MemeForm meme={meme} onMemeChange={(m) => {setMeme(m)}} />
          </FlexHorizontalFirstGrow>
          <Footer />
        </FlexVerticalThirGrow>
      </div>
    </>
  )
}

export default App