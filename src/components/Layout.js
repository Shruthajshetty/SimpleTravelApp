import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return ( 
        <>
        <nav class="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#247075"}}>
  <div class="container-fluid">
  <img src="https://images-platform.99static.com//bhaktHiOk8hZag-35vHeLFwtV8U=/447x3197:972x3722/fit-in/500x500/99designs-contests-attachments/88/88839/attachment_88839233" alt="Logo" className="logo" width="60px" height="60px"  />
    <a class="navbar-brand" href="#"  >STravel</a>    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Destination">Destination</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/AboutUs">About Us</a>
        </li>
        </ul>
      <form class="d-flex" role="search">
        <Link to="/Login" style={{backgroundColor:"#FFFFFF"}}> Login</Link>
      </form>
    </div>
  </div>
</nav>
<Outlet />
      </>
     );
}
 
export default Layout;