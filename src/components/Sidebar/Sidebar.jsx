import React, { useState } from "react";
import "./sidebar.module.style.css";
import avatar from "../../assets/image/avatar.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { MdHome, MdOutlineCancel } from "react-icons/md";
// MdFavorite

function Sidebar({ opensSidebar,setOpenSidebar,handleFilter }) {
  return (
      
    <div>
        {opensSidebar &&
        <div className={"sidebar--div"}>
           <div className={"d-flex justify-content-end"}>
           <MdOutlineCancel fontSize={"2rem"} color={"#29455B"} onClick={()=>setOpenSidebar(!opensSidebar)}/>
         </div>
           <img
             src={avatar}
             alt=""
             className={"sidebar--avatar d-table mx-auto mt-2"}
           />
           <h4 className={"name--style text-center mt-2"}>maryam Rezaei</h4>
       
         
           <ul className={"sidebar--ul mt-5"}>
             <li onClick={(name) => handleFilter("All")}>
               <MdHome /> All
             </li>
             <li onClick={(name) => handleFilter("Favorite")}>
               {" "}
               <MdFavoriteBorder /> Favorite
             </li>
             <li onClick={(name) => handleFilter("Completed")}>
               <MdDoneOutline /> Completed
             </li>
           </ul>
           </div>
        }
   
      </div>
  
  );
}

export default Sidebar;
