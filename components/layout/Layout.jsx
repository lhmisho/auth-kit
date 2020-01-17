import React from 'react'
import Header from "./Header";
import Footer from "./Footer";


class Layout extends React.Component{

  render(){
    return (
      <div>
        <div className="flex flex-col h-auto">
          <Header />
          <main>
            {this.props.children}  
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;