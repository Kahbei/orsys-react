import './App.css';
import FlexVerticalThirGrow from './components/layout/FlexVerticalThirGrow/FlexVerticalThirGrow';
import FlexHorizontalFirstGrow from './components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import { Route, Routes } from 'react-router';
import Home from './components/pages/Home';
import Editor from './components/pages/Editor';
import Thumbnail from './components/pages/Thumbnail';


const App = () => {
  return (
    <div className='App'>
      <FlexVerticalThirGrow>
        <Header />
        <Navbar />
        <FlexHorizontalFirstGrow>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path="/editor/" Component={Editor} />
            <Route path="/editor/:id" Component={Editor} />
            <Route path='/thumbnail' Component={Thumbnail} />
          </Routes>
        </FlexHorizontalFirstGrow>
        <Footer />
      </FlexVerticalThirGrow>
    </div>
  )
}

export default App