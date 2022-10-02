import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            {/* 
            <h1 className='footer__title'>Shreeya Patel</h1>

            <ul className='footer__list' >
                <li>
                    <a href = "#about" className='footer__link'>About</a>
                </li>
            </ul>

            <ul className='footer__list' >
                <li>
                    <a href = "#" className='footer__link'>Projects</a>
                </li>
            </ul>

            <div className='footer__social'>

                <a 
                href="https://linkedin.com/in/shreeya-j-patel" 
                className='footer__social-link' 
                target="_blank">
                    <i class='uil uil-linkedin'></i>
                </a>

                <a 
                href="https://github.com/shreeyapatell" 
                className='footer__social-link' 
                target="_blank">
                    <i class='uil uil-github-alt'></i>
                </a>

            </div> */}

            <span className='footer__copy'> &#169; Shreeya Patel. All rights reserved.</span>

        </div>
    </footer>
  )
}

export default Footer