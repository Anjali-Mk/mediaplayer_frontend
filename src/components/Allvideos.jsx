import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addVideocategoryApi, getVideoApi } from '../services/allApi'
import Category from './Category'
import { toast } from 'react-toastify'

function Allvideos(addVideoStatus,setVideoStatus) {

const [Allvideos, setAllVideos]=useState([])

const [deleteVideoStatus , setDeleteVideoStatus] = useState({})

// side effect 
  const getAllvideo = async()=>{
    const result = await getVideoApi()
    setAllVideos(result.data);
    
  } 
  console.log(Allvideos);

  const ondrop = (e)=>{
    e.preventDefault()
  }

  const VideoDrop= async(e)=>{
    const {category,video}=JSON.parse(e.dataTransfer.getData("dataShare")) 
    console.log(category,video);

    const newArray = category.Allvideos.filter((item)=>item.id!=video.id)
    const newCategory ={
      category:category.category,
      Allvideos:newArray,
      id:category.id
    }

    const result=await addVideocategoryApi (category.id,newCategory)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setVideoStatus(result.data)
    }
    else{
      toast.error('Something went wrong')
    }
    
    
  }




  // to handle sideeffect
  useEffect(()=>{
    getAllvideo()
  },[addVideoStatus , deleteVideoStatus])  //[]-useEffect is called when the component render to the browser
  
  return (
    <>
     <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>VideoDrop(e)}>
        <h4>All Videos</h4>
        {/* video added */}
        { Allvideos.length>0?
        <div className="container">
          <div className="row">
            {Allvideos.map((item)=>(   //used bcoz content is html
              <div className="col-md-3 p-2">
              <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </div>
            ))
            }
            
          </div>
        </div>
  
            :
  
        
        <div className="container">
          <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                  <img src="https://dentosindia.com/asset/frontend/images/empty-card.png" alt="no image" className='w-100' />
                  <h5 className='text-warning text-center'>No Video Yet</h5>
              </div>
              <div className="col-md-4"></div>
          </div>
        </div>
         }
     </div>
    </>
  )
}

export default Allvideos
