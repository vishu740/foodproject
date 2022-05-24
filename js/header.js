const dataCheck=` <div class="top-header d-none d-lg-block">
<div class=" text-white d-flex justify-content-between ">
  <ul class="header-socile ml-4 d-block d-none d-lg-block  ">
    <li><i class="fa fa-facebook-official " aria-hidden="true"></i></li>
    <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
    <li><i class="fa fa-twitter-square" aria-hidden="true"></i></li>
  </ul>
  <div class="number d-none d-lg-block">
    <h5 class="text-white mr-4 "><i class="fa fa-phone phone" aria-hidden="true"></i> +91 9810179544 &nbsp Order
      on Call
    </h5>
  </div>
</div>

</div>
<div id="navigation">
<div class="row m-0 p-lg-2 p-0 ">
  <div class="col-lg-3">
    <div class="logo-1 d-flex justify-content-center">
      <a class="#navbarSupportedContent d-none d-lg-block" href="#"><img src="./images/chickenlogo.png"
          class="w-100% logo "></a>
    </div>
  </div>
  <div class="col-lg-2 mt-2 d-none d-lg-block">
    <!-- <img src="./images/location_icon.svg"> -->
    <div class="location d-flex justify-content-center">
      <img src="./images/location_icon.svg">
      <!-- <span> Noida</span> -->

      <!-- <span class="font12"> Noida</span> -->
      <select name="cars" id="cars">
        <option value="volvo">Noida Sector 62 block...</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </div>
  <div class="col-lg-3 d-flex justify-content-center  searchlogo">
    <!-- <form class="form-inline "> -->
    <input class="form-control mr-sm-2 position-relative d-none d-lg-block" type="search" placeholder="Search"
      aria-label="Search">
    <img src="./images/search_icon.svg" class="searchimg d-none d-lg-block">
    <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button> -->
    <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
    <!-- </form> -->
    <div class="">
      <!-- <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
              </form> -->
    </div>


  </div>
  <div class="col-lg-2 d-none d-lg-block">
    <div class=" mt-2 d-flex justify-content-center loginin">
      <div class="login d-none d-lg-block">
        <img src="./images/login.svg">
      </div>
      <span class="logincenter d-none d-lg-block">Login</span>
    </div>

  </div>
  <div class="col-lg-2 d-none d-lg-block">
    <div class=" mt-2 d-flex justify-content-center">
      <a href="#" class="buttoncard"> <i class="fa fa-shopping-cart mr-3" aria-hidden="true"></i>My Cart</a>
    </div>

  </div>

</div>

<!-- nabnar -->
<div class="menubg">
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light p-0 ">

      <a class="navbar-brand d-block d-lg-none " href="#"><img src="./images/chickenlogo.png"
          class="w-100% logo "></a>
      <div class="smallnav ml-auto d-block d-lg-none">
        <img src="./images/search_icon.svg" class="mr-3">
        <img src="./images/login.svg">
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto flex-wrap justify-content-center">
          <li class="nav-item ">
            <a class="nav-link hovernav" href="#">CHICKEN </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">MUTTON</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">PORK</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">FISH & SEA FOOD</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">BACON,SAUSAGE & MORE </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">READY TO COOK </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">READY TO EAT </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">GROCERY </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">CHEESE </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">EXOTIC VEGETABLES </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">FRUITS </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hovernav" href="#">EGG & BREADS </a>
          </li>

        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
    <!-- end -->
  </div>
</div>
</div>`;
document.getElementById("headerd").innerHTML=dataCheck;

var nav = document.getElementById('navigation');

window.onscroll = function () {

  if (window.pageYOffset > 50) {

    nav.style.position = "fixed";
    nav.style.top = 0;
    nav.style.background = "white";
    nav.style.zIndex = 999;
    nav.style.width = "100%";
    document.getElementById("padding100").style.marginTop = "180px"
  }

  else {
    // nav.style.position = "absolute";
    nav.style.position = 'relative'; //fixed
    nav.style.top = 0;
    nav.style.background = "#dfdfdf"
    nav.style.width = 100;
    document.getElementById("padding100").style.marginTop = "0px"
  }
}