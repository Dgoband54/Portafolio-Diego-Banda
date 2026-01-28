import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;