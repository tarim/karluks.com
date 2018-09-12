import * as React from 'react';
import Footer from './components/shared/public/footer';
import Header from './components/shared/public/header';
import Menu from './components/shared/public/menu';
class App extends React.Component {
  public render() {
    return (
      <div>
       <Header />
       {  <Menu /> }
       <Footer />
      </div>
    );
  }
}

export default App;
