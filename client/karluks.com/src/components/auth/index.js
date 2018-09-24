
import * as React from 'react'
import GoogleLogin from 'react-google-login'

export default class Login extends React.Component{
    

    render(){
       const responseGoogle=(response)=>{
            console.log(response)
        }
        return(
            <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-5 col-lg-4'>
						<div className='well no-padding'>
							<form action='index.html' id='login-form' className='smart-form client-form'>
								<header>
									Sign In
								</header>

								<fieldset>
									
									<section>
										<label className='label'>E-mail</label>
										<label className='input'> <i className='icon-append fa fa-user'></i>
											<input type='email' name='email'/>
											<b className='tooltip tooltip-top-right'><i className='fa fa-user txt-color-teal'></i> Please enter email address/username</b></label>
									</section>

									<section>
										<label className='label'>Password</label>
										<label className='input'> <i className='icon-append fa fa-lock'></i>
											<input type='password' name='password'/>
											<b className='tooltip tooltip-top-right'><i className='fa fa-lock txt-color-teal'></i> Enter your password</b> </label>
										
									</section>

								</fieldset>
								<footer>
									<button type='submit' className='btn btn-primary'>
										Sign in
									</button>
								</footer>
							</form>

						</div>
						
						<h5 className='text-center'> - Or sign in using -</h5>
															
							<ul className='list-inline text-center'>
								<li>
									<a href='' className='btn btn-primary btn-circle'><i className='fa fa-facebook'></i></a>
								</li>
								<li>
                                <GoogleLogin
    clientId="152522474428-ioca217pbnae0ipli85btnl9c4etqnef.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
									<a href='' className='btn btn-info btn-circle'><i className='fa fa-google'></i></a>
								</li>
								<li>
									<a href='' className='btn btn-warning btn-circle'><i className='fa fa-linkedin'></i></a>
								</li>
							</ul>
						
					</div>
                    </div>
        )
    }
}