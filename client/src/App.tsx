import * as React from 'react';
import * as BreadCrumbs  from 'react-breadcrumbs';
import Footer from './components/shared/public/footer';
import Header from './components/shared/public/header';
import Menu from './components/shared/public/menu';
export interface IApp{
  routes?: any,
  params?: any,
  children?: any
}
class App extends React.Component<IApp> {
  public render(): JSX.Element  {
    return (
      <div>
       <Header />
        <Menu /> 
        <div id='main' role='main'>
        <div id='ribbon'>
        <ol className='breadcrumb'>
        <BreadCrumbs separator=' / ' routes={this.props.routes} params={this.props.params} setDocumentTitle />
        </ol>
        </div>
        {this.props.children}
        </div>
       <Footer />
       </div>
    );
  }
}

export default App;
