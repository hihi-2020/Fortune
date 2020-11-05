import React from 'react'

class App extends React.Component { 

  state ={
    isOpen:false
  }

  clickHandler = () => {
    console.log('click')
    this.setState({
      isOpen:true
    })
    
  }


 render() {
    return (
      
      <div  onClick={this.clickHandler} className= "container">
        <h2 className='title'>FORTUNE COOKIE</h2>
    
        <div className={this.state.isOpen ? 'leftCookieOpen' :'leftCookieClosed'}>  left cookie</div>
        {this.state.isOpen && <div className='fortune'>This is your fortune</div>}
        <div className={this.state.isOpen?'rightCookieOpen' : 'rightCookieClosed'}>right cookie</div>

        <footer className='footer'>Footer</footer>
      
      </div>
    );
  }
}

export default App
