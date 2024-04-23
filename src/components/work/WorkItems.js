import React from 'react'
import { projectsData } from './Data'

{/*
export const WorkItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className='work__title'>{item.title}</h3>
        <a href='#' className='work__button'>
            View Project<i className= 'bx bx-right-arrow-alt work__button-icon'></i>
        </a>
    </div>
  )
}
*/}

export const WorkItems = () => {
  return (
    <>
      {/* Running Record */}
      <div className='work__card' key={projectsData[0].id}>
          <img src={projectsData[0].image} alt='' className='work__img'/>
          <h3 className='work__title'>{projectsData[0].title}</h3>
          <a href={projectsData[0].link} className='work__button'>
              View Project<i className= 'bx bx-right-arrow-alt work__button-icon'></i>
          </a>
      </div>

      {/* Eco Advisor */}
      <div className='work__card' key={projectsData[1].id}>
          <img src={projectsData[1].image} alt='' className='work__img'/>
          <h3 className='work__title'>{projectsData[1].title}</h3>
          <a href={projectsData[1].link} className='work__button'>
              View Project<i className= 'bx bx-right-arrow-alt work__button-icon'></i>
          </a>
      </div>

      {/* Alpha Learning Series */}
      <div className='work__card' key={projectsData[2].id}>
          <img src={projectsData[2].image} alt='' className='work__img'/>
          <h3 className='work__title'>{projectsData[2].title}</h3>
          <a href={projectsData[2].link} className='work__button'>
              View Project<i className= 'bx bx-right-arrow-alt work__button-icon'></i>
          </a>
      </div>

      {/* Cheers */}
      <div className='work__card' key={projectsData[4].id}>
          <img src={projectsData[4].image} alt='' className='work__img'/>
          <h3 className='work__title'>{projectsData[4].title}</h3>
          <a href={projectsData[4].link} className='work__button'>
              View Project<i className= 'bx bx-right-arrow-alt work__button-icon'></i>
          </a>
      </div>

      {/* Typing Test */}
      <div className='work__card' key={projectsData[5].id}>
          <img src={projectsData[5].image} alt='' className='work__img'/>
          <h3 className='work__title'>{projectsData[5].title}</h3>
          <a href={projectsData[5].link} className='work__button'>
              View Project<i className= 'bx bx-right-arrow-alt work__button-icon'></i>
          </a>
      </div>

      {/* Tiktok for Business */}
      <div className='work__card' key={projectsData[3].id}>
          <img src={projectsData[3].image} alt='' className='work__img'/>
          <h3 className='work__title'>{projectsData[3].title}</h3>
          <a href={projectsData[3].link} className='work__button'>
              In Progress<i className= 'bx bx-right-arrow-alt work__button-icon'></i>
          </a>
      </div>

    </>
    
  )
}
