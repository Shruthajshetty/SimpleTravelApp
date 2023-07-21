import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://images.unsplash.com/photo-1506426235353-205ad887bb38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1509854379616-2ac8dc2de678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Are you New Here</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1533132824464-d286d371ffe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Login here for Better experience</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
     
      </div>
      <div className="container">
      <div class="row">
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
        <div class="card-body">
          <h5 class="card-title">Travel Love</h5>
          <p class="card-text">“Jobs fill your pockets, adventures fill your soul.”</p>
          <a href="/Destination" class="btn" style={{backgroundColor:"#247175"}}>Destination</a>
        </div>
      </div>
     </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbGxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
          <h5 class="card-title">Travel Love</h5>
          <p class="card-text">“Remember that happiness is a way of travel, not a destination.”</p>
          <a href="/Destination" class="btn" style={{backgroundColor:"#247175"}}>Destination</a>
        </div>
      </div>
    </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://plus.unsplash.com/premium_photo-1669748156486-8ae715627d28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <div class="card-body">
          <h5 class="card-title">Travel Love</h5>
          <p class="card-text">“Travel is the only thing you buy that makes you richer.”</p>
          <a href="/Destination" class="btn" style={{backgroundColor:"#247175"}}>Destination</a>
        </div>
      </div>
    </div>

    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1610023926499-571d3b203226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <div class="card-body">
          <h5 class="card-title">Travel Love</h5>
          <p class="card-text">“The world is a book and those who do not travel read only one page.”</p>
          <a href="/Destination" class="btn" style={{backgroundColor:"#247175"}}>Destination</a>
        </div>
      </div>
    </div>
  
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row" style={{backgroundColor:"#247175"}}>
            
              <h3>Contact Us</h3>
              <ul>
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
              </ul>
           
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span className="text-muted">
                  &copy; 2023 STravel Website
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </footer>





      <Outlet />
    </>
  );
};

export default Home;
