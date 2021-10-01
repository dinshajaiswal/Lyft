import React from "react";
import web from "../src/images/pic4.jpg";

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>

const Navbar = () => {
  return (
    <>
      <div className="section">
        <div className="nav">
        <div className="row">
          <div className="col md-10">
          <nav class="navbar navbar-expand-lg navbar-light bg-none">
  <div class="container">
    <a class="navbar-brand" href="#"><i class="fas fa-car"></i> lyA</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="col-xs-3 ml-auto">
    <div class="input-group ">

  <input type="text" class="form-control ml-2 inp"  placeholder="Where are you going?" />
  <span class="input-group-text"><i class="fas fa-search" /></span>
  
  {/* <form class="form-inline">
    <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-info" type="submit"><i class="fas fa-search"></i></button>
  </form> */}
</div>
      </div>
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">DRIVER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">RIDER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">BUSINESS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">LOGIN</a>
        </li>
        <li class="nav-item dropdown">
		   <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">SIGNUP</a>
		    <ul class="dropdown-menu">
			  <li><a class="dropdown-item" href="#">Signup to ride</a></li>
			  <li><a class="dropdown-item" href="#">Apply to drive</a></li>
		    </ul>
		</li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
          </div>
        </div>
       
        </div>
      </div>
      <hr/>

      <section id="banner">
      <div className="container">
        <div className="row">
        <div className="col-md-6">
        <h6>READY WHEN YOU ARE</h6>
        
        <h1>Hop in. Crack a window. Let's get back out there.</h1>
        <div className="container bt">
        <button class="btn btn-primary" type="submit">Apply to drive</button>
        
        <button class="but" type="submit">Sign up to ride</button>
       </div>
        </div>
        <div className="col-md-6 text-right">
        <img src={web} className="img-fluid col-xs-12 ima " alt="img"  />
        </div>
       

        </div>
      </div>

      </section>
    </>
  );
};
export default Navbar;
