import * as React from 'react';
export interface IMenu{}
export default class Menu extends React.Component<IMenu,{}>{
    render(){
        return(
<aside id='left-panel'>
<nav>
	<ul>
		<li className=''>
			<a href='index.html' title='blank_'><i className='fa fa-lg fa-fw fa-home'></i> <span className='menu-item-parent'>Blank</span></a>
		</li>
	</ul>
</nav>
<span className='minifyme' data-action='minifyMenu'> <i className='fa fa-arrow-circle-left hit'></i> </span>
</aside>
        );
    }
}