
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './components/Login'
import Nav from './components/Nav'
import Register from './components/Register'
import TodoList from './components/TodoList'
import NameFilter from './components/NameFilter'
import Tabs from './components/Tabs'

function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
     <Route path='/register' element={<Register/>}/> 
     <Route path='/login' element={<Login/>}/>
     <Route path='/todoList' element={<TodoList/>}/>
     <Route path='/nameFilter' element={<NameFilter/>}/>
     <Route path='/Tabs' element={<Tabs />} />
    </Routes>

    </>
  )
}

export default App
