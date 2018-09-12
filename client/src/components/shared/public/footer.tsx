import * as React from 'react';

export interface IFooter{}

export default class Footer extends React.Component<IFooter,{}>{
    render(){
        return(
			<div className='page-footer'>
			<div className='row'>
				<div className='col-xs-12 col-sm-6'>
					<span className='txt-color-white'>SmartAdmin 1.9.x <span className='hidden-xs'> - Web Application Framework</span> © 2017-2019</span>
				</div>
			</div>
		</div>
        )
    }
}