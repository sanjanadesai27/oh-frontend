import React, { Component } from 'react';
import { Segment, Link, Form, Button, Container } from 'semantic-ui-react';
import AppTitle from 'AppTitle.jsx';


class CourseSelect extends Component {  
  constructor(){ 
    super();
    this.state={}; 
  }

    let token = JSON.parse(window.localStorage.getItem("userToken"));
  let id = JSON.parse(window.localStorage.getItem('id'));
  
  componentDidMount() { 
    fetch('/courses', {

    })
  }

  handleSubmit = () => { 
    //do some shit here to handle the course selection of the student
  }

  render() { 
    return(
      <Container>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 800 }}>
            <AppTitle/>
            <Header as='h2' color='grey' textAlign='center'>
              {' '}Add your courses
            </Header>
              <Form>
                <Form.Group widths="equal"> 
                <select className="ui dropdown">
                  <option value="COMP 307">COMP307</option>
                </select>
                </Form.Group> 
              </Form> 
          </Grid.Column>
        </Grid>
      </Container> 
    );
  }


}
export default CourseSelect; 