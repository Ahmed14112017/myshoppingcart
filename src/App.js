import { Container } from 'react-bootstrap';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Store from './component/Store';
import About from './component/About';
import Layout from './component/Layout';
import ShopingCartProvider from './Context/ShopingCartcontext';

function App() {
  return (
    <ShopingCartProvider>
      <Container fluid className='mb-4'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Store' element={<Store />} />
            <Route path='About' element={<About />} />
          </Route>
        </Routes>
      </Container>
    </ShopingCartProvider>
  );
}

export default App;
