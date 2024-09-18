import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import CreatePost from './components/CreatePost';
// import EditBlog from './components/EditBlog';
import Header from './components/Header';
import EditPost from './components/EditPost';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="*" element={<div>Page Not Found</div>} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
