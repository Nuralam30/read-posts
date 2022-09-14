import './App.css';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import Help from './components/Help/Help';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/' element={ <Posts></Posts>}></Route>
          <Route path='/posts' element={ <Posts></Posts>}></Route>
          <Route path='/help' element={ <Help></Help>}></Route>
          <Route path='/post-details/:postId' element={ <PostDetails></PostDetails>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
