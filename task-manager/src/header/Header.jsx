import './Header.css'
import { CiSearch } from "react-icons/ci";

export function Header() {
  return (
    <div className='Header'>
      <div className='Left-part'>
        <img src="" alt="" />
        <h1>TaskFlow</h1>
      </div>
      <div className='Right-part'>
        <div className='input-container'>
          <CiSearch className='search-icon' />
          <input className='input' placeholder= 'search tasks...' type="text" />
        </div>
      </div>
    </div>
  );
}