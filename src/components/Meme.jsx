import { useState } from 'react';
import '@Styles/Meme.css'
import memesData from '../memesData'


function Meme () {

  const allMemeImgs = memesData;
  const [formData, setFormData] = useState({
    topText: '',
    bottomText: ''
  })
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage:''
  })


  function handleClick () {
    const memes = allMemeImgs.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length)
    const url = memes[randomNumber].url;
    setMeme({
      topText: formData.topText,
      bottomText: formData.bottomText,
      randomImage: url
    });
  }

  function handleChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  console.log(meme)

  return (
    <>
      <div className='form'>
        <input 
          type='text'
          className='form-input'
          placeholder='top text'
          name='topText'
          onChange={handleChange}
        ></input>
        <input 
          type='text'
          className='form-input'
          placeholder='bottom text'
          name='bottomText'
          onChange={handleChange}
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