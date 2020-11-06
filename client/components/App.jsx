import React from 'react'
import data from '../data.json'
import Sound from 'react-sound'


console.log(data)
const revealFortune = () => {

  let randomFortuneIndex = Math.floor((Math.random() * data.text.length))
  return data.text[randomFortuneIndex]

}
const revealRandomSound = ()=>{
  let randomSoundsIndex = Math.floor((Math.random() * data.sounds.length))
  return data.sounds[randomSoundsIndex]
}
class App extends React.Component {

  state = {
    isOpen: false,
    fortune: revealFortune(),
    sound: revealRandomSound(),
    isPink: true
  }

  clickHandler = () => {
   
    setInterval(()=> {
      // this.toggleBackground()
    }, 250)

    this.setState({
      isOpen: true
    })
  }


  revealFortuneSound = () => {

 
    return (
      <Sound
        url={this.state.sound}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />

    )
  }

  handleRefresh = () =>{
    window.location.reload()
  }

  toggleBackground = () => {
   
    this.setState({
      isPink: false
    })
  }

  render() {
    const leftCookie = <img src="leftCookie.svg" />
    const rightCookie = <img src="rightCookie.svg" />


    return (
      <>
      <div className="container">
        <h2 className='title'>FORTUNE COOKIE</h2>

      
        <div onClick={this.clickHandler} className={this.state.isOpen ? 'leftCookieOpen' : 'leftCookieClosed'}> {leftCookie} </div>
        <div onClick={this.clickHandler} className={this.state.isOpen ? 'rightCookieOpen' : 'rightCookieClosed'}>{rightCookie}</div>

        {this.state.isOpen && <div className='fortune'>{this.state.fortune} {this.revealFortuneSound()}</div> }

        {this.state.isOpen &&<button onClick={this.handleRefresh}className='button'>Try Again!</button> }

      </div>
        <div className='footer'>Brought to you by: Emily, Olivia and Jess</div>
      </>
    );
  }
}

export default App
