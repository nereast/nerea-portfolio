import './App.css'
import { Layout } from './components/Layout'
import ScrollToTop from './components/ScrollToTop';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/home" element={<Layout />}>
      <Route index element={<Layout />} />
    </Route>
  )
)

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Layout/>
    </div>
  )
}

export default App
