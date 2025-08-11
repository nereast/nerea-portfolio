import './App.css'
import { Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Suspense fallback='loading'>
      <ScrollToTop />
    </Suspense>
  );
}

export default App;

