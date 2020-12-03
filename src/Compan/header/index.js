import React from 'react'

function Header(){
    let isAuth = false;
    let name = 'Bekzat';
    let arr_header = ['Home', 'Pages', 'About', 'Events', 'News', 'Space & Rooms', 'Store']
    let header_print = arr_header.map((item, i) => <li><a href="#">{item}</a></li>)
    const style = {
        color: '#f3701d'
    }
    if(isAuth){
        header_print.push(<button className="prof_button">Profile</button>)
        header_print.push(<h6 className="user_name">{name}</h6>)
    }
    else{
        header_print.push(<li><a href="#" style={style}>Sign in/Sign up</a></li>)
    }
        return(
        <div className="Header">
            <div className="left_box">
                <img src="http://scientia.themerex.net/wp-content/uploads/2018/01/logo-inv-retina.png"></img>
            </div>
            <nav>
                <ul>
                    {header_print}
                </ul>
            </nav>
        </div>
    )
}
export default Header

