import React from 'react'

export const Homepage = () => {
  return (
    <section className='home'>
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
                <img src="https://egspec.org/assets/images/counseling_code.gif" alt="Logo 6" class="square-logo" loading="lazy" />
                </picture>
            </div>
        </div>
        {/* <div class="header-middle-wrapper my-3 py-2">
            <div class="container-fluid">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-7 d-flex align-items-center" />
                        <a href="https://egspec.org" class="logo-area">
                            <picture>
                                <source srcset="https://egspec.org/assets/images/EGSLOGO_2.webp" media="(min-width: 768px)" type="image/webp" />
                            
                                <img src="https://egspec.org/assets/images/logo_tran.svg" alt="logo" class="logo dlogo" />
                            </picture>

                        </a>
                        <div class="menu-bar ml-auto d-lg-none" id="menu-btn" />
                            <picture>
                                <source srcset="https://egspec.org/assets/images/icon/bar.svg" type="image/svg+xml" />
                                <img src="https://egspec.org/assets/images/icon/bar.svg" alt="menu-bar" />
                            </picture>
                        </div>
                    </div>

                    <div class="col-lg-5 text-right">
                        <div class="header-right-logos d-flex justify-content-end">
                            <picture>
                                <source srcset="https://www.citchennai.edu.in/wp-content/uploads/2023/12/nba-logo.svg" type="image/svg" />
                                <img src="https://www.citchennai.edu.in/wp-content/uploads/2023/12/nba-logo.svg" alt="Logo 1" class="square-logo" loading="lazy" />
                            </picture>
                            <picture>
                                <source srcset="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png" type="image/png" />
                                <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png" alt="Logo 2" class="square-logo" loading="lazy" />
                            </picture>
                            <picture>
                                <source srcset="https://upload.wikimedia.org/wikipedia/en/4/49/Anna_University_Logo.svg" type="image/svg+xml" />
                                <img src="https://upload.wikimedia.org/wikipedia/en/4/49/Anna_University_Logo.svg" alt="Logo 3" class="square-logo" loading="lazy" />
                            </picture>
                            <picture>
                                <source srcset="https://upload.wikimedia.org/wikipedia/en/1/1d/NAAC_LOGO.png" type="image/png" />
                                <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/NAAC_LOGO.png" alt="Logo 4" class="square-logo" loading="lazy" />
                            </picture>
                            <picture>
                                <source srcset="https://egspec.org/assets/nirf.webp" type="image/png" />
                                <img src="https://egspec.org/assets/nirf.webp" alt="Logo 5" class="square-logo" loading="lazy" />
                            </picture>
                            <picture>
                                <source srcset="https://egspec.org/assets/images/counseling_code.gif" type="image/gif" />
                                <img src="https://egspec.org/assets/images/counseling_code.gif" alt="Logo 6" class="square-logo" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </section>
  )
}
