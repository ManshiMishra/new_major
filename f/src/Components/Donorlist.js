
import {useEffect, useState} from "react";
import Donordata from "./Donordata.js";
import './Donorlist.css'
export default function Donorlist() {
    
  // const [users, setUsers] = useState([]);

  // const fetchUsers = async (url) => {
  //     try {
  //         const res = await fetch(url);
  //         const data = await res.json();
  //         if (data.length > 0) {
  //             setUsers(data);
  //         }
  //         console.log(data);
  //     } catch (e) {
  //         console.error(e)
  //     }
  // }


  // useEffect(() => {
  //     fetchUsers(API);
  // }, [])

    return (
      <div className="donortable">
        <table>
      <thead>
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Blood Group</th>
          <th>Address</th>
      </tr>
      </thead>
      <tbody>
        
      {/* <Donordata users={users}/> */}
      </tbody>
  </table>
      </div>
    );
  }