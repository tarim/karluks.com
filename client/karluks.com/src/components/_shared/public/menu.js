import * as React from 'react'
import { Link } from 'react-router-dom'
export default class Menu extends React.Component{
    render(){
        return(
<aside id='left-panel'>
<nav>
	<ul>
		<li className=''>
		<Link to="/"><i className='fa fa-lg fa-fw fa-home'></i> <span className='menu-item-parent'>Home</span></Link>
		</li>
		<li>
      <Link to="/news"><i className='fa fa-lg fa-fw fa-gittip'></i> <span className='menu-item-parent'>What is New</span></Link>
			</li>
			<li>
      <Link to="/links"><i className='fa fa-lg fa-fw fa-link'></i> <span className='menu-item-parent'>Usefull Links</span></Link>
			</li>	
			<li>
      <Link to="/album"><i className='fa fa-lg fa-fw fa-camera-retro'></i> <span className='menu-item-parent'>Karluk Album</span></Link>
			</li>	
	</ul>
</nav>

</aside>
        );
    }
}