import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { layout, validateMessages, classOptions } from './reducers'
import { Form, Input, Popconfirm, message, Select, InputNumber, Button } from 'antd'
import PassengerList from './PassengerList'
class Passengers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            passengerName: "",
            phoneNumber: 0,
            email: "",
            flightId: "",
            travelClass: "",
        }
        this.handleChage = this.handleChage.bind(this)
        this.selectHandleChange = this.selectHandleChange.bind(this)
    }

    submitForm = () =>  {
        var ourStatus = "";
        const {passengerName, phoneNumber , email , flightId  , travelClass} = this.state
        const body = {passengerName, phoneNumber, email, flightId , travelClass};
        try {
            console.log("We are here")
            fetch("http://e1800954timo.herokuapp.com/api/passengers",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body) }
            ).then(res => {
            ourStatus = res.status == 200 ? "Infromation inserted successfully" : "Error Please check"
            console.log(res.status)
            message.info(ourStatus)

            })
        
            
        } catch (error) {
        message.info(error.message)    
        }

    }

    handleChage(event) {
        const { name, value, type, checked } = event.target

        this.setState({
            [name]: value
        })
    }
    selectHandleChange(value) {
        this.setState({
            travelClass: value
        })
    }

    render() {
        const { passengerName, phoneNumber, email, flightId, travelClass } = this.state
        console.log(travelClass)


        return (
            <div style={{ padding: "20px" }} className="componentStyle">
                <Form {...layout} validateMessages={validateMessages}>
                    <Form.Item
                        label='Passenger Name'
                        rules={
                            [
                                { required: true }

                            ]
                        }
                        style={{ marginRight: '20px' }}
                    >
                        <Input
                            name='passengerName'
                            onChange={this.handleChage}
                        />
                    </Form.Item>
                    <Form.Item
                        label='Phone Number'
                        rules={
                            [
                                { required: true }
                            ]
                        }
                        style={{ marginRight: '20px' }}
                    >
                        <Input
                            name='phoneNumber'
                            onChange={this.handleChage}
                            value={phoneNumber}
                        />
                    </Form.Item>
                    <Form.Item
                        label='Travel Class'
                        style={{ marginRight: '20px' }}
                    >
                        <Select
                            type="Select"
                            options={classOptions}
                            onChange={this.selectHandleChange}
                            defaultActiveFirstOption
                        />
                    </Form.Item>

                    <Form.Item
                        label='Email'
                        style={{ marginRight: '20px' }}
                        rules={
                            [
                                { required: true, type: 'email' }
                            ]
                        }
                    >
                        <Input
                            name = 'email'
                            onChange={this.handleChage}
                        />

                    </Form.Item>
                    <Form.Item
                        label='Flight Number'
                        style={{ marginRight: '20px' }}

                    >
                        <Input
                            name = 'flightId'
                            onChange={this.handleChage}
                        />
                        <Popconfirm
                            title = 'Are you adding the flight ?'
                            okText = 'Yes'
                            cancelText = 'No'
                            onConfirm = {this.submitForm}
                        >
                            
                            <Button type='primary' htmlType="submit">Add Flight</Button>
                        </Popconfirm>
                </Form.Item>
                </Form>

                <PassengerList />

            </div>
        )
    }
}


export default Passengers;