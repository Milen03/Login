
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './components/Login'
import Nav from './components/Nav'
import Register from './components/Register'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
     <Route path='/register' element={<Register/>}/> 
     <Route path='/login' element={<Login/>}/>
     <Route path='/todoList' element={<TodoList/>}/>
    </Routes>

    </>
  )
}

export default App
