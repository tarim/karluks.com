import * as React from 'react';

export default class Header extends React.Component  {
    render() {
        return (
            

		<header id='header'>
			<div id='logo-group'>

				<span id='logo'> <img src='img/logo.png' alt='Karluks'/> </span>

				
			</div>

		
			
			<div className='pull-right'>
				
				<div id='hide-menu' className='btn-header pull-right'>
					<span> <a href='javascript:void(0);' data-action='toggleMenu' title='Collapse Menu'><i className='fa fa-reorder'></i></a> </span>
				</div>
				
			

				<div id='logout' className='btn-header transparent pull-right'>
					<span> <a href='login.html' title='Login' data-action='login' data-logout-msg='You can improve your security further after logging out by closing this opened browser'><i className='fa fa-sign-in'></i></a> </span>
				</div>

				
				
				<form action='#ajax/search.html' className='header-search pull-right'>
					<input id='search-fld' type='text' name='param' placeholder='Find reports and more'/>
					<button type='submit'>
						<i className='fa fa-search'></i>
					</button>
					<a href='javascript:void(0);' id='cancel-search-js' title='Cancel Search'><i className='fa fa-times'></i></a>
				</form>

				


			</div>

		</header>
        );
    }
}