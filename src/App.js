import './App.css';
import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, getData } from './redux/action/actionTypes';
import { getSingleProductData } from './redux/action/actionTypes'


function App() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productReducer); // Assuming you have a productData reducer in your state
  const singleProduct =  useSelector((state)=> state.productReducer)//

  console.log("singleproduct",singleProduct);
 
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
    dispatch(getSingleProductData(7))
 

  }, [dispatch]);

  return (
    <div className="App">
      <h3>product json</h3>
      <button onClick={handleAdd}>add product</button>
      <hr />
    </div>
  );
}

export default App;
