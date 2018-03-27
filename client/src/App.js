import React, { Component } from 'react';
import Items from './Items'

import './App.css';

export default class App extends Component {

    componentDidMount() {
        window.onscroll = () => {this.showNav()}
    }

    scroll = (id) => {

        let  el = document.getElementById(`${id}`)
        window.scrollTo({'behavior': 'smooth','left': 0,'top': el.offsetTop - 145})
    }

    showNav = () => {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {

            document.getElementById("nav").style.background = "navy"
            document.getElementById("nav").classList.add("shadow")
        }
        else
        {
            document.getElementById("nav").style.background = "transparent"
            document.getElementById("nav").classList.remove("shadow")
        }
    }

  render() {
    return (
        <div on>
            <nav id="nav">
                <ul>
                    <li id="diblogo" onClick={() => this.scroll('con1')}><h3> John Doe </h3></li>
                    <li><a href="#"> <i className="fab fa-github fa-2x"></i></a></li>
                    <li><a href="#"> <i className="fab fa-linkedin fa-2x"></i></a></li>
                    <li><a href="mailto:abc@example.com"> <i className="far fa-envelope fa-2x"></i></a></li>
                </ul>
            </nav>

            <div id="con1" className="container">
            <br/>
                <h2> ABOUT ME </h2>
                <br/>
                <i className="fa fa-user-circle fa-10x"></i>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button onClick={() => this.scroll('con2')}> PROJECTS! </button>
            </div>

            <hr id="break1"/>

            <div id="con2" className="container">
                <Items icon={"fa fa-briefcase fa-7x"} name={"Project"} tech={"Tech stack"} info={"***info***"} color={"navy"} />
                <Items icon={"fa fa-briefcase fa-7x"} name={"Project"} tech={"Tech stack"} info={"***info***"} color={"navy"} />
                <Items icon={"fa fa-briefcase fa-7x"} name={"Project"} tech={"Tech stack"} info={"***info***"} color={"navy"} />
                <Items icon={"fa fa-briefcase fa-7x"} name={"Project"} tech={"Tech stack"} info={"***info***"} color={"navy"} />
                <Items icon={"fa fa-briefcase fa-7x"} name={"Project"} tech={"Tech stack"} info={"***info***"} color={"navy"} />
                <Items icon={"fa fa-briefcase fa-7x"} name={"Project"} tech={"Tech stack"} info={"***info***"} color={"navy"} />
                <Items icon={"fa fa-briefcase fa-7x"} name={"Project"} tech={"Tech stack"} info={"***info***"} color={"navy"} />
                <Items icon={"fa fa-briefcase fa-7x"} name={"Project"} tech={"Tech stack"} info={"***info***"} color={"navy"} />
                <Items icon={"fa fa-briefcase fa-7x"} name={"Project"} tech={"Tech stack"} info={"***info***"} color={"navy"} />
            </div>

            <div id="footer" className="container" style={{width:"100%"}}>
                <p>🤖</p>
            </div>
        </div>
    );
  }
}
