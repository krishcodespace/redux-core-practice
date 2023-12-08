// Import necessary libraries and modules
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductData } from "../redux/action/actionTypes";
import {  Rating } from "@mui/material";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.productReducer);

  console.log("data", data);

  const { productData, singleProduct } = data;

  const single = singleProduct?.data;

  console.log("singleProducts", single);

  const { id } = useParams();

  console.log("params", id);
  useEffect(() => {
    // console.log('singleProducts', singleProducts)
    // const productId = match.params.id; // Assuming the product ID is passed as a parameter in the route

    dispatch(getSingleProductData(id));
  }, [dispatch]);

  return (
    <div>
      <h2>Product Detail Page</h2>
      {single && (
        <div>
          <img src={single?.images?.[0]} alt="" />
          <h3>{single.title}</h3>
          <p>{single.description}</p>
          <div>{single?.price}</div>

          <Rating name="simple-controlled" value={single.rating} />
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
