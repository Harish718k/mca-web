import React from 'react'
import {Link} from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll"

export const Department_mca = () => {
  return (
    <div>
        <section className="mca-homepage">
            <div className="mca-wapper">
                <div className="header d-inline">
                    <Link to='/'>
                    <picture>
                        <img src="https://egspec.org/assets/images/EGSLOGO_2.webp" alt="" width={'100%'}/>
                    </picture>
                    </Link>
                    <nav>
                        <ul className='d-flex justify-content-evenly p-2'>
                            <li>Home</li>
                            <li>Blogs</li>
                            <li>Achivements</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    </div>
  )
}
