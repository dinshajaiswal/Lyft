import React from "react"
import web2 from "../src/images/finmob.png";
import web4 from "../src/images/pic1.jpg";
import web7 from "../src/images/car.jpg"
const Sec3=()=>{
    return(
        <>
    
      

      <section id="banner3">
      <div className="container">
        <div className="row">
        <div className="col-md-6">
        <br/>
        <h6>RIDE WITH LYFT</h6>
        
        <h5 className="oldh5">Ready, set, go</h5>
        <h5>in just a few quick taps.</h5>
        <p>Whether you're following your heart or your busy schedule, we'll get you where you need to go.</p>
        <div className="container bt">
        <br/>
        <button class="but bt1" type="submit"> <i class="fas fa-male"></i> Get a reliable ride in minutes</button>
        <br/>
         <a><h6><i class="fas fa-head-side-mask"></i> Know that your driver is wearing a mask</h6></a>
         <br/> 
         <h6><i class="far fa-calendar-alt"></i> Schedule your ride in advance</h6>
         <br/>
         
         <button class="btn btn-primary" type="submit">Get a ride</button>
        
         </div>
        </div>
        <div className="col-md-6 text-right">
        <img src={web2} className="img-fluid col-xs-12 ima3 " alt="img"  />
       
       
        </div>
       

        </div>
      </div>
      
      <div className="container">
        <div className="row">
        <div className="col-md-6 mmm">
        
       
        <h5>Ride. Bike. Scoot. Go bananas.</h5>
        <p>We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.</p>
       </div> </div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
      <div class="card">
        <img src={web7} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Rentals</h5>
          <li class="card-text">Seamless</li>
          <li class="card-text">Independence</li>
          
        </div>
      </div>
      <div class="card d-none d-md-block">
        <img src={web7} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Bikes & Scooters</h5>
          <li class="card-text">Effecitent</li>
          <li class="card-text">Eco-friendly</li>
          
        </div>
      </div>
      <div class="card d-none d-md-block">
        <img src={web7} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Shared rides</h5>
          <li class="card-text">Budget-frienlily</li>
          <li class="card-text">Eco-friendly</li>
          
        </div>
      </div>
    </div>
    </div>
    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="card">
          <img src={web7} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Wait & Save</h5>
            <li class="card-text">Budget-frienlily</li>
            <li class="card-text">Private</li>
            
          </div>
        </div>
        <div class="card d-none d-md-block">
          <img src={web7} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Lyft</h5>
            <li class="card-text">Effecient</li>
            <li class="card-text">Private</li>
            
          </div>
        </div>
        <div class="card d-none d-md-block">
          <img src={web7} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Priority Pickup</h5>
            <li class="card-text">Effecient</li>
            <li class="card-text">Private</li>
            
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="card">
          <img src={web7} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Preferred mode</h5>
            <li class="card-text">Roomier cars</li>
            <li class="card-text">Top drivers</li>
            
          </div>
        </div>
        <div class="card d-none d-md-block">
          <img src={web7} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Lyft XL</h5>
            <li class="card-text">Extra seats</li>
            <li class="card-text">Private</li>
            
          </div>
        </div>
        <div class="card d-none d-md-block">
          <img src={web7} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Lyft Lux</h5>
            <li class="card-text">Effecient</li>
            <li class="card-text">Premium</li>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> 
</div>
 </section>
        </>
    );
}
export default Sec3;