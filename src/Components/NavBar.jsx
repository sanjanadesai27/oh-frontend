import React, { Component } from 'react';

class NavBar extends Component { 
    openNav(){
            document.getElementByClassName('.sidebar').toggleClass('active');
    }
  render() { 
     return(
        <div className="wrapper">
            <nav className="sidebar">

                    <div className="sidebar-header">
                        <h3>Collapsible Sidebar</h3>
                        <strong>BS</strong>
                    </div>

                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                                <i className="glyphicon glyphicon-home"></i>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="glyphicon glyphicon-briefcase"></i>
                                About
                            </a>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                                <i className="glyphicon glyphicon-duplicate"></i>
                                Pages
                            </a>
                            <ul className="collapse list-unstyled" className="pageSubmenu">
                                <li><a href="#">Page 1</a></li>
                                <li><a href="#">Page 2</a></li>
                                <li><a href="#">Page 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="glyphicon glyphicon-link"></i>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="glyphicon glyphicon-send"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
            </nav>
            
            <div className="content">
                <button onClick= {this.openNav()} type="button" className="sidebarCollapse" className="btn btn-info navbar-btn">
                        <i className="glyphicon glyphicon-align-left"></i>
                        Toggle
                </button>
            </div>
        </div>
      );
  }
}
export default NavBar;