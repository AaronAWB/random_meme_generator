import { useState } from 'react';
import '@Styles/Meme.css'
import memesData from '../memesData'


function Meme () {

  const [memeImage, setMemeImage] = useState('');

  function handleClick () {
    const memes = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length)
    const url = memes[randomNumber].url;
    setMemeImage(url);
  }

  return (
      <div className='form'>
        <input 
          type='text'
          className='form-input'
          placeholder='top text'
        ></input>
        <input 
          type='text'
          className='form-input'
          placeholder='bottom text'
        ></input>
        <button
          className='form-button'
          onClick={handleClick}
        >
          Generate
        </button>
        <p>
          {memeImage && <img src={memeImage} className='image' alt='meme' />}
        </p>
      </div>
  );
}

export default Meme;