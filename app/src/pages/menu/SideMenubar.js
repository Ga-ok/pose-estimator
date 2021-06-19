import React, {useState} from "react";
import {Route, Link, BrowserRouter} from 'react-router-dom';
import "../../css/Menubar.css";
import Add from '../../images/menu_library_add.png'
import AddClicked from '../../images/menu_library_add_clicked.png'
import Play from '../../images/menu_play_circle.png'
import PlayClicked from '../../images/menu_play_circle_clicked.png'
import FitNotes from '../../images/menu_fitnotes.png'
import FitNotesClicked from '../../images/menu_fitnotes_clicked.png'
import Calender from '../../images/menu_calender.png'
import CalenderClicked from '../../images/menu_calender_clicked.png'
import RightClicked from '../../images/menu_right_clicked.png'
import Right from '../../images/menu_right.png'

const SideMenubar = () => {

    const [menu, setMenu]=useState(1);
    const onClickedMenu = (e) => {
        setMenu(e.target.value);
    };

    return (
        <div className="sidemenu-container">
            <div className="logo-wrapper">
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="30" fill="#27cfb3"></circle>

                </svg>
                <h3>My Home Fit</h3>
            </div>
            <div className="menubar">
                <ul>
                    <div className={menu==1?"clicked":"unclicked"}>
                        <li onClick={() => setMenu(1)}>
                            <BrowserRouter>
                            <Link to="/makeyourset">
                                {menu === 1 ? <img src={AddClicked}/> : <img src={Add}/>}
                            </Link>
                            </BrowserRouter>
                            <div>
                                <label>Make Your Set</label>
                                {menu===1? <img src={RightClicked}/>:<img src={Right}/>}
                            </div>
                        </li>
                    </div>
                    <div className={menu==2?"clicked":"unclicked"}>
                        <li onClick={() => setMenu(2)}>
                            <BrowserRouter>
                            <Link to="/training">
                                {menu === 2 ? <img src={PlayClicked}/> : <img src={Play}/>}
                            </Link>
                            </BrowserRouter>
                            <div>
                                <label>Training</label>
                                {menu===2? <img src={RightClicked}/>:<img src={Right}/>}
                            </div>
                        </li>
                    </div>
                    <div className={menu==3?"clicked":"unclicked"}>
                        <li onClick={() => setMenu(3)}>
                            <BrowserRouter>
                            <Link to="/fitnotes">
                                {menu === 3 ? <img src={FitNotesClicked}/> : <img src={FitNotes}/>}
                            </Link>
                            </BrowserRouter>
                            <div>
                                <label>Fit Notes</label>
                                {menu===3? <img src={RightClicked}/>:<img src={Right}/>}
                            </div>
                        </li>
                    </div>
                    <div className={menu==4?"clicked":"unclicked"}>
                        <li onClick={() => setMenu(4)}>
                            <BrowserRouter>
                            <Link to="/calender">
                                {menu === 4 ? <img src={CalenderClicked}/> : <img src={Calender}/>}
                            </Link>
                            </BrowserRouter>
                            <div>
                                <label>Calender</label>
                                {menu===4? <img src={RightClicked}/>:<img src={Right}/>}
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};


export default SideMenubar;