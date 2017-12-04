import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header, Icon, Button, Grid, Image, Menu, Segment, Message } from 'semantic-ui-react'
import { Redirect, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

var user = {
  basicInfo: {
    name: "Bob the Constructor",
    member: "Tutor",
    email: "bob@mail.mcgill.ca",
    year: "U2",
    photo: "http://lorempixel.com/500/500/people",
    courses: "COMP 202, COMP 206"
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

  handleEdit = () => {
    console.log('edit profile');
    <Redirect to="/edit"/> 
  };

  render() {
    var info = this.props.info;
    if (!info) return null;

    return (
     <div>
        <div className="top">
        <p>
        <Header as='h2' icon>
          <Icon name='settings' />
            Account Settings
          <Header.Subheader>
            {/* Manage your account settings */}
          </Header.Subheader>
        </Header>
        </p>
        <script src="EditStudent.js"></script>
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
            <hr />
            <Button circular icon='settings' onClick={this.handleEdit}>
            </Button>

        </div>
        <div>

        <Segment>
          <img src='/assets/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
        <div className="bottom">
          <h4>Courses</h4>
          <p>{info.courses}</p>
          <div id="container"></div>
          <p>
          <Button animated>
            <Button.Content visible> Edit your courses </Button.Content>
            <Button.Content hidden>
            <Icon name='right arrow' />
            </Button.Content>
            </Button>
          </p>
          <p>
          </p>
        </div>
      </div>
    );
  }
}

class StudentProfile extends Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={user.basicInfo} />
      </div>
    )
  }
}

ReactDOM.render(<StudentProfile />, document.getElementById('root'))

export default withRouter(StudentProfile); 

