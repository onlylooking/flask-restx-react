import React from 'react';

import Hero from '../../Components/Hero/Hero';
import AuthService from '../../services/auth.service';

class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: 'email@domain.com',
            password: '12134123',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleLogin = (event) =>  {
        event.preventDefault();
        AuthService.login(this.state.email, this.state.password).then(
            (response) => {
                console.log(response.data);
                console.log(response.status);
            }
        );
    };


    render() {
        return (
            <div className="page">
                <Hero title='Login' text='' />
                <div className='grid-container'>
                    <div className='grid-x grid-padding-x'>
                        <div className='cell medium-4'>
                            <form className='grid-y grid-padding-y' onSubmit={this.handleLogin}>
                                <input
                                    type="email"
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Email" />
                                <input
                                    type="password"
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Password" />
                                <button type='submit' className='button'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserLogin
