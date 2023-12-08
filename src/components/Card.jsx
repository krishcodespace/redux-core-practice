import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addToCart, deleteProduct, getData, getSingleProductData } from "../redux/action/actionTypes";
import { useNavigate } from "react-router-dom";
import "./card.css";
import { Rating } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditFrom from "./edit/EditFrom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Card = ({
  id,
  title,
  description,
  price,
  rating,
  image,
  isProducts,

} ) => {

  
  const [length, setLength] = useState(description);
  const [desc, setDesc] = useState(description)
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const {singleProduct} = useSelector((state)=> state.productReducer)

  // console.log('singleProduct', singleProduct)


  const dispatch = useDispatch();
  const navigate = useNavigate();



  // description length set not more than 50 length
  useEffect(() => {
    if (desc.length > 68) {
      const str = description.substring(0, 50);
      //  console.log(str);
      setLength(str);
    }
  }, [length]);


  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  // delete item

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


  const onClose=()=>{
    setOpen(false)
  }

  //handleEdit
const handleEdit=(id)=>{
  console.log('id', id)
  dispatch(getSingleProductData(id))
  setOpen(true)
  console.log('edit run successfully')
}
//Add to cart
const handleDelete=(id) => {
  console.log("🚀 ~ file: Card.jsx:86 ~ handleDelete ~ id:", id)
  dispatch(deleteProduct(id))
}
const handleAddtoCart=(id)=>{

 dispatch(getSingleProductData(id));
 


}

  return (
    <>
      <div  className="card" key={id}>
        <div style={{ display: "flex" }}>
        <div className="edit" >

          <EditIcon  style={{cursor:"pointer"}} sx={{ marginRight: "0.5rem" }} onClick={()=>handleEdit(id)} fontSize="small" />
        </div>
        <div className="delete">


          <DeleteIcon  style={{cursor:"pointer"}} fontSize="small" onClick={() => handleDelete(id)} />
        </div>
        </div>
        {/* <div className="card" key={id} onClick={()=> dispatch(getSingleProductData(id))}> */}
        <div className="card-img">
          <img className="img" src={image}></img>
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => handleNavigate(id)}>
          <div className="card-title">{title}</div>

          {length && <div className="card-subtitle">{length}</div>}
          <hr className="card-divider" />
        </div>
          <div className="card-footer">
            <div className="card-price">
              <span>$</span> {price}
            </div>
            <Rating value={rating} />
            <button className="card-btn">
              <AddShoppingCartIcon sx={{
                cursor:"pointer",
              }} onClick={()=>handleAddtoCart(id)} />

            </button>
          </div>

        {open ? (

          <div style={{
            width:"50%",
            height:"50%",
            position:"relative",

          }}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                backgroundColor:"whitesmoke",
               
                
              
              }}
            >
            <EditFrom  isProducts={isProducts} singledata={singleProduct?.data} handleClose={onClose}/>
           
            </Modal>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Card;
