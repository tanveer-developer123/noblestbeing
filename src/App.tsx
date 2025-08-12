import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Navbar />
        <Home />
      </div>

    </>
  )
}

export default App
