import './HomePage.css';
import './SideBar.css';
import { Header } from '../header/Header';
import { SideBar } from './SideBar';
import { useState } from 'react';
import { GoPlus } from "react-icons/go";


export function HomePage() {
  const [title, setTitle] = useState('All tasks');
  return (
    <>
      <div className='homepage-container'>
        <Header />
        <div className='main-container'>
          <SideBar setTitle={setTitle} />
          <div className="homepage">
            <div className='homepage-header'>
              <div>
                <h2 className='homepage-title'>{title}</h2>
                <p className='homepage-subtitle'>2 tasks &ndash; 2 due today</p>
              </div>
              <div className='homepage-button-container'>
                <select className='date-button' name="date" id="">
                  <option value="date">Sort by due date</option>
                  <option value="priority">Sort by priority</option>
                  <option value="alphabetical">Sort by name</option>
                </select>

                <button className='add-task-button'>
                  <GoPlus className='add-task-icon' />
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}