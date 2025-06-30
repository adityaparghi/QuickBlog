import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Dashboard from './pages/admin/Dashboard'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import AddBlog from './pages/admin/AddBlog'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import { ProtectedRoutes } from './components/ProtectedRoutes'


const App = () => {
  return (
    <div>
      <Toaster /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/admin' element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path='addBlog' element={<AddBlog />} />
          <Route path='listBlog' element={<ListBlog />} />
          <Route path='comments' element={<Comments />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
