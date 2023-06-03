import React from "react";
import './idx.css'
import { FaEdit, FaSignOutAlt } from 'react-icons/fa';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect} from 'react';
import axios from "axios";



export default function Dashsidebar(){
  const history = useNavigate();
  const [userData, setUserData] = useState([]);

  // const [data,setData]=useState([]);
  
  // const  getUserData=async ()=>{
     
    
      
  //       const res= await axios.get("/about",{
  //         headers:{
  //           "Content-Type":"applicaion/json"
  //         }
  //       });

  //       if(res.data.status===401 || !res.data){
  //         console.log("errr");
  //         history("/login");
  //       }
  //       else{
  //         setUserData(res.data.getUser);
  //       }
  // } 
    const calldashboardPage = async () => {
        try {
          const res = await fetch('/about', {
            method: "GET",
            headers: {
              Accept:"application/json",
              "Content-Type": "application/json"
            },
            credentials:"include"
          });
      
          const data = await res.json();
          console.log(data);
          setUserData(data);
         
          
      
          if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
          }
      
      
        } catch (err) {
          console.log(err);
          history ('/login');
        }
      } 
    useEffect(() => {
        calldashboardPage()
      }, []);
      
    
    return(
        <div className="Dashsidebar">
        <div className="sidebarWrapper">
         <div className="sidebarMenu">
          <form method="GET">
          <div className='dashlogo'>
            <img src={`/uploads/${userData.photo}`} alt='' />
          </div>
          <div className="sidebarName">
          {userData.name}
          </div>
          <h1 className="sidebarTitle">{userData.b}</h1>
          <ul className="sidebarList">
           
            <li className="sidebarListItem">
              
              {userData.address} {userData.district + " " +userData.pincode}
            
              
            </li>
            <li className="sidebarListItem">
              Blood Group:{userData.blood_group} <br />
              age: {userData.age}
              
            </li>
            <li className="sidebarListItem">
              <FaEdit />  
              <NavLink className="nav-link0" to={`/edit/${userData._id}`}>Edit Info</NavLink>
            </li>
            <li className="sidebarListItem">
            <FaSignOutAlt />
            <NavLink className="nav-link0" to="/logout">Logout</NavLink>
            </li>

          </ul>
            </form>
        </div>
        </div>
      </div>
    );
}