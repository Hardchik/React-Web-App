// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar/navbar'
import Hero from './components/Hero Section/hero'
import Footer from './components/Footer/footer'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <>
    {
      loading ?
      (<div className="App">
          <ClimbingBoxLoader 
            className="loader" 
            color={"#F37A24"} 
            loading={loading} 
            size={30} />
      </div>)
      :
      (<div className='content'> 
        <NavBar />
        <Hero />
        <Footer />
      </div>)
    }
    </>
  );
}

export default App;
