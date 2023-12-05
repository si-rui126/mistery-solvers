class Header extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.innerHTML = `
        <style>
        /* Navbar container */
        .navbar {
            overflow: hidden;
            background-color: #333;
            font-family: Arial;
        }       

    /* Links inside the navbar */
        .navbar a {
            float: left;
            font-size: 16px;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

    /* The dropdown container */
    .dropdown {
        float: left;
        overflow: hidden;
    }

    /* Dropdown button */
    .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
    }

    /* Add a background color to navbar links on hover */
    .navbar a:hover, .dropdown:hover .dropbtn {
    background-color: rgb(89, 71, 117)(119, 0, 255);
    }

    /* Dropdown content (hidden by default) */
    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    }

    /* grey background color to dropdown links on hover */
    .dropdown-content a:hover {
    background-color: #ddd;
    }

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
    display: block;
    }

    .bgimg{
        background-position: center;
        background-size: cover;
        background-image: url("./images/city-placeholder2.jpg");
        min-height: 50%;
        padding: 30px;
        border-collapse: collapse;
      }

     .span{
        font-family: Palatino, URW Palladio L, serif;
     } 

    </style>

    <div class="bgimg" id="home">
        <span style="font-size:50px; color: white; font-family: Palatino, URW Palladio L, serif;">Mistery Solvers</span>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="navbar" id="MyTopnav">
        <a href="./index.html" class="active">Home</a>
        <div class="dropdown">
            <button class="dropbtn">Player Characters</button>
            <div class="dropdown-content">
                <a href="./amy.html">Amy</a>
                <a href="./august.html">August</a>
                <a href="./gary.html">Gary</a>
                <a href="./rachel.html">Rachel</a>
                <a href="./richard.html">Richard</a>
                <a href="./samuel.html">Samuel</a>
                <a href="./scott.html">Scott</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">NPCs</button>
            <div class="dropdown-content">
                <a href="legendaries.html">Legendaries</a>
                <a href="borderlines.html">Borderliners</a>
                <a href="sleepers.html">Sleepers</a>
            </div>
        </div>
        <a href="./cases.html" class="active">Cases</a>
        <a href="./greatreads.html" class="active">Greatreads</a>
                
    </div>
    </header>
    `;

    }
}

customElements.define('header-component', Header);