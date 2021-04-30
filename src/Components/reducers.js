import {message} from 'antd'
import 'antd/dist/antd.css'
const text = "Are you sure to sumbit the flight information ?";

const confirm = (shownText) => {
    message.info(shownText)
}

const layout = {
    labelCol : {
        span :8
    },
    wrapperCol : {
        span : 8
    },
    
}

const validateMessages = {
    required : '${label} is required',
    types : {
        email : '${label} is not valid email',
        number : '${label} is not a valid number'
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
      },
    
}

const classOptions = [
    {label : 'ECONOMY', value : 'ECONOMY'},
    {label : 'BUSINESS', value : 'BUSINESS'}
]
export {layout, validateMessages,classOptions};