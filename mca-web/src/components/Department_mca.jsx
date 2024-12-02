import React from 'react'
import {Link} from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll"
import './department.css'
import { About } from './About'

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
                                        <li><AnchorLink href='#placement'>Placement</AnchorLink></li>
                                        <li><AnchorLink href='#about'>About Us</AnchorLink></li>
                                        <li><AnchorLink href='#blog'>Blog</AnchorLink></li>
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
        <section id="placement" className='my-5'>
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
                        --
                    </div>
                    <h1>Our Recruiters</h1>
                    <div className="logofield d-flex">
                        --
                    </div>
                </div>
            </div>
        </section>
        <section id="about" className="my-5 py-5 d-flex justify-content-center">
            <div className="about-wrapper">
                <div className="containers about-container text-center">
                    <h1 className='my-3'>What Our Students Say About Us</h1>
                    <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ex, nesciunt numquam rem quas quo?</p>
                    <About />
                </div>
            </div>
        </section>
        <section id="blog" className='mt-3 py-3'>
            <div className="blog-wrapper">
                <div className="containers">
                    <h1>ZIGBEE CLUB</h1>
                    <h2>Activities And Hands-On Sessions</h2>
                    <div className="blog-field d-flex justify-content-around align-items-center gap-5 py-5">
                        <div className="card">
                            <div className="img-field">
                                <img src="\src\assets\img\session1.jpg" alt="" />
                            </div>
                            <div className="details p-4">
                                <button className='btn btn-primary mx-5'>Recommend</button>
                                <h6 className='py-3 my-0'>29 SEP 2024</h6>
                                <h4>Chatbot creation using Dialogflow</h4>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta!</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-field">
                                <img src="\src\assets\img\session1.jpg" alt="" />
                            </div>
                            <div className="details p-4">
                                <button className='btn btn-primary mx-5'>Recommend</button>
                                <h6 className='py-3 my-0'>29 SEP 2024</h6>
                                <h4>Chatbot creation using Dialogflow</h4>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta!</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-field">
                                <img src="\src\assets\img\session1.jpg" alt="" />
                            </div>
                            <div className="details p-4">
                                <button className='btn btn-primary mx-5'>Recommend</button>
                                <h6 className='py-3 my-0'>29 SEP 2024</h6>
                                <h4>Chatbot creation using Dialogflow</h4>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta!</p>
                            </div>
                        </div>
                    </div>
                    <div className='btn-field d-flex justify-content-center'>
                        <button className='btn btn-primary'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
