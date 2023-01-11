import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <i class='bx bx-award about__icon'></i>
            <h3 className='about__title'> Academic </h3>
            <span className='about__subtitle'> Dean's List </span>
        </div>

        <div className='about__box'>
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>5+ Projects</span>
        </div>

        <div className='about__box'>
        <i class='bx bx-donate-heart about__icon'></i>
            <h3 className='about__title'>Volunteering</h3>
            <span className='about__subtitle'>3+ Clubs</span>
        </div>
    </div>
  )
}

export default Info