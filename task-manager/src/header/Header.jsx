import './Header.css'

export function Header() {
  return (
    <div className='Header'>
      <div className='Left-part'>
        <h1>Task Manager</h1>
      </div>
      <div className='Right-part'>
        <input className='input' placeholder='search tasks' type="text" />
      </div>
    </div>
  );
}