import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header, Icon, Button, Grid, Image, Menu, Segment } from 'semantic-ui-react'

class TutorProfile extends Component {
  render() {
    var info = this.props.info;
    if (!info) return null;
    return (
     <div>
        <div className="top">
            {/* <Avatar 
               image={info.photo} 
               width={100}
               height={100}
            />  */}
            <h2>{info.name}</h2>
            <label class="pull-left">{info.email} </label>
            {/* <input class="clickedit" type="text" /> */}
            <div class="clearfix"></div>
          <hr />
            <p>{info.year}</p>
        </div>
        <div className="bottom">
          <h4>Courses</h4>
          <div id="container"></div>
        </div>
      </div>
    );
  }
}

export default TutorProfile; 
