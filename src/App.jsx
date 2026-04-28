
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './components/Login'
import Nav from './components/Nav'
import Register from './components/Register'
import TodoList from './components/TodoList'
import NameFilter from './components/NameFilter'
import Tabs from './components/Tabs'
import Home from './components/Home'
import Couter from './components/Couter'
import Form from './components/Form'

function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/register' element={<Register/>}/> 
     <Route path='/login' element={<Login/>}/>
     <Route path='/todoList' element={<TodoList/>}/>
     <Route path='/nameFilter' element={<NameFilter/>}/>
     <Route path='/Tabs' element={<Tabs />} />
     <Route path='/Couter' element={<Couter/>}/>
     <Route path='/Form' element={<Form/>}/>
    </Routes>

    </>
  )
}

export default App
