import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Modal, Divider, Form, Label } from 'semantic-ui-react'

class EditProfile extends Component {
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
                <Form.Field>
                <input type='text' placeholder='First name' />
                <Label pointing>Please enter a value</Label>
                </Form.Field>
                <Divider />

                <Form.Field>
                <Label pointing='below'>Please enter a value</Label>
                <input type='text' placeholder='Last Name' />
                </Form.Field>
                <Divider />

                <Form.Field>
                <Label pointing='below'>Please enter a value</Label>
                <input type='text' placeholder='Email address' />
                </Form.Field>
                <Divider />

                <Form.Field inline>
                <input type='text' placeholder='Username' />
                <Label pointing='left'>That name is taken!</Label>
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
export default EditProfile;
