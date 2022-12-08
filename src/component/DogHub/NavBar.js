import React from 'react'
// import './NavBar.css'

function NavBar() {
  return (
    <div>
        <h1>DogHub</h1>
        <div class="navbar">

            <div class="nav1" style={{flexGrow: "2"}}>

                <div class="nav1a" style={{marginLeft: "100px"}}>
                    <img class="img" src="./component/img/Group 1.png" alt='dog'></img>
                    <b class="b">DogHub</b>
                </div>

            </div>{/* <!--close tag for nav1--> */}


            <div class="nav2" style={{flexGrow: "4"}}>

                <div class="nav2a">
                    <span class="var"><a class="a" href="index.html" target="_blank">Varient1</a></span>
                </div>

                <div class="nav2b">
                    <span class="var"><a class="a" href="index2.html" target="_blank">Varient2</a></span>
                </div>

            </div>{/* <!--close tag for nav2--> */}


            <div class="nav3" style={{flexGrow: "4"}}>
                <button class="btn" type="date">11<sup>th </sup>November, 2022</button>
            </div>{/* <!--close tag for nav3--> */}


        </div>{/* <!--close tag for navbar--> */}

    </div>
  )
}

export default NavBar