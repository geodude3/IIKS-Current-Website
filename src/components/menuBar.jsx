import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./compStyles/menuBar.css";
import logo from "../images/iiks.jpg"
class MenuBar extends Component {
    state = {}
    render() {

        return (
            <React.Fragment>
                <div id='menuBar'>
                    <Link className='menuElement' to="/api"><button className='btn btn-primary btn-lg'>Chat/API</button></Link>
                    <Link className='menuElement' to="/contact"><button className='btn btn-primary btn-lg'>Contact Us</button></Link>
                    <Link className='menuElement' to="/projects"><button className='btn btn-primary btn-lg'>Research</button></Link>
                    <Link className='menuElement' to="/"><button className='btn btn-primary btn-lg'><img id='logoMenuBar' src={logo}></img></button></Link>
                    <Link className='menuElement' to="/about"><button className='btn btn-primary btn-lg'>About</button></Link>
                    <Link className='menuElement' to="/reportlights"><button className='btn btn-primary btn-lg'>Report Lights</button></Link>
                    <Link className='menuElement' to="/sports"><button className='btn btn-primary btn-lg'>Sports</button></Link>

                </div>
            </React.Fragment>
        );
    }
}

export default MenuBar;