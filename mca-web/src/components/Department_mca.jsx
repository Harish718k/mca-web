import React from 'react'
import {Link} from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll"
import './department.css'

export const Department_mca = () => {
  return (
    <div className='mca-page'>
        <section className="mca-homepage">
            <div className="mca-home">
                <div className="mca-wapper">
                    <div className="headers d-inline">
                        <div className="row containers">
                            <div className="header2 d-sm-flex justify-content-between align-items-center">
                                <h4 className='col-12 col-sm-3 d-flex  justify-content-center justify-content-sm-start'>
                                <Link to='/'>EGSPEC MCA</Link>
                                </h4>
                                <nav className='col-12 col-sm-9 col-lg-7'>
                                    <ul className='d-flex justify-content-between p-2'>
                                        <li><AnchorLink href='#home'>Home</AnchorLink></li>
                                        <li><AnchorLink href='#blogs'>Placement</AnchorLink></li>
                                        <li><AnchorLink href='#blogs'>About Us</AnchorLink></li>
                                        <li><AnchorLink href='#blogs'>Addmission</AnchorLink></li>
                                        <li><AnchorLink href='#about'>Blog</AnchorLink></li>
                                        <li><AnchorLink href='#contact'>Contact Us</AnchorLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="home">
                    <div className="wrapper">
                        <div className="containers text-center py-4">
                            <h1 className='py-5'>Unleash Your Potential <br/>with Our Advanced<br/> MCA Program</h1>
                            <p className='py-2'>Welcome to the Department of Computer Applications, where innovation meets excellence. 
                            <br/>Our department is at the forefront of cutting-edge research and education in the field of computer applications.</p>
                            <div className="buttons d-flex gap-3 justify-content-center py-5">
                                <button className="btn btn-primary">Get started</button>
                                <button className="btn btn-dark">Learn more</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section id="Placement" className='my-5'>
            <div className="placement-wrapper">
                <div className="containers">
                    <h1 className="text-center py-4">PLACEMENT</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis ducimus labore assumenda dicta ipsam, fugiat consequatur mollitia aspernatur temporibus!</p>
                    <div className="record d-flex justify-content-between py-5">
                        <div className="card text-center">
                            <h5>Total Company Visited</h5>
                            <h3>256+</h3>
                        </div>
                        <div className="card text-center">
                            <h5>No of Student Placed</h5>
                            <h3>851+</h3>
                        </div>
                        <div className="card text-center">
                            <h5>Our Department</h5>
                            <h3>42+</h3>
                        </div>
                        <div className="card text-center">
                            <h5>Avg Package Offered</h5>
                            <h3>2-6 LPA</h3>
                        </div>
                    </div>
                    <h1>Academic Partners</h1>
                    <div className="logofield d-flex">
                        
                    </div>
                </div>
            </div>
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
