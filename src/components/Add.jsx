import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddVideoStatus}) {

  const [VideoDetails , setVideoDetails] = useState({
    caption:"",
    imageUrl:"",
    emdedLink:""
  })


 const [show, setShow] = useState(false);

 console.log(VideoDetails);
 

  const handleClose = () => {setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);


  // const setEmded = (e)=>{
  //   const link =e.target.value
  //   if(link.startsWith(' https://youtu.be/')){
  //     const embedL =`https://www.youtube.com/embed/${link.slice(17,28)}`
  //     setVideoDetails({...VideoDetails,emdedLink:embedL})

  //   }else{
  //     const embedL =`https://www.youtube.com/embed/${link.slice(-11)}`
  //     setVideoDetails({...VideoDetails,emdedLink:embedL})

  //   }
  // }

 // https://www.youtube.com/watch?v=nFgsBxw-zWQ
  // https://youtu.be/nFgsBxw-zWQ?si=rIPi0q8t9bPjAVla

  // https://www.youtube.com/embed/nFgsBxw-zWQ 


  const handleCancel = ()=>{
    setVideoDetails({
      caption:"",
      imageUrl:"",
      emdedLink:""
    })
  }

  const handleAdd=async()=>{
      const { caption, imageUrl,emdedLink } = VideoDetails

      if(!caption || !imageUrl||!emdedLink){
        toast.info('please fill the form completely')
      }
      else{
        if(VideoDetails.emdedLink.startsWith('https://youtu.be/')){
          const embedL =`https://www.youtube.com/embed/${VideoDetails.emdedLink.slice(17,28)}`
          // setVideoDetails({...VideoDetails,emdedLink:embedL})
    
          const result = await AddVideoApi({...VideoDetails,emdedLink:embedL})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('video Uploaded Successfully')
            handleClose()
            setAddVideoStatus(result.data)

          }
          else{
            toast.error('something went wrong')
            handleClose()
          }
    
        }else{
          const embedL =`https://www.youtube.com/embed/${VideoDetails.emdedLink.slice(-11)}`
          // setVideoDetails({...VideoDetails,emdedLink:embedL})
    
          const result = await AddVideoApi({...VideoDetails,emdedLink:embedL})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('video Uploaded Successfully')
            handleClose()
            setAddVideoStatus(result.data)

          }
          else{
            toast.error('something went wrong')
            handleClose()
          }
          
    
        }
      }
    
  }
  


  return (
<>
        <div className='d-flex align-items-center'>
            <h5  className='d-none d-md-inline'>Upload New Video</h5>
            <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5' /></button>
          
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning '><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Please fill the following details</h6>
            <div className='border border-secondary rounded p-3 mt-3'>
                <input type="text" value={VideoDetails.caption} className='form-control' placeholder=' videos caption' onChange={(e)=>setVideoDetails({...VideoDetails,caption:e.target.value})}  /><br />
  
                <input type="text"  value={VideoDetails.imageUrl} className='form-control' placeholder='Video Image '  onChange={(e)=>setVideoDetails({...VideoDetails,imageUrl:e.target.value})} /><br />
                <input type="text"  value={VideoDetails.emdedLink} className='form-control' placeholder=' Videos Url' onChange={(e)=>setVideoDetails({...VideoDetails, emdedLink:e.target.value})} /><br/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme="colored"/>
</>
  )
}

export default Add
