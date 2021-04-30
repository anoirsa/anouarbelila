import React from 'react'
import {Button, Table , Popconfirm, message, Modal, Select, Input} from 'antd'
import 'antd/dist/antd.css'
import {dataFetch, deleteFetch} from './client'

class PassengerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible : false,
            data : []
        }
    //this.getData = this.getData.bind(this)    

    }

    showModal = (valueToPut) => {
        this.setState({
            isModalVisible : valueToPut
        })
    }

  /**   getData = async()  => {
       
        const resp =   await fetch('http://localhost:8082/api/passengers')
        const resoi =  await resp.json();
        this.setState({
            data : resoi
        })} **/
       
        
    componentDidMount() {
      //this.getData();
      dataFetch.then(res => res.json()).then(data => 
        this.setState({
            data :data
        }))
    } 
    shouldComponentUpdate(newProps , newState) {
        console.log("Triffed" + newState)
        return true
    }
    
    handleDelete  =(id) => (event) =>{
        console.info("here")
       
    }
       
    render() {
        const columns = [ 
            {
                title : 'Passenger ID',
                dataIndex : 'passengerId',
                key : 'passengerId'
            },
            {
                title : 'Passenger Name',
                dataIndex : 'passengerName',
                key : 'passengerName'
            },
            {
                title : 'Phone Number',
                dataIndex : 'phoneNumber',
                key : 'phoneNumber'
            },
            {
                title : 'Email',
                dataIndex : 'email',
                key : 'email'
            },
            {
                title : 'Flight ID',
                dataIndex : 'flightId',
                key : 'flightId'
            },
            {
                title : 'Travel Class',
                dataIndex : 'travelClass',
                key : 'travelClass'
            },
            {
                title : 'Delete',
                dataIndex : 'passengerId',
                key : 'passengerId',
                render : userId => <Popconfirm
                onConfirm = {() => deleteFetch(userId)}
                okText = "Yes"
                cancelText ="No"
                title = "Are you sure you want to delete the passenger ?"
                >
                    
                    <Button>
                    Delete
                </Button>  
                </Popconfirm>
               
            }, 
           


        ]

        return (
            <Table dataSource={this.state.data} columns={columns} />
            )
    }
}

export default PassengerList