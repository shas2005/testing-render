import React from 'react';
import './App.css';

import FooterBar from './components/FooterBar';
import NavBar from './components/NavBar';
import NoScreen from './screens/NoScreen';
import ProductsScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import SingleProductScreen from './screens/SingleProductScreen';
import UserScreen from './screens/UserScreen';

import {
  Route,
  useParams,
  Routes,
  BrowserRouter
} from "react-router-dom";

const ProductIdWrapper = () => {
  const { productId } = useParams();
  return <SingleProductScreen productId={productId} />;
};

class App extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
                <NavBar />
                
                <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    
                    <Route path="/products" element={<ProductsScreen/>}/>
                    <Route path="/products/:productId" element={<ProductIdWrapper/>}/>
                    <Route path="/users/:userId" element={<UserScreen/>}/>

                    <Route path="*" element={<NoScreen/>}/>
                  </Routes>
                </BrowserRouter>
                
                <FooterBar/>
            </div>
        );
    }
}

export default App;