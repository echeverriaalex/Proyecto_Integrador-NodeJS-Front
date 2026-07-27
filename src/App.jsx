import './App.css'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import Routes from './routes/Routes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
    </Layout>
  )
}

export default App