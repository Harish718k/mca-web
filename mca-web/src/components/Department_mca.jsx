import React from 'react'
import {Link} from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll"
import './department.css'

export const Department_mca = () => {
  return (
    <div>
        <section className="mca-homepage">
            <div className="mca-wapper">
                <div className="header d-inline">
                    
                    <div className="row">
                    <div className="header2 d-sm-flex justify-content-between">
                        <Link to='/' className='col-12 col-sm-4 d-flex align-items-center justify-content-center justify-content-sm-start'>
                        <h4 >EGSPEC MCA</h4>
                        </Link>
                         <nav className='col-12 col-sm-6'>
                            <ul className='d-flex justify-content-evenly p-2'>
                                <li><AnchorLink href='#home'>Home</AnchorLink></li>
                                <li><AnchorLink href='#blogs'>Blogs</AnchorLink></li>
                                <li><AnchorLink href='#about'>About</AnchorLink></li>
                                <li><AnchorLink href='#contact'>Contact</AnchorLink></li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="home">
                <div className="wrapper">
                    <div className="container">
                        <h1>Unleash Your Potential <br/>with Our Advanced<br/> MCA Program</h1>
                        <p>Welcome to the Department of Computer Applications, where innovation meets excellence. 
                           <br/>Our department is at the forefront of cutting-edge research and education in the field of computer applications.</p>
                        <div className="buttons d-flex gap-3">
                            <button className="btn btn-primary">Get started</button>
                            <button className="btn btn-dark">Learn more</button>
                        </div>
                    </div>
                </div>
        </section>
        <section id="blogs">
        <div className="navigation">BLOGS</div>
        </section>
        <section id="about">
        <div className="navigation">ABOUT</div>
        </section>
        <section id="contact">
        <div className="navigation">CONTACT</div>
        </section>
    </div>
  )
}
