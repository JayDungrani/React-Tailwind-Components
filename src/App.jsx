import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='min-h-screen flex flex-col gap-10 px-2'>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App
