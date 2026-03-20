import './HomePage.css';
import { Header } from '../header/Header';

export function HomePage() {
  return (
    <>
      <div className='homepage-container'>
        <Header />
        <div className='main-container'>
          <div className="sidebar">
            <h1>SideBar</h1>
          </div>
          <div className="homepage">
            <h2>HomePage</h2>
          </div>
        </div>
      </div>
    </>
  )
}