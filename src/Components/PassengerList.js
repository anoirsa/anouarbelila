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

    }

     componentDidMount() {
      
    this.props.updateData() 
   
     }
    handleDelete  =(id) =>{
        deleteFetch(id);
        window.location.reload(false)
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
                onConfirm = {() => this.handleDelete(userId)}
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
            <Table dataSource={this.props.data} columns={columns} />
            )
    }
}

export default PassengerList