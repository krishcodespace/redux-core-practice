import React,{useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import CenterDiv from './../../helper/CenterDiv';
import { getData } from '../../redux/action/actionTypes';



const EditFrom = ({handleClose,singledata, isProducts,}) => {
  

    
  // console.log('isProducts', isProducts)
    console.log('singledata', singledata)
   

       
    const [formData, setFormData] = useState(singledata);
    const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log("🚀 ~ file: EditFrom.js:28 ~ handleChange ~ e:", e)
  };

  const handleSubmit = (e) => {
  e.preventDefault();
    // You can handle the form submission logic here
    console.log("handlesubmit run successfully")
    console.log('Form Submitted:', formData);
};

  return (

    <div  style={{
        width:"50%",
        backgroundColor:"white",
        padding: "10px",
      
        border:"1px solid black",
        borderRadius: "1rem",
        position:"absolute",
        height:"auto", 
        // display:"flex",
        // flexDirection:"column",
        // justifyContent:"center",




    }} >
    <div className="close" style={{
      display:'flex',
      justifyContent:"flex-end"
    }}>

    <CloseIcon  style={{
      
      left:"48%",
      marginBottom:"2rem",
      cursor:"pointer",
    }} fontSize='large' onClick={handleClose}/>
       
    </div>
<div className="input-feild" style={{
  marginTop:"1rem"
}}>
    <CenterDiv className="image-container" style={{
      border:"1px solid black",
      borderRadius:"20%"
    }}>

    <img
    height={150}
    width={200}
    style={{
      objectFit:"cover"
    }}
    src={formData?.images?.[0]}
    

    />
    </CenterDiv>

    <TextField
      label="Title"
      name="title"
      value={formData?.title}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Description"
      name="description"
      value={formData?.description}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Price"
      name="price"
      type="number"
      value={formData?.price}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Discount Percentage"
      name="discountPercentage"
      type="number"
      value={formData?.discountPercentage}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />

    <Rating value={formData?.rating}>
      Rating
    </Rating>
    
    <TextField
      label="Stock"
      name="stock"
      type="number"
      value={formData?.stock}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
    {/* Add other form fields as needed */}
    <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
      submit
    </Button>
</div>

  </div>
  )
}

export default EditFrom