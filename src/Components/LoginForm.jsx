import React, { Component } from 'react';


class LoginForm extends Component { 
  render() { 
    if(!this.props.show) { 
      return null;
    }
    return( 
      <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="loginModal">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div className="form-inline">
              <h2>Login</h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="email"
                />
                <input
                  className="form-control"
                  type="password"
                  placeholder="password"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                />
              </div> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.handleModal}>Close</button>
              <button type="button" class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    );
    }
  }
export default LoginForm; 
