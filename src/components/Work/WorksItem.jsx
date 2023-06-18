import React from 'react'
import "./style.scss"

const WorksItem = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} className='work__button linksPartfolyu'>
            <span className='demoProtfoiyu'>Demo  <i class='bx bx-chevron-right-circle'></i> </span>
            <span className='demoProtfoiyu'><a href='https://github.com/Ruzmat-dev/tesla'>GitHub Link <i class='bx bxl-github'></i> </a></span>
        </a>
    </div>
  )
}

export default WorksItem