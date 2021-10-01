import React from "react"
const Sec4=()=>{
    return (
        <>
        {/* <div class="container">
            <h5>Ready to roll?</h5>
            <h5>Get a Lyft estimate</h5>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  
</form>
  </div> */}
  {/* <div class="container">
  <div class="row">
    <div class="col">
    <h5>Ready to roll?</h5>
     <h5>Get a Lyft estimate</h5>
    </div>
    <div class="col">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="col">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="col">
    <button class="but" type="submit">Lyft drive app</button>
    </div>
  </div>
</div>

       */}
       
       <div className="section lastsec">
       <br/>
        <div className="nav">
        <div className="row">
          <div className="col-md-3 lastt">
          <h5>Ready to roll?</h5>
     <h5>Get a Lyft estimate</h5>
          </div>
          <div className="col-md-3">
          <input type="email" placeholder="Enter pick-up location*" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
          </div>
          <div className="col-md-3">
          <input type="email" placeholder="Enter Drop-off location*" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
          </div>
          <div className="col-md-3">
          <button class="but" type="submit">Get estimate</button>
   
          </div>
          </div>
          </div>
          </div>
        </>
    );
}
export default Sec4;