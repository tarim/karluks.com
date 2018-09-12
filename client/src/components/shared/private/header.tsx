import * as React from 'react';

export interface IHeader {

}

export default class Header extends React.Component<IHeader, {}>    {
    render() {
        return (
            <header id='header'>
                <div id='logo-group'>
                    <span id='logo'> <img src='img/logo.png' alt='SmartAdmin' /> </span>
                    <span id='activity' className='activity-dropdown'> <i className='fa fa-user'></i> <b className='badge'> 21 </b> </span>
                    <div className='ajax-dropdown'>
                        <div className='btn-group btn-group-justified' data-toggle='buttons'>
                            <label className='btn btn-default'>
                                <input type='radio' name='activity' id='ajax/notify/mail.html' />
                                Msgs (14) </label>
                            <label className='btn btn-default'>
                                <input type='radio' name='activity' id='ajax/notify/notifications.html' />
                                notify (3) </label>
                            <label className='btn btn-default'>
                                <input type='radio' name='activity' id='ajax/notify/tasks.html' />
                                Tasks (4) </label>
                        </div>
                        <div className='ajax-notifications custom-scroll'>

                            <div className='alert alert-transparent'>
                                <h4>Click a button to show messages here</h4>
                                This blank page message helps protect your privacy, or you can show the first message here automatically.
						</div>

                            <i className='fa fa-lock fa-4x fa-border'></i>

                        </div>

                </div>
			</div>
	
		</header>
        );
    }
}