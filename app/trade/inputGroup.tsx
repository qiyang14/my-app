"use client"; 
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function FormFloatingTextareaExample() {
  const flexCol = "flex flex-col items-center justify-between"
  const flexBetween = "flex items-center"
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    alert("Clicked me!");
    console.log('button be clicked');
    };
    const try1 = () => {
        alert('see');
    };
  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

    <script
    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
    crossorigin></script>

    <script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script>

    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
    />
    <script>var Alert = ReactBootstrap.Alert;</script>

    <b className='content-in-box inset-y-1.5 inset-x-1.5'>DAY: 267</b>
    <p className='content-in-box top-6 inset-x-1.5'>Predicted Price</p>
    <InputGroup size="sm" className="mb-3 content-in-box top-16 inset-x-1.5 w-50">
        <Form.Control
        className='w-10'
          aria-label="Small"
          type="number" 
          aria-describedby="inputGroup-sizing-sm"
        />
    </InputGroup>
    <p className='content-in-box top-32 inset-x-1.5'>Symbol</p>
    <FloatingLabel controlId="Symbol" label="Choose the company" className='content-in-box top-32 inset-x-1.5 w-50'>
      <Form.Select aria-label="Floating label select example">
      <option value="1">ABC</option>

      </Form.Select>
    </FloatingLabel>
    <div className={`${flexBetween} space-x-36 mt-40 ml-4`}>
        <div className={`${flexCol}`}>
          {/* <p className={`${flexBetween}`}>Action</p> */}
          <FloatingLabel controlId="Action" label="Action" className='content-in-box'>
            <Form.Select aria-label="Floating label select example">
                <option value="1">Buy</option>
                <option value="2">Sell</option>
            </Form.Select>
            </FloatingLabel>
            {/* <Form.Select aria-label="select example">
                <option>Open the select menu</option>
                <option value="1">Buy</option>
                <option value="2">Sell</option>
            </Form.Select> */}

        </div>
        <div className={`${flexCol}`}>
          {/* <p className={`${flexBetween}`}>Quantity</p> */}
          <FloatingLabel controlId="Quantity" label="Quantity" className='content-in-box'>

          
            <Form.Control
            className='w-10'
            aria-label="Small"
            type="number" 
            aria-describedby="inputGroup-sizing-sm"
            />

          </FloatingLabel>

        </div>
        
      </div>
    {/* <Button variant="secondary" onClick={() => try1()}>See</Button> */}
    <Button onClick={handleShow} variant="primary" size="lg" className='mt-4 ml-4' >
        <div className={`${flexBetween}`}>
        PREVIEW ORDER
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='m-1'>
        <path d="M12.22 19.78L10.81 18.36L17.17 12L10.81 5.64L12.22 4.22L20 12L12.22 19.78Z" fill="#BEBDBD"/>
        </svg>
        </div>
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default FormFloatingTextareaExample;