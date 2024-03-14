// import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from 'react-router-dom'
import Navigation from './components/Navigation/index'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Home from './components/Home/index';
import SampleSurvey from './components/SampleSurvey/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route path="sample-survey" element={<SampleSurvey />}/>
      {/* <Route path="teacher-survey" element={<TeacherSurvey />}/> */}
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />;
}

export default App
