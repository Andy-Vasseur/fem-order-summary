// Assets
import headerIllustration from './assets/svg/illustration-hero.svg'
import musicIcon from './assets/svg/icon-music.svg'

function App() {
  return (
    <div className="App">

      <div className="App__content">
        <div className="App__content__header">
          <img src={headerIllustration} alt="Order summary illustration" />
        </div>
        <div className="App__content__main">
          <h1 className='App__content__main__title'>Order summary</h1>
          <p className='App__content__main__description'>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like.
          </p>
          <div className="App__content__main__plan">
            <span>
              <img src={musicIcon} alt="Music icon" />
            </span>
            <div>
              <h2>Annual Plan</h2>
              <p>$59.99/year</p>
            </div>
            <a href="#">
              Change
            </a>
          </div>
        </div>
        <div className="App__content__footer">
          <button>Proceed to Payment</button>
          <button>Cancel Order</button>
        </div>
      </div>

    </div>
  )
}

export default App
