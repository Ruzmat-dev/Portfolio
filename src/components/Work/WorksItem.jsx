import React from 'react'
import "./style.scss"

const WorksItem = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} className='work__button linksPartfolyu'>
            <span>Demo  </span>
            <a href='https://github.com/Ruzmat-dev/tesla'>GitHub Link </a>
        </a>
    </div>
  )
}

export default WorksItem