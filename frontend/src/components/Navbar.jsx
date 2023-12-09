import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-evenly",
        width:"100%",
        backgroundColor:"blueviolet",
        alignItems:"center",
        padding:"10px"
    }}>
        <Link to={"/"}><h1  color='black'>Home</h1></Link>
        <Link to ={"/mint"}><h1 color='black'>Mint</h1></Link>

    </div>
  )
}

export default Navbar