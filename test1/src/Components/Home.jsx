import React from 'react'
import './CssFile/Home.css';
import Img from '../Resource/homeimage.jpeg';
const Home = () => {
  return (
    <div className='parent'>
      <section className='child1 container w-75 d-flex'>
        <section className='info d-flex flex-column justify-content-center align-items-center'>
          <h2><u>Login Now</u></h2>
          <label htmlFor="email">User Email</label>
          <input type="email" />
          <br />
          <label htmlFor="password"> Password</label>
          <input type='password'/>
          <section>
            <br />
            <button className='button1'>LOGIN</button>  
            <button className='button1'>RESET</button>
          </section>
        </section>
        <section className='imagebox'>
          <img src={Img} style={{width:'830px',height:'95%'}} alt="" />
        </section>
      </section>
    </div>
  )
}

export default Home