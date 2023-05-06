import { useState } from 'react';
import '@Styles/Meme.css'
import memesData from '../memesData'


function Meme () {

  const [allMemeImgs, setAllMemeImgs] = useState(memesData)
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage:''
  })

  function handleClick () {
    const memes = allMemeImgs.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length)
    const url = memes[randomNumber].url;
    setMeme(prevImage => {
      return {
        ...prevImage,
        randomImage: url
      }
    });
  }

  return (
    <>
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
      </div>
      <div className='img-container'>
        <p>
          {meme.randomImage && <img src={meme.randomImage} className='image' alt='meme' />}
        </p>
      </div>
    </>
  );
}

export default Meme;