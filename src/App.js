import './App.css';
import Index from './routes/Index';
import Company from './routes/Company';
import Pricing from "./routes/Pricing"
import Contact from "./routes/Contact"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import Main from './routes/Main';

function App() {
  return (
    <div className= "app">
    
      <Router>



        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/company" element={<Company />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path='signin' element={<Signin />} />
          <Route path='main' element={<Main/>} />


          {/* Add more routes for other pages if needed */}
        </Routes>


        <Loader />
      </Router>
    </div>
  );
}

export default App;
