import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions} from '../actions/auth';

class Login extends Component {
    constructor(props) {
        super(props);
        
        
                this.state = {
                    username: '',
                    password: '',
                    submitted: false
                };
        
                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            }
        
            handleChange(e) {
                const { name, value } = e.target;
                this.setState({ [name]: value });
            }
        
            handleSubmit(e) {
                e.preventDefault();
        
                this.setState({ submitted: true });
                const { username, password } = this.state;
                const { dispatch } = this.props;
                if (username && password) {
                    dispatch(userActions.login(username, password));
                }
            }



    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div id="signIn" className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
{/*                         
                        <Link to=" " className="btn btn-link">Register</Link> */
                        
                        }
                        
    <div className="text-center">
        <p>
            <a href=" " target="_top"> Forgot Username</a>
        </p>
        <p>
            <a href=" " target="_top">Forgot Password</a>
        </p>
    </div>
                    </div>
                </form>
            </div>
        );
    }
}


// const mapStateToProps = (state) => {
//     return {
//         isLoggedIn: state.auth.isLoggedIn
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onLogin: (username, password) => { dispatch(login(username, password)); },
//         // onSignUp: (username, password) => { dispatch(signup(username, password)); }
//     }
// }

export default Login;