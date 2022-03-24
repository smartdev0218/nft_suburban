import UserMain from './components/Main';
import AdminMain from './admin panel/AdminMain';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ChangePassword from './admin panel/ChangePassword';

function App() {
  return (
    
        <Router>
            <Routes>
              <Route path="/" element={<UserMain/>}></Route>
              <Route path="/admin*" element={<AdminMain/>}></Route> 
              <Route path="/admin/changepassword" element={<ChangePassword/>}></Route> 
            </Routes>
        </Router>
    
  );
}

export default App;
