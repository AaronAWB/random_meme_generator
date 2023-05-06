import '@Styles/Meme.css'

function Meme () {
  return (
    <div className='meme'>
      <form className='form'>
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
        >
          Generate
        </button>
      </form>
    </div>
  );
}

export default Meme;