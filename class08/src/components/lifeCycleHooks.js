// / functional component
// class component
import React, { Component, useState,useEffect } from "react";
import {useFetchOrders} from "./useFetchHooks";

export function StudentsFunction() {
//   const [stuName, setName] = useState("naveed");
  const [stuName, setName] = useFetchOrders();


  return (
    <div>
      <p>date {stuName}</p>
    </div>
  );
}