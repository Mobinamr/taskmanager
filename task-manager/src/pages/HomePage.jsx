import './HomePage.css';
import { Header } from '../header/Header';

export function HomePage() {
  return (
    <>
      <div className='homepage-container'>
        <Header />
        <div className='main-container'>
          <div className='sidebar'>
            <h1 className='sidebar-title' >CATEGORIES</h1>
            <div className='buttons-container'>
              <button>All tasks</button>
              <button>Work</button>
              <button>Personal</button>
              <button className='Learning-button'>Learning</button>
            </div>
            <button className='category-button'>New category</button>
          </div>
          <div className="homepage">
            <h2>HomePage</h2>
          </div>
        </div>
      </div>
    </>
  )
}