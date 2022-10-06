import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        <a 
        href="https://linkedin.com/in/shreeya-j-patel" 
        className='home__social-icon' 
        target="_blank">
            <i class='uil uil-linkedin'></i>
        </a>

        <a 
        href="https://github.com/shreeyapatell" 
        className='home__social-icon' 
        target="_blank">
            <i class='uil uil-github-alt'></i>
        </a>

        <a 
        href="mailto:shreeyapaatel@gmail.com" 
        className='home__social-icon' 
        target="_blank">
            <i class='uil uil-envelope'></i>
        </a>

    </div>
  )
}

export default Social