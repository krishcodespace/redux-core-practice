import './App.css';
import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, getData } from './redux/action/actionTypes';
import { getSingleProductData } from './redux/action/actionTypes';
import Card from './components/Card';
import { NavLink, Route, Routes} from "react-router-dom"
import ProductDetailPage from './components/SingleProduct';
import ProductContainer from './components/ProductContainer';
import { useParams } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import Home from './components/Home';
import AddProduct from './components/add/AddProduct';



function App() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  let {id} = useParams();
  console.log("id",id);
  

 
  const handleAdd = () => {
       dispatch(addProduct(
      {
        id:"250",
        "title": "krox galxy five serice 2025",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        "price": 1500,
        "discountPercentage": 4.15,
        "rating": 4.25,
        "stock": 50,
        "brand": "iphone",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        "images": [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
        ]
        },
    ))
  }

  useEffect(() => {
   
    dispatch(getData());

    // dispatch(getSingleProductData(7))
 

  }, [dispatch]);

  return (

    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path='/product' element={<ProductContainer />} />
       <Route exact path="/product/:id" element={<SingleProduct />} />
       {/* <Route exact path="/product/add" element={<AddProduct />} /> */}
       
       {/* <Route path={`/product/${id}`} element={<SingleProduct />} /> */}


    
      </Routes>
      {/* <button onClick={handleAdd}>add product</button> */}
      
     
    </div>
  );
}

export default App;
