import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header, Icon, Button, Grid, Image, Menu, Segment } from 'semantic-ui-react'

var user = {
  basicInfo: {
    name: "Person",
    member: "Student",
    email: "ashvitha297@gmail.com",
    year: "U3",
    photo: "https://cdn.pixabay.com/photo/2016/08/20/05/51/avatar-1606939_1280.png",
    courses: "COMP 307, COMP 350, COMP 360, COMP 350"
  }
}

class Avatar extends Component {
  render() {
    var image = this.props.image,
        style = {
          width: this.props.width || 50,
          height: this.props.height || 50
        }; 
    
    if (!image) return null;
    
    return (
     <div className="avatar" style={style}>
           <img src={this.props.image} /> 
      </div>
    );
  }
}

class MainPanel extends Component {
  render() {
    var info = this.props.info;
    if (!info) return null;
    return (
     <div>
        <div className="top">
        <script src="EditField.js"></script>
            <Avatar 
               image={info.photo} 
               width={100}
               height={100}
            /> 
            <h2>{info.name}</h2>
            <label class="pull-left">{info.email} </label>
            {/* <input class="clickedit" type="text" /> */}
            <div class="clearfix"></div>
          <hr />
            <p>{info.member} | {info.year}</p>
        </div>
        <div className="bottom">
          <h4>Courses</h4>
          <p>{info.courses}</p>
          <div id="container"></div>
        </div>
        <Button className="userBtn">
       Add Course
      </Button>
      </div>
    );
  }
}

class UserProfile extends Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={user.basicInfo} />
      </div>
    )
  }
}

ReactDOM.render(<UserProfile />, document.getElementById('root'))

export default UserProfile; 
