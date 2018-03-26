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

            document.getElementById("nav").style.background = "rgba(0,0,0,0.8)"
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
                    <li id="diblogo" onClick={() => this.scroll('con1')}><h3> AR </h3></li>
                    <li><a href="https://github.com/pazuzu111"> <i className="fab fa-github fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/abrian-rodriguez/"> <i className="fab fa-linkedin fa-2x"></i></a></li>
                    <li><a href="mailto:abr.rodriguez@yahoo.com"> <i className="far fa-envelope fa-2x"></i></a></li>
                </ul>
            </nav>

            <div id="con1" className="container">
            <br/>
                <h2> ABOUT ME </h2>
                            <br/>

                <img src="./packlogo.png" alt="wolves" style={{margin: " auto"}}/>
                  <p> Hello! I am a full-stack developer who loves to create things.
                      I've always said a developer is like a wolf; with a pack, you prosper.
                      I am relentless when it comes to completing tasks and fixing bugs.
                      I believe in beautifully written code and user-focused designs.
                      I believe good code speaks for itself and leads by example, and developers are at their best when they work on something they love.
                      Below are several projects I developed using Ruby on Rails, React, and EXPRESS.
                      <p>Have fun!</p>
                  </p>
                <button onClick={() => this.scroll('con2')}> PROJECTS! </button>
            </div>

            <hr id="break1"/>

            <div id="con2" className="container">
                <Items icon={"fab fa-npm fa-7x"} name={"NPM mod"} tech={"scripts"} info={"tool that codes your MVC for you"} color={"rgba(255, 0, 0, 0.45)"} src={'https://www.npmjs.com/package/xpress-shotgun'} />
                <Items icon={"fa fa-briefcase fa-7x"} name={"Job Board"} tech={"Ruby/rails"} info={"Job board app for developers"} color={"rgba(0, 255, 0, 0.45)"} src={'http://jobboardd.herokuapp.com/'} />
                <Items icon={"fa fa-film fa-7x"} name={"Frontend"} tech={"Html/CSS/js"} info={"CSS animation of people playing ping pong"} color={"rgba(0, 255, 0, 0.45)"} src={'http://make-america-flopagain.bitballoon.com/'} />
                <Items icon={"fa fa-calculator fa-7x"} name={"Frontend"} tech={"Html/CSS/js"} info={"3D calculator design, MUST SEE!"} color={"rgba(255, 0, 255, 0.45)"} src={'http://how-youfeel-calc.bitballoon.com/'} />
                <Items icon={"fa fa-gamepad fa-7x"} name={"2D shooter"} tech={"JavaScript"} info={"2D shooter made with pure JS"} color={"rgba(0, 0, 255, 0.45)"} src={'http://zalaga-34243.bitballoon.com/'} />
                <Items icon={"far fa-newspaper fa-7x"} name={"news site"} tech={"Ruby/rails"} info={"news blog users can sign up & post"} color={"rgba(255, 0, 255, 0.45)"} src={'http://newssitee.herokuapp.com/'} />
                <Items icon={"fa fa-chart-bar fa-7x"} name={"Poll widget"} tech={"React/Node"} info={"vote on you favorite happy hour spot"} color={"rgba(0, 255, 0, 0.45)"} src={'http://dev-ote.surge.sh/'} />
                <Items icon={"fa fa-film fa-7x"} name={"Movie site"} tech={"Html/CSS/js"} info={"movie review site showing cult classics"} color={"rgba(255, 0, 255, 0.45)"} src={'http://junkfilm.herokuapp.com/'} />
                <Items icon={"fa fa-comments fa-7x"} name={"Chat app"} tech={"Express/sockets"} info={"Chat app made with chatbots"} color={"rgba(0, 0, 255, 0.45)"} src={'http://tenmin.herokuapp.com/'} />
                <Items icon={"fa fa-shopping-cart fa-7x"} name={"site clone"} tech={"React/Node"} info={"clone for the ecommerce site 1stdibs"} color={"rgba(255, 0, 0, 0.45)"} src={'http://firstdibss.surge.sh/'} />
                <Items icon={"fa fa-trophy fa-7x"} name={"trophy"} tech={"Html/CSS/js"} info={"design for site that rewards gamers"} color={"rgba(255, 0, 0, 0.45)"} src={'http://scored-bored.bitballoon.com/pages/scorebored.html'} />
                <Items icon={"fa fa-dna fa-7x"} name={"Frontend"} tech={"Html/CSS/js"} info={"info site on transhumanism/prosthetics"} color={"rgba(0, 0, 255, 0.45)"} src={'http://transpeople.bitballoon.com/'} />
            </div>

            <div id="footer" className="container" style={{width:"100%"}}>
                <p>Had fun?</p>
            </div>

        </div>
    );
  }
}
