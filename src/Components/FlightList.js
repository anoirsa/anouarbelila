import React , {useEffect, useState}from 'react'
import {Button, Table , Popconfirm, message, Modal, Select, Input} from 'antd'
import 'antd/dist/antd.css'
import fetch from 'unfetch'


function FlightList() {
    const deleteText = "Are you sure you are going to delete the flight ?";
    const [data , setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleOk = () => {
        setIsModalVisible(false)
    }
    const handleCancel  = () => {
        setIsModalVisible(false);
    }
    const getData = async() => {
        const dataFetch =  await fetch("http://e1800954timo.herokuapp.com/api/flights");
        const fetchRes = await dataFetch.json()
       // console.log(dataFetch)
        setData(fetchRes)
    }

    const deleteFlight = async(id) => {
        const responseFetch  = await fetch(`http://e1800954timo.herokuapp.com/api/flights/${id}`, {
            method : "DELETE",
            //headers : {"Content-Type" : "application/json"},

        });
        
        console.log((await responseFetch.text()).toUpperCase());
        message.info("Flight has been deleted successfully")
        
        
    }



   useEffect(() => {
       getData();
   })
    const columns = [
        {
            title : 'Flight ID',
            dataIndex : 'flightId',
            key : 'flightId'
        },
        {
            title : 'Departure',
            dataIndex : 'departure',
            key : 'departure'
        },
        {
            title : 'Arrival',
            dataIndex : 'arrival',
            key : 'flightId'
        },
        {
            title : 'Flight time',
            dataIndex : 'flightTime',
            key : 'flightTime'
        },
        {
            title : 'Delete',
            dataIndex : 'flightId',
            key :'flightId',
            render : id => <Popconfirm
                            title = {deleteText}
                            onConfirm={() => deleteFlight(id)}
                            okText = "Yes"
                            cancelText ="No"
                            >
                <Button>
                  Delete
                </Button>
            </Popconfirm>
        },
        {
            title : 'Modify',
            dataIndex : 'flightId',
            key : 'flightId',
            render : id => <div>
                <Button onClick={showModal}>Modify</Button>
                <Modal title = "Modify Flight DATA" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Modify id={id} />
                </Modal>
            </div>
        }
    ]
    return (
    <Table columns = {columns} dataSource = {data}/>
    )
}

function Modify(props) {
    let confirmMessage ="";
    const [varToChange, setVarToChange] = useState("");
    const [newValue, setNewValue] = useState("");
    const onChangeSelect = (value) => {
        setVarToChange(value);
    }
    const handleChangeValue = () =>{
        const response =  fetch(`http://e1800954timo.herokuapp.com/api/flights/${varToChange}/${props.id}`,
            {
                method : "PUT",
                headers : {"Content-Type" : "application/text"},
                body : newValue
            }
            
        );

        confirmMessage = response.status == 200 ? 'Data changed successfully' : 'Error'
    }
    message.info(confirmMessage,[])
     const options = [
        {label : 'Departure' , value : 'departure'},
        {label :'Arrival' , value : 'arrival'},
        {label: 'Flight time',value : 'flight_time'}
    ]
    return (
        <div>
            <h4>Choose what you would like to modify ?</h4>
            <hr/>
            <Select
            options = {options}
            onChange = {onChangeSelect}
            style = {{width : '200px'}}
             />
             
             <Input 
              type = "text"
              style = {{width : '300px' , marginTop:'5%'}}
              onChange = {e => setNewValue(e.target.value)}

             />
            <h6>Insert the new value here</h6>
             <Popconfirm
                title = 'Are you sure you want to modfiy  ?'
                onConfirm = {handleChangeValue}
                okText="Yes"
                onCancel="Cancel"
                >
            <br></br>     
            <Button >Modify</Button>
             </Popconfirm>

        </div>
    )
}


export default FlightList