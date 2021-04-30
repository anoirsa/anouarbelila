import unfetch from "unfetch";
import fetch from 'unfetch'

const dataFetch =  fetch("http://e1800954timo.herokuapp.com/api/passengers");

const deleteFetch = (id) => fetch(`http://e1800954timo.herokuapp.com/api/passengers/${id}`, {
    method : "DELETE",
    //headers : {"Content-Type" : "application/json"},

});

export {dataFetch,deleteFetch}

