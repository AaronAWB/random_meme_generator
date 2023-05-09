import { useState } from 'react';
import '@Styles/Meme.css'
import memesData from '../memesData'


function Meme () {

  const allMemeImgs = memesData;
  
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage:''
  })

  function handleClick () {
    const memes = allMemeImgs.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length)
    const url = memes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange (e) {
    const {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <>
      <div className='form'>
        <input 
          type='text'
          className='form-input'
          placeholder='top text'
          name='topText'
          onChange={handleChange}
          value={meme.topText}
        ></input>
        <input 
          type='text'
          className='form-input'
          placeholder='bottom text'
          name='bottomText'
          onChange={handleChange}
          value={meme.bottomText}
        ></input>
        <button
          className='form-button'
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
      <div className='img-container'>
        <p>
          {meme.randomImage && <img src={meme.randomImage} className='image' alt='meme' />}
        </p>
        <h2 className="meme-img-text top">{meme.topText}</h2>
        <h2 className="meme-img-text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}

export default Meme;