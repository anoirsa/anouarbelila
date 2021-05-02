import React ,{useState , useEffect}from 'react'
import 'antd/dist/antd.css';
import {Form, Input, InputNumber,Button ,
Popconfirm, message} from 'antd'
import fetch from 'unfetch'
import FlightList from './FlightList'
import {layout,validateMessages} from './reducers'



function Flights() {
    
    const validateMessages = {
        required : '${label} is required'
    }
    const [departure , setDeparture] = useState("");
    const [arrival , setArrival] = useState("");
    const [flightTime , setFlightTime] = useState("");
    console.log(departure);
    var ourStatus = null;
    // const reducer = require("./reducers")
    const text = "Are you sure to sumbit the flight information ?";

    
    const onSumbitForm = async() => {
       const body = {departure, arrival, flightTime};
        try {
            const response = await fetch("http://e1800954timo.herokuapp.com/api/flights",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body) }
            )
        ourStatus = response.status == 200 ? "Information inserted successfully" : "Error DateFormat must be dd-MM-yyyy"
        message.info(ourStatus)
        
            
        } catch (error) {
        message.info(error.message)    
        }
    }
    return(
        <div style={{padding : "20px"}} className="componentStyle" >
        <Form {...layout}  validateMessages={validateMessages} 
      
             >
            <Form.Item
            name={['flight' , 'departure']}
            label = "Departure"
            rules = {[
                {
                    required : true
                }
                
            ]}
            style={{marginRight : "20px"}}
            >
          <Input 
            type="text"
            value = {departure}
            onChange = {e => setDeparture(e.target.value)}
            
          />
            </Form.Item>
           
            <Form.Item
            name={['flight' , 'arrival']}
            label = "Arrival"
            rules = {[
                {
                    required : true
                }
                
            ]}
            style={{marginRight : "20px"}}
            >
          <Input
            type = "text"
            value = {arrival}
            onChange = {e => setArrival(e.target.value)}
            />
            </Form.Item>
            <Form.Item
            name={['flight' , 'date']}
            label = "Date"
            rules = {[
                {
                    required : true
                }
                
            ]}
            style={{marginRight : "20px"}}
            >
          <Input
            placeholder = "dd-MM-yyyy"
            type = "text"
            value = {flightTime}
            onChange = {e => setFlightTime(e.target.value)}
          />
            </Form.Item>    
         <Form.Item wrapperCol={{...layout.wrapperCol, offset : 8}}>
             <Popconfirm
               title = {text}
               onConfirm = {onSumbitForm}
               okText = "Yes"
               cancelText = "No"
               >
            <Button type='primary' htmlType="submit">
                 Insert Flight
             </Button>
             </Popconfirm>
             </Form.Item>   

        </Form>
        <FlightList />  
        </div>
    )
}


export default Flights;