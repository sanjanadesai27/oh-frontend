import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class UserProfile extends Component {
//   render() {
//     return (
//       <div className="UserProfile">
//           <div className="StudentName">
//               Name
//           </div>
//           <div className="UserName">
//               UserName
//           </div>
//           <div className="UserEmail">
//               Email
//           </div>
//           <div className="Year">
//               Year
//           </div>
//           <div className="Year">
//               Year
//           </div>
//           <div className="Password">
//               Password
//           </div>
//       </div>
//     );
//   }
// }

var user = {
  basicInfo: {
    name: "Jane Doe",
    gender: "Female",
    birthday: "April 3, 1990",
    location: "Los Angeles, CA",
    photo: "http://lorempixel.com/500/500/people",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. Blanditiis repellat velit eligendi."
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
            <Avatar 
               image={info.photo} 
               width={100}
               height={100}
            /> 
            <h2>{info.name}</h2>
            <h3>{info.location}</h3>
          
          <hr />
            <p>{info.gender} | {info.birthday}</p>
        </div>
        
        <div className="bottom">
          <h4>Biography</h4>
          <p>{info.bio}</p>
        </div>
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
