import React from 'react'
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import AboutPage from '../pages/About'

export default function Post() {
  const params = useParams()
  const status = 200

  const navigate = useNavigate()
  const onClick = () => {
    console.log('Hello');
    navigate('/about')
  }

  if (status === 404){
    return <Navigate to="/notfound"/>
  }
    return (
        <>
            <h1>Post: {params.id}</h1>
            <h1>Name: {params.name}</h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path="/show" element={<h1>Hello world</h1>} />
            </Routes>
        </>
  )
}
