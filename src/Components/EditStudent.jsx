import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Segment, Button, Message, Grid, Header, Radio, Input, Divider, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const options = [ 
    { key: 'U0', text: 'U0', value: 'U0'},
    { key: 'U1', text: 'U1', value: 'U1' },
    { key: 'U2', text: 'U2', value: 'U2' },
    { key: 'U3', text: 'U3', value: 'U3' },
    { key: 'U4', text: 'U4', value: 'U4' }
  ];

class EditStudent extends Component {

    state = { open: false }
        closeConfigShow = (closeOnEscape, closeOnRootNodeClick) => () => {
        this.setState({ closeOnEscape, closeOnRootNodeClick, open: true })
    }

    close = () => this.setState({ open: false })

    render() {
        const { open, closeOnEscape, closeOnRootNodeClick } = this.state
        
        return (
        <div>
                <div>
                <Form>
                <Form.Field inline>
                <input type='text' placeholder='First name' />
                {/* <Label pointing>Please enter a value</Label> */}
                </Form.Field>
                <Divider />

                <Form.Field inline>
                {/* <Label pointing='below'>Please enter a value</Label> */}
                <input type='text' placeholder='Last Name' />
                </Form.Field>
                <Divider />

                <Form.Field inline>
                <input type='text' placeholder='Email address' />
                {/* <Label pointing='left'>Please provide your school email</Label> */}
                </Form.Field>
                <Divider />

                <Form.Field inline>
                <input type='text' placeholder='Username' />
                {/* <Label pointing='left'>That name is taken!</Label> */}
                </Form.Field>
                <Divider />

                <Form.Field inline>
                <Label pointing='right'>Your password must be 6 characters or more</Label>
                <input type='password' placeholder='Password' />
                </Form.Field>
            </Form>
            </div>
            {/* <Input label='http://' placeholder='mysite.com' /> */}
            {/* <div>
                <Button onClick={this.closeConfigShow(false, true)}>Delete my account</Button>
                <Modal
                open={open}
                closeOnEscape={closeOnEscape}
                closeOnRootNodeClick={closeOnRootNodeClick}
                onClose={this.close}
                >
                <Modal.Header>
                    Delete Your Account
                </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative>No</Button>
                    <Button positive labelPosition='right' icon='checkmark' content='Yes' />
                </Modal.Actions>
                </Modal>
            </div> */}
            <div>
                <Button.Group>
                <Button>Cancel</Button>
                <Button.Or />
                <Button positive>Save</Button>
                </Button.Group>
            </div>
       </div>
      );
    }
  }
export default EditStudent;
