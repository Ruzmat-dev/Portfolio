import React, { useState , useEffect } from 'react'
import { projectsData } from "./Detal"
import WorksItem from './WorksItem'
import "./style.scss"

const Works = () => {
    const [item , setItem] = useState({ name: 'all'})
    const [projects , setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }, [item]);

  return (
    <div>
        <div className="work__container container grid">
            {
                projectsData.map((item) => {
                    return <WorksItem item={item} key={item.id}/>
                })
            }
        </div>
    </div>
  )
}

export default Works