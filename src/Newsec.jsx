import React from "react";
import web1 from "../src/images/photo.jpg";
import web8 from "../src/images/pic1.jpg";
import web9 from "../src/images/pic2.jpg";
import web10 from "../src/images/pic4.jpg";
const Newsec=()=>{

    return(
        <>
        <div className="section">
        <div className="nav">
        <div className="row">
          <div className="col md-10">
         
          </div>
        </div>
       
        </div>
      </div>
      <hr/>

      <section id="banner2"  >
      <div className="container">
        <div className="row">
        <div className="col-md-6 text-right part1">
        <img src={web1} className="img-fluid col-xs-12 ima2" alt="img"  />
        </div>
        <div className="col-md-6 part2">
        <h6>DRIVE WITH LYFT</h6>
        <h3>Set your own hours.</h3>
        <h3>Earn on your own terms.</h3>
       <div className="main_p"> <p>Maybe you're saving up for school. Or keeping flexible hours to spend more time with your family. It's a great time to get in driver's seat, connect with your community, and earn a little extra cash. Plus, you can tell people you've got the best boss in town: you.</p>
        </div><h5><i class="fas fa-laptop-code"></i> Reliable earnings</h5>
        <p>Make money, keep your tips, and use in-app tools to help maximize your earnings</p>
        
        <h5><i class="fas fa-clock"></i>  A flexible schedule</h5>
        <p>Be your own boss and drive whenever it works for you</p>
        
        <h5><i class="fas fa-bolt"></i> Get paid promptly</h5>
        <p>Cash out your earnings whenever you want with Express Pay and Lyft Direct</p>
        <div className="container bt">
        <button class="btn btn-primary" type="submit">Apply to drive</button>
        
        <button class="but" type="submit">How driver pay works <i class="fas fa-arrow-right"></i></button>
       </div>
        </div>
       
       

        </div>
      </div>
      <div class="container">
      <div class="row">
      <div class="col-md-offset-3 pd-8">
      <br/>
      <br/>
      <br/>
    <div id="carouselContent" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active text-center p-4">
            <img class="imagee" src={web8} width="30px" height="45px"/>
                 <p>“As a student, it’s hard to complete my class work around a schedule. I started driving more with Lyft and realized it was the perfect opportunity to make money and work on my own time! Driving with Lyft gives me freedom in my schedule to focus on school, which is my main priority.”</p>
                 <h4>- Harold</h4>
                 <h6>Driving with Lyft since 2020</h6>
            </div>
            <div class="carousel-item text-center p-4">
                <img class="imagee" src={web9} width="30px" height="45px" />
                <p>“I'm a disabled Marine Corps veteran, and because of my disability, I'm no longer able to work in a structured environment. The few hours a week that I drive connects me to my community and gives me extra money to help make ends meet.”</p>
                 <h4>— Christine</h4>
                 <h6>Driving with Lyft since 2016</h6>
            </div>
            <div class="carousel-item text-center p-4">
            <img class="imagee" src={web10} width="30px" height="50px"/>
                <p>“Driving with Lyft is the perfect way to make money and be there for my family’s needs. I love providing a way to get my passengers from point A to B. Independence is key for me, and I enjoy meeting new people while driving!”</p>
                <h4>— Timothy</h4>
                 <h6>Driving with Lyft since 2017</h6>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselContent" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselContent" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
</div>
</div>
       
      </section>
        </>
    );
}
export default Newsec;
