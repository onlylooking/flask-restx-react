import React from 'react';
import { Link } from 'react-router-dom';
import Clock from '../Clock/Clock';

import AuthService from '../../services/auth.service';

import $ from 'jquery';
import Foundation from 'foundation-sites';
window.jQuery = $;

class TopBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: AuthService.getCurrentUser(),
			email: 'email@domain.com',
            password: '12134123',
		};
	}

	

	componentDidMount() {

		// Login Dropdown
		this.watchDropdown = new Foundation.Dropdown($('#login-dropdown'), {
			'position': 'bottom',
			'alignment': 'right',
		});

		if (!this.state.user) {
			window.addEventListener('click', this.closeLoginDropdown)
		}
		

		// Login Form
		this.handleLoginInputs = this.handleLoginInputs.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
	}

	componentDidUpdate() {
	}

	// Login Dropdown
	toggleLogin() {
		if(document.querySelector('#login-dropdown').classList.contains('is-open')) {
			$('#login-dropdown').foundation('close');
		} else {
			$('#login-dropdown').foundation('open');
		}
	}
	closeLoginDropdown (e) {
		if (e.target.id!=='login-dropdown' 
			&& e.target.id!=='login-toggle' 
			&& document.querySelector('#login-dropdown').classList.contains('is-open')) 
		{
			$('#login-dropdown').foundation('close');
		}
	}


	// Login Form
	handleLoginInputs(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleLoginSubmit = (event) =>  {
        event.preventDefault();
        AuthService.login(this.state.email, this.state.password).then(
            (response) => {
                console.log(response.data);
                console.log(response.status);
            }
        );
    };

	// Logout
	handleLogout = () => {
		AuthService.logout(localStorage.getItem("token")).then(
			(response) => {
				console.log(response.data);
				console.log(response.status);
			}
		);
	};
	
	// render
	render() {
		
		return (
			<div id='top-bar' className='grid-container full'>
				<div className='grid-container'>
					<div className='grid-x grid-padding-x align-middle'>
						<div className='cell small-6 medium-3 large-2'>
							<Clock name='username' />
						</div>
						<div className='cell small-6 medium-9 large-10 grid-x align-middle align-right'>
							<ul className='menu'>

								{ this.state.user && (
									<>
										<li><Link className='' to="/dashboard">Dashboard</Link></li>
										<li><button type='button' onClick={this.handleLogout}>Logout</button></li>
									</>
								)}

								{ !this.state.user && (
									<>
									<li><button type='button' id='login-toggle' data-toggle="login-dropdown" onClick={this.toggleLogin}>Login</button></li>
									<div className="dropdown-pane" id="login-dropdown">
										<form className='grid-y grid-padding-y' onSubmit={this.handleLoginSubmit}>
											<div className='cell'>
												<input
													type="email"
													name='email'
													value={this.state.email}
													onChange={this.handleLoginInputs}
													placeholder="Email" />
												<input
													type="password"
													name='password'
													value={this.state.password}
													onChange={this.handleLoginInputs}
													placeholder="Password" />
												<button type='submit' className='button'>Login</button>
											</div>
											<div className='cell'>
												<Link className='' to="/register">Register</Link>
											</div>
										</form>
									</div>
									</>
								)}
								

							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}




export default TopBar