import { Add } from '@material-ui/icons'
import React, { useState } from 'react'
import "react-lightbox-pack/dist/index.css";
import { LightBox } from 'react-lightbox-pack'
import './WebandApplicationProjects.css'


export default function ProjectItem({projects}) {

  // State
  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  const lightBoxHandler = (state,sIndex) => {
    setToggle(state)
    setSIndex(sIndex)
  }


  return (
    <div className='project-item'>
        <div className='container'>
        <div className='row'>
            {projects.map((projectItem, index) => (
                    <div key={projectItem.id} className='col-lg-4 col-md-6'>
                    
                        <div className='project-item__inner'>
                            <img className='img-fluid my-3' src={projectItem.image} alt="Project Item Image" />
                            <div className='project__info d-flex align-items-center justify-content-between'>
                              <h4>{projectItem.title}</h4>
                              <div className='project__links'>
                              <Add onClick={() => lightBoxHandler(true,index)}/>
                              </div>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        </div>

			<LightBox
				state={toggle}
        event={lightBoxHandler}
        data={projects}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
			/>
    </div>
  )
}
