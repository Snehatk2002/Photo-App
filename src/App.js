import logo from './logo.svg';
import './App.css';
import AddPhoto from './components/AddPhoto';
import SearchPhoto from './components/SearchPhoto';
import DeletePhoto from './components/DeletePhoto';
import ViewPhoto from './components/ViewPhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddPhoto/>} />
    <Route path='/search' element={<SearchPhoto/>} />
    <Route path='/delete' element={<DeletePhoto/>} />
    <Route path='/view' element={<ViewPhoto/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
