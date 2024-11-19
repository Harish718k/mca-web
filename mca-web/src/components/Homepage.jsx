import React from 'react'

export const Homepage = () => {
  return (
    <section className='home'>
        <div className='header-wapper'>
            <nav>
                <div className='contact'>
                    <div>
                        <i class="fa-solid fa-envelope"></i>
                        <p>mca@egspec.org</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-phone"></i>
                        <p>mca@egspec.org</p>
                    </div>
                </div>
                <div className='register'>
                    <p>Feedback <span><i className='fa-solid fa-angle-down'></i></span></p>
                    <p>Register & Login <span><i className='fa-solid fa-angle-down'></i></span></p>
                </div>
            </nav>
            <div className='header'>
                <div className='header-right'>
                    <picture>
                        <img src="https://egspec.org/assets/images/EGSLOGO_2.webp" alt="" />
                    </picture>
                </div>
                <div className='header-left'>
                    <picture>
                        <img src="https://www.citchennai.edu.in/wp-content/uploads/2023/12/nba-logo.svg" alt="" />
                    </picture>
                    <picture>
                        <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png" alt="" />
                    </picture>
                    <picture>
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/49/Anna_University_Logo.svg" alt="" />
                    </picture>
                    <picture>
                        <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/NAAC_LOGO.png" alt="" />
                    </picture>
                    <picture>
                        <img src="https://egspec.org/assets/nirf.webp" alt="" />
                    </picture>
                    <picture id='councling'>
                    <img src="https://egspec.org/assets/images/counseling_code.gif" alt="Logo 6" class="square-logo" loading="lazy" height={"50px"}/>
                    </picture>
                </div>
            </div>
        </div>
        <section className="hero">
            <div className="hero-wapper">
                <div className="row d-flex">
                    <div className="col-6 d-flex justify-content-center">
                        <div className="hero-image">
                            <picture>
                                <img src="https://content3.jdmagicbox.com/comp/nagapattinam/dc/9999p4365.4365.1228281611l1c1r9.dc/catalogue/egs-pillay-engineering-college-nagore-nagapattinam-colleges-ycrzqy.jpg" alt="" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="hero-content">
                            <h1 className='hero-title'>About</h1>
                            <h1 className='hero-title title-name'>EGSPEC <span>MCA</span></h1>
                            <div id='dash'></div>
                            <p className='hero-description'>Established in 1995, E. G. S. Pillay Engineering College is a renowned institution in Tamil Nadu, known for its exceptional infrastructure and academic excellence. Affiliated with Anna University since 2002, it empowers aspiring engineers and managers through comprehensive programs and activities.</p>
                            <div className="d-flex justify-content-between link align-items-center">
                                <p><a href="#">EGSPEC MCA overview <i className='fa-solid fa-arrow-right'></i></a></p>
                                <span className='d-flex justify-content-end'>EST. 1995</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}
