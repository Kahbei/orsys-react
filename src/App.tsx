import React, { useEffect, useState } from 'react'
import './App.css';
import FlexVerticalThirGrow from './components/layout/FlexVerticalThirGrow/FlexVerticalThirGrow';
import FlexHorizontalFirstGrow from './components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import MemeForm from './components/MemeForm/MemeForm.connected';
import Footer from './components/ui/Footer/Footer';
import { emptyMeme, MemeSVGViewer, type ImageInterface } from 'orsys-tjs-meme';
import { store } from './store/store'

const App = () => {
  const [meme, setMeme] = useState(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([]);

  console.log(store);

  useEffect(
    () => {
      fetch('http://localhost:5679/images',).then(res => res.json()).then(arr => setImages(arr));
    },
    []
  );

  return (
    <>
      <div>{JSON.stringify(meme)}</div>
      <div className='App'>
        <FlexVerticalThirGrow>
          <Header />
          <Navbar />
          <FlexHorizontalFirstGrow>
            <MemeSVGViewer image={undefined} meme={meme} />
            <MemeForm images={images} /*meme={meme} onMemeChange={(m) => {setMeme(m)}}*/ />
          </FlexHorizontalFirstGrow>
          <Footer />
        </FlexVerticalThirGrow>
      </div>
    </>
  )
}

export default App