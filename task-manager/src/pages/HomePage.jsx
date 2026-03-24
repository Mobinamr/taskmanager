import './HomePage.css';
import './SideBar.css';
import { Header } from '../header/Header';
import { SideBar } from './SideBar';
import { useState } from 'react';


export function HomePage() {
  const [title, setTitle] = useState('All tasks');
  return (
    <>
      <div className='homepage-container'>
        <Header />
        <div className='main-container'>
          <SideBar setTitle={setTitle} />
          <div className="homepage">
            <h2 className='homepage-title'>{title}</h2>
          </div>
        </div>
      </div>
    </>
  )
}