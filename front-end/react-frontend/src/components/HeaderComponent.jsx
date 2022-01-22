import React, { Component } from 'react';


class HeaderComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    

    render() {
        return (
            <div>
               <header>
                   <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                      
                          <a href='http://192.168.1.3:3000' className='navbar-brand'>Employee Management App</a>
                       
                   </nav>
               </header>
            </div>
        );
    }
}



export default HeaderComponent;