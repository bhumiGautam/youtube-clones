import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import GameIcon from '../../assets/game_icon.png'
import AutoMobiles from '../../assets/automobiles.png'
import Sports from '../../assets/sports.png'
import Entertainment from '../../assets/entertainment.png'
import Tech from '../../assets/tech.png'
import Music from '../../assets/music.png'
import Blogs from '../../assets/blogs.png'
import News from '../../assets/news.png'
import Jack from '../../assets/jack.png'
import Simon from '../../assets/simon.png'
import Tom from '../../assets/tom.png'
import Megan from '../../assets/megan.png'
import Cameron from '../../assets/cameron.png'




const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`side-links ${category===0?"active":""}`} onClick={()=>{setCategory(0)}}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`side-links ${category===20?"active":""}`} onClick={()=>{setCategory(20)}}>
                <img src={GameIcon} alt="" /><p>Gaming</p>
            </div>
            <div className={`side-links ${category===2?"active":""}`} onClick={()=>{setCategory(2)}}>
                <img src={AutoMobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className={`side-links ${category===17?"active":""}`} onClick={()=>{setCategory(17)}}>
                <img src={Sports} alt="" /><p>Sports</p>
            </div>
            <div className={`side-links ${category===24?"active":""}`} onClick={()=>{setCategory(24)}}>
                <img src={Entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className={`side-links ${category===28?"active":""}`} onClick={()=>{setCategory(28)}}>
                <img src={Tech} alt="" /><p>Technology</p>
            </div>
            <div className={`side-links ${category===10?"active":""}`} onClick={()=>{setCategory(10)}}>
                <img src={Music} alt="" /><p>Music</p>
            </div>
            <div className={`side-links ${category===22?"active":""}`} onClick={()=>{setCategory(22)}}>
                <img src={Blogs} alt="" /><p>Blogs</p>
            </div>
            <div className={`side-links ${category===25?"active":""}`} onClick={()=>{setCategory(25)}}>
                <img src={News} alt="" /><p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-links" >
                <img src={Jack} alt="" /> <p>PewDiePie</p>
            </div>
            <div className="side-links" >
                <img src={Simon} alt="" /> <p>MrBeast</p>
            </div>
            <div className="side-links" >
                <img src={Tom} alt="" /> <p>Justin Bieber</p>
            </div>
            <div className="side-links" >
                <img src={Megan} alt="" /> <p>5-Minute Crafts</p>
            </div>
            <div className="side-links" >
                <img src={Cameron} alt="" /><p>Nas Daily</p>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
