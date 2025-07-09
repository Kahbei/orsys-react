import './App.css';
import FlexVerticalThirGrow from './components/layout/FlexVerticalThirGrow/FlexVerticalThirGrow';
import FlexHorizontalFirstGrow from './components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import MemeForm from './components/MemeForm/MemeForm.connected';
import Footer from './components/ui/Footer/Footer';
import MemeSvgViewer from './components/ui/MemeSVGViewer/MemeSVGViewer.connected';


const App = () => {
  return (
    <div className='App'>
      <FlexVerticalThirGrow>
        <Header />
        <Navbar />
        <FlexHorizontalFirstGrow>
          <MemeSvgViewer />
          <MemeForm />
        </FlexHorizontalFirstGrow>
        <Footer />
      </FlexVerticalThirGrow>
    </div>
  )
}

export default App