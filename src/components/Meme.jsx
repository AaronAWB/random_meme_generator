function Meme () {
  return (
    <div className='meme'>
      <form>
        <label></label>
        <input 
          type='text'
          className='form-input'
          placeholder='top text'
        ></input>
        <label></label>
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