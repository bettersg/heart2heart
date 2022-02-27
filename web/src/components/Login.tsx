import React from 'react';
import Logo from './heart2heart.png';
import { onChange, validateForm } from './utils';

class Login extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: { name: 'email', value: '', required: true, error: '' },
            password: { name: 'password', value: '', required: true, error: '' },
            rememberMe: { name: 'rememberMe', value: false, required: false, error: '' },
        }
    }

    render() {
        const { email, password, rememberMe } = this.state;
        return (
            <div className="container-fluid" >
                <div className="row my-3">
                    <div className="col-md-4 offset-md-4">
                        <div className="text-center">
                            <img src={Logo} height="250" />
                        </div>
                        <form onSubmit={this.onSubmit} className="login-box bg-light br-3">
                            <div className="row">
                                <div className="col-12">
                                    <div className="p-3">
                                        <h1 className="font-weight-bold">Login</h1>
                                        <p className="mb-0">Login with your credentials</p>
                                        <hr className="mb-0" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="px-3">
                                        <div className="form-group">
                                            <label>Email *</label>
                                            <input
                                                name={email.name}
                                                value={email.value}
                                                onChange={this.onChange}
                                                type="email"
                                                className={email.error.length > 0 ? "form-control is-invalid" : "form-control"}
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Password *</label>
                                            <input
                                                name={password.name}
                                                value={password.value}
                                                onChange={this.onChange}
                                                type="password"
                                                className={password.error.length > 0 ? "form-control is-invalid" : "form-control"}
                                                placeholder="Enter your password"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="p-3 form-group">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    name={rememberMe.name}
                                                    checked={rememberMe.value}
                                                    onChange={this.onChange}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                />
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 text-right">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="row mt-3">
                            <div className="col-6">
                                <a className="text-light" href="#">Register here</a>
                            </div>
                            <div className="col-6 text-right">
                                <a className="text-light" href="#">Forgot password ?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onChange = (e: any) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === this.state.rememberMe.name) {
            value = e.target.checked;
        }
        onChange(this, name, value);
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        debugger;
        if (validateForm(this)) {
            const { email, password, rememberMe } = this.state;
            const model = {
                email: email.value,
                password: password.value,
                rememberMe: rememberMe.value
            }

            console.log(model);
        }
    }
}

export default Login;