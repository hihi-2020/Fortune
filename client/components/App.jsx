import React from 'react'

class App extends React.Component { 

  state ={
    style: {
      backgroundColor: 'brown', 
      borderStyle: 'solid',
      borderColor: 'black',
      height: '100px',
      width: '50px',
      gridArea: 'cookieLeft',
      justifySelf: 'end'
    },
    style2:{
      backgroundColor: 'brown', 
      borderStyle: 'solid',
      borderColor: 'black',
      height: '100px',
      width: '50px',
      gridArea: 'cookieRight',
      justifySelf: 'start'
  
    }
  }

  clickHandler = () => {
    console.log('click')
    this.setState({
       style: {
         ...this.state.style,
         gridArea:'main',
         justifySelf: 'start'
       },
       style2: {
        ...this.state.style2,
        gridArea: 'sidebar',
        justifySelf: 'end'
       }
    })
  }

  // clickHandlerRight = () =>{
  //   this.setState({
  //     style2: {
  //       ...this.state.style2,
  //       gridArea: 'sidebar',
  //       justifySelf: 'end'
  //     }
  //  })
  // }

  // onclickFunc = ()=>{
  //   this.clickHandlerLeft();
  //   this.clickHandlerRight();
  // }

 render() {
    return (
      
      <div  onClick={this.clickHandler} className= "container">
        <h2 className='title'>FORTUNE COOKIE</h2>
    
        <div style={this.state.style} className='leftCookie'>  left cookie</div>
        <div style={this.state.style2}className='rightCookie'>right cookie</div>
        <footer className='footer'>Footer</footer>
      
      </div>
    );
  }
}

export default App
