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
                    <Link to='/'>
                    <picture>
                        <img src="https://egspec.org/assets/images/EGSLOGO_2.webp" alt="" />
                    </picture>
                    </Link>
                    <div className="row">
                    <div className="header2 d-sm-flex">
                        <h4 className='col-12 col-sm-6 d-flex align-items-center justify-content-center'>DEPARTMENT OF MCA</h4>
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
            <div className="navigation">HOME</div>
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
