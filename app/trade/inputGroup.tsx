"use client"; 
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

interface FormFloatingBasicProps {
  day: number;
}
const FormFloatingTextarea: React.FC<FormFloatingBasicProps> = ({day}) => {
  const flexCol = "flex flex-col items-center justify-between"
  const flexBetween = "flex items-center"
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    prePrice: 0,
    symbol: "ABC",
    action:"Buy",
    quantity: 0,
    price: 12,
    stock_id: 'cltz78veu0000gdvz2yal9smn',
    day: day
  })
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState('ABC');
  const [stockPrice, setStockPrice] = useState(null);
  const [, forceRerender] = useState({});
  const [errors, setErrors] = useState({
    // prePrice: false,
    
  })
  const setField = (field: any, value: any) => {
    setForm({
        ...form,
        [field]:value
    })
    // if(!!errors[field]){
    //     setErrors({
    //         ...form,
    //         [field]:null
    //     })
    // }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // alert("Clicked me!");
    // console.log('button be clicked');
    };
    // const try1 = () => {
    //     alert('see');
    // };
    useEffect(() => {
      // Function to fetch available stocks from your database
      const fetchStocks = async () => {
        try {
          // Perform API request to fetch stocks
          const response = await fetch('/api/get-stocks');
          if (!response.ok) {
            throw new Error('Failed to fetch stocks');
          }
          const resjson = await response.json();
          const data = resjson.data
          const stockSymbols: string[] = data.map(item => item.stock_symbol);
          console.log('stock data', stockSymbols);
          setStocks(stockSymbols)
          // Assuming your data is an array of stock symbols like ['ABC', 'XYZ', ...]
          // setStocks(data);
        } catch (error) {
          console.error('Error fetching stocks:', error);
        }
      };
  
      // Call the fetchStocks function when the component mounts
      fetchStocks();
    }, []); // Empty dependency array ensures this effect runs only once when component mounts
  
    useEffect(() => {
      // Function to fetch stock price based on selected stock
      const fetchStockPrice = async () => {
        if (selectedStock) {
          try {
            // Perform API request to fetch stock price based on selected stock
            const response = await fetch(`/api/get-stock-price/${selectedStock}`);
            if (!response.ok) {
              throw new Error('Failed to fetch stock price');
            }
            const data = await response.json();
            // Assuming your response contains the stock price            
            setStockPrice(data.data.close);
            setField('price',data.data.close)
          } catch (error) {
            console.error('Error fetching stock price:', error);
            setStockPrice(null);
          }
        }
      };
      // Call the fetchStockPrice function when selectedStock changes
      fetchStockPrice();
    }, [selectedStock]);
  
    const handleStockChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      setSelectedStock(e.target.value);
      // Perform any other actions you need with the selected stock
    };

    const handleSubmit = async () => {
      try {
        // Send form data to backend API
        console.log('form to send', form);
        
        const response = 
        // await axios.post('/api/money-action', form);
        await fetch('/api/money-action', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Make sure to set Content-Type header to application/json
          },
          body: JSON.stringify(form)
        });
        console.log('Response:', response);
        // Optionally, you can handle success response here
      } catch (error) {
        console.error('Error:', error);
        // Optionally, you can handle error response here
      }
      // forceRerender({})
      window.location.reload();
      setShow(false)
    };
  
  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="anonymous"></script>

    <script
    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
    ></script>

    <script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
    ></script>

    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossOrigin="anonymous"
    />
    <script>var Alert = ReactBootstrap.Alert;</script>

    <b className='ml-4'>DAY: {day}</b>
    <p className='ml-4'>Predicted Price</p>
    <InputGroup size="sm" className="mb-3 ml-4 content-in-box w-50">
        <Form.Control
        className='w-10'
          aria-label="Small"
          type="number" 
          aria-describedby="inputGroup-sizing-sm"
          value = {form.prePrice}
          onChange={e=>setField('prePrice',e.target.value)}
        //   isInValid={!!errors.prePrice}
        />
        {/* <Form.Control.Feedback type='invalid'>
            {errors.prePrice}
        </Form.Control.Feedback> */}
    </InputGroup>
    <p className='ml-4'>Symbol</p>
    <FloatingLabel controlId="Symbol" label="Choose the company" className='content-in-box ml-4 w-50'>
      <Form.Select aria-label="Floating label select example"

      // onChange={e=>setField('symbol',e.target.value)}
        onChange={handleStockChange} value={selectedStock}
      >

      {/* <option value="ABC">ABC</option> */}
        {stocks.map(stock => (
          <option key={stock} value={stock}>{stock}</option>
        ))}
      </Form.Select>
      {stockPrice !== null && (
        <p>Stock Price for {selectedStock}: {stockPrice}</p>
      )}
    </FloatingLabel>
    <div className={`${flexBetween} space-x-36 mt-4 ml-4`}>
        <div className={`${flexCol}`}>
          {/* <p className={`${flexBetween}`}>Action</p> */}
          <FloatingLabel controlId="Action" label="Action" className='content-in-box'>
            <Form.Select aria-label="Floating label select example"
            onChange={e=>setField('action',e.target.value)}>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
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
            onChange={e=>setField('quantity',e.target.value)}
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
          <Modal.Title>Order Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>You Choose to {form.action} {form.quantity} shares of stock {form.symbol} at a price of $ {form.price} each</p>
            <p>And Your Predicted Price for this Stock is $ {form.prePrice}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Comfirm Order
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default FormFloatingTextarea;