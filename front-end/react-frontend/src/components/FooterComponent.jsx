import React, { Component } from 'react';


class FooterComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    

    render() {
        return (
            <footer className='page-footer'>
               <div className="text-center py-5">© 2022 Copyright:
                     <a href="https://jayaprasad.netlify.app"> jayaprasad.netlify.app</a>
                 </div>

            </footer>
        );
    }
}



export default FooterComponent;