import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
       <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
      <Row className='mt-5'>
        <Col md={6}>
        <h2 className='mt-md-5 mt-2'>Welcome to <span className='text-warning'> Media Player</span></h2>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae earum quo. Voluptatibus totam aliquid sapiente cumque consequuntur voluptatem culpa harum inventore quo, corporis dicta! Illum perspiciatis alias quo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fugiat quos neque in debitis dolore dicta facilis ullam reprehenderit maxime at corporis, aspernatur ipsa tenetur pariatur eum consequatur nemo exercitationem.</p>
        <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
        <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75' />
        </Col>
      </Row>
    </Container>

    <Container >
        <h2 className='text-center'>Features</h2>
        <Row className=''>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/04/39/04/04390480a47fd53214311db4eed77f71.gif" />
      <Card.Body>
        <Card.Title className='text-center text-warning'>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum dolorem obcaecati natus quisquam aspernatur, adipisci tenetur delectus, dignissimos nemo omnis eius illum nobis voluptatibus eaque! Praesentium illum quis!
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/18/de/42/18de42ff1fc8b8d5e04a37687dae47ca.gif" />
      <Card.Body>
        <Card.Title className='text-center text-warning'>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nam, ab fuga, exercitationem vero iure dolorem doloribus labore deserunt molestias temporibus non sint mollitia eum ipsum quo voluptas laboriosam ea!
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/37/8a/8e/378a8e7ab5f77858fabd8b7844a5e234.gif" />
      <Card.Body>
        <Card.Title className='text-center text-warning'>Card Title</Card.Title>
        <Card.Text>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem laboriosam assumenda magni sint minima labore consequuntur praesentium, hic ullam. Sint voluptate illo quae hrtghh fhhnbj alias, doloremque quaerat!
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>

        </Row>
      </Container>

      <div className='container'>
        <div className='row p-md-5 p-3'>
          <div className='col border border-secondary border-2 rounded p-4 p-md-5'>
            <div className='row'>
              <div className='col-md-6'>
                <h3 className='text-warning'>Simple Fast And Powerful</h3>
                <p><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae architecto fuga voluptates omnis rerum nulla nesciunt ipsam, facere assumenda eius aut dignissimos quae? Vel cum perferendis id doloribus exercitationem. </p>
                <p className='mt-4'><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae architecto fuga voluptates omnis rerum nulla nesciunt ipsam, facere assumenda eius aut dignissimos quae? Vel cum perferendis id doloribus exercitationem. </p>
                <p className='mt-4'><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae architecto fuga voluptates omnis rerum nulla nesciunt ipsam, facere assumenda eius aut dignissimos quae? Vel cum perferendis id doloribus exercitationem. </p>
              </div>
              <div className='col-md-6'>
              <iframe width="100%" height="514" src="https://www.youtube.com/embed/VAdGW7QDJiU" title="JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
