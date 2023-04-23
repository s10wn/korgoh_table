import React,{useState, useEffect, useLayoutEffect} from "react";
import MediaQuery from "react-responsive";
import { MobileTable } from "./MobileTable";
import { Tables } from "./Table";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./hooks/useAuth";

export const App = () => {

  const navigate = useNavigate();

  useEffect(() => {  
    if(!useAuth()){
    navigate('/login', {replace: true})
    // window.location.replace('/login')
  }})

  return (<>
    <MediaQuery minWidth={1200}>
  <Tables id={0} name={""} address={""} name_order={""} created_date={""} end_date={""} actual_date={""} price={0} prepayment={0} status={""} comment={""} difficulty={""} responsible={""} offer={""}/>
  </MediaQuery>
  <MediaQuery maxWidth={1200}> 
    <MobileTable/>
   </MediaQuery>

  </>)
};
