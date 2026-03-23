import './Header.css'

export function Header() {
  return (
    <div className='Header'>
      <div className='Left-part'>
        <img src="" alt="" />
        <h1>TaskFlow</h1>
      </div>
      <div className='Right-part'>
        <input className='input' placeholder='search tasks...' type="text" />
      </div>
    </div>
  );
}