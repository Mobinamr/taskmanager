import './HomePage.css';
import { Header } from '../header/Header';
import { LayoutGrid, Feather } from 'lucide-react';
import { TbBriefcase2 } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { GoPlus } from "react-icons/go";


export function HomePage() {
  return (
    <>
      <div className='homepage-container'>
        <Header />
        <div className='main-container'>
          <div className='sidebar'>
            <h1 className='sidebar-title' >CATEGORIES</h1>
            <div className='buttons-container'>
              <button> <LayoutGrid className='button-icon' /> All tasks</button>
              <button> <TbBriefcase2 className='work-button-icon' /> Work</button>
              <button> <FaRegHeart className='button-icon' /> Personal</button>
              <button className='Learning-button'> <FiBookOpen className='button-icon' /> Learning</button>
            </div>
            <button className='category-button'> <GoPlus className='button-icon' /> Add category</button>
          </div>
          <div className="homepage">
            <h2>HomePage</h2>
          </div>
        </div>
      </div>
    </>
  )
}