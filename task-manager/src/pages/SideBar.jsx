import './SideBar.css';
import './HomePage.css';
import { LayoutGrid } from 'lucide-react';
import { TbBriefcase2 } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

export function SideBar({ setTitle }) {
  return (
    <div className='sidebar'>
      <h1 className='sidebar-title' >CATEGORIES</h1>
      <div className='buttons-container'>
        <button onClick={() => {
          setTitle('All tasks')
        }}> <LayoutGrid className='button-icon' />
          All tasks
        </button>

        <button onClick={() => {
          setTitle('Work')
        }}> <TbBriefcase2 className='work-button-icon' />
          Work
        </button>

        <button onClick={() => {
          setTitle('Personal')
        }}> <FaRegHeart className='button-icon' />
          Personal
        </button>

        <button className='Learning-button' onClick={() => {
          setTitle('Learning')
        }}> <FiBookOpen className='button-icon' />
          Learning
        </button>
      </div>
      <button className='category-button'> <GoPlus className='button-icon' /> Add category</button>
    </div>
  );
}