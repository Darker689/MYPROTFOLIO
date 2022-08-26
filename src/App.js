// Css
import './App.css'
// Components
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/servicess/Services'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Pricing from './components/pricing/Pricing'
import Testimonials from './components/testimonials/Testimonials'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
// react-router-dom
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonials/>
        <Blog/>
        <Contact/>
      </main>
    </BrowserRouter>
  );
}

export default App;
