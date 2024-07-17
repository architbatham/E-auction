import './Header.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Auth from '../AuthComponent/Auth';

function Header() {

  const [ HeaderContent , setHeaderContent ] = useState();
  
  useEffect(()=>{
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")    
    {
        setHeaderContent(<>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <a class="nav-item nav-link active"><Link to="/admin">Admin Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/manageusers">Manageusers</Link></a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#f95c37"}}>Settings</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a class="dropdown-item"><Link style={{"color":"black"}} to="/cpadmin">Change Password</Link></a>
                            <a class="dropdown-item"><Link style={{"color":"black"}} to="/epadmin">Edit Profile</Link></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#f95c37"}}>Manage Category</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a class="dropdown-item"><Link style={{"color":"black"}} to="/addcategory">Add Category</Link></a>
                            <a class="dropdown-item"><Link style={{"color":"black"}} to="/addsubcategory">Add SubCategory</Link></a>
                        </div>
                    </div>
                </div>
                <a class="btn btn-primary rounded-pill px-3 d-none d-lg-block" ><Link to="/logout" style={{"color":"white"}} >Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </>);
    }
    else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")    
    {
        setHeaderContent(<>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/viewpc">View Product</Link></a>
                    <a class="nav-item nav-link"><Link to="/addproduct">Add Product</Link></a>
                    <a class="nav-item nav-link"><Link to="/viewbidp">View Bid Product</Link></a>
                </div>
                <a class="btn btn-primary rounded-pill px-3 d-none d-lg-block" ><Link to="/logout" style={{"color":"white"}} >Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </>);
    }
    else
    {
        setHeaderContent(<>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/about">About Us</Link></a>
                    <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                    <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#f95c37"}}>Pages</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a class="dropdown-item">Blog</a>
                            <a class="dropdown-item">Testimonials</a>
                        </div>
                    </div>
                    <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                </div>
                <a class="btn btn-primary rounded-pill px-3 d-none d-lg-block" ><Link to="/login" style={{"color":"white"}} >Login</Link><i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </>);
    }
  });

  return (
    <>
        <Auth />
                {/* Navbar Start */}
                <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" class="navbar-brand">
                <h1 class="m-0 text-primary">E-Auction</h1>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            { HeaderContent }    
        </nav>
        {/* Navbar End */}
    </>
  );
}

export default Header;
