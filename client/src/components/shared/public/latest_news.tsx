import * as React from 'react';
export interface ILatestNews{}
export default class LatestNews extends React.Component<ILatestNews,{}>{
    render(){
        return(
            <div className='bg-color-light'>
				<div className='container content-sm'>
					<div className='row'>
						<div className='col-md-6 md-margin-bottom-50'>
							<img alt='' src='assets/img/mockup/imac2.png' className='img-responsive'/>
						</div>
						<div className='col-md-6'>
							<br/><br/><br/>
							<div className='headline-left margin-bottom-30'>
								<h2 className='headline-brd'>WE ARE UNIFY AGENCY</h2>
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
							</div>
							<ul className='list-unstyled lists-v2 margin-bottom-30'>
								<li><i className='fa fa-check'></i> Suspendisse eget augue non dolor ultrices</li>
								<li><i className='fa fa-check'></i> Donec eget aliquet tortor, quis lacinia dolor</li>
								<li><i className='fa fa-check'></i> Curabitur ut augue at mi eleifend lobortis</li>
								<li><i className='fa fa-check'></i> Eleifend eget aliquet tortor, quis lacinia dolor</li>
							</ul>
							<a className='btn-u btn-brd btn-brd-hover btn-u-dark' href='#'>Learn More</a>
						</div>
					</div>
				</div>
			</div>
        );
    }
}