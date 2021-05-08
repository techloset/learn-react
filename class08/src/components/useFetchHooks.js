
import React, { Component, useState,useEffect } from "react";

export function useFetchOrders() {
  const [stuName, setName] = useState("naveed");

  async function fetchOrders () {
    let products =  await fetch('https://fakestoreapi.com/products')
    console.log("products",await products.json());
 }

  useEffect(()=>{
    fetchOrders()
    return ()=>   console.log("useEffect === component will un Mound");
  }, [])

  useEffect(()=>{
   console.log("useEffect === component did updated");
})


  console.log("render")
  return [stuName,setName]
}