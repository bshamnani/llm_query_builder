import User from './components/User';
import Admin from './components/Admin';
import NoPage from './components/NoPage';
import Navbar from './components/Navbar';
import ShowResult from './components/ShowResult';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QueryInput from './components/QueryInput';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path ="/" element={<QueryInput />} />     
            <Route path="user" element={<User />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<NoPage />} /> 
            <Route path="/result/:query/:table" element={<ShowResult/>} />
          </Routes>
        </div>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
