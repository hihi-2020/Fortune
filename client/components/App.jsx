import React from 'react'
import data from '../data.json'
import Sound from 'react-sound'


console.log(data)
class App extends React.Component {

  state = {
    isOpen: false
  }

  clickHandler = () => {
    console.log('click')
    this.setState({
      isOpen: true
    })
  }

  revealFortune = () => {

    let randomFortuneIndex = Math.floor((Math.random() * data.text.length))
    return data.text[randomFortuneIndex]

  }

  revealFortuneSound = () => {

    let randomSoundsIndex = Math.floor((Math.random() * data.sounds.length))
 
    return (
      <Sound
        url={data.sounds[randomSoundsIndex]}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />

    )



  }




  render() {
    const leftCookie = <img src="leftCookie.png" />
    const rightCookie = <img src="rightCookie.png" />


    return (

      <div onClick={this.clickHandler} className="container">
        <h2 className='title'>FORTUNE COOKIE</h2>

        <div className={this.state.isOpen ? 'leftCookieOpen' : 'leftCookieClosed'}> {leftCookie} </div>
    {this.state.isOpen && <div className='fortune'>{this.revealFortune()} {this.revealFortuneSound()}</div>}

        <div className={this.state.isOpen ? 'rightCookieOpen' : 'rightCookieClosed'}>{rightCookie}</div>

        <footer className='footer'>Brought to you by: Emily, Olivia and Jess</footer>

      </div>
    );
  }
}

export default App
