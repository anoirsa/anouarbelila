import React from 'react';
import ReactDOM from 'react-dom'
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import FlightList from '../Components/FlightList'
import matchMediaPolyfill from 'mq-polyfill'
import Flights from '../Components/Flights';



matchMediaPolyfill(window)

window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height
    }).dispatchEvent(new this.Event('resize'))
  }

configure({adapter : new Adapter()});


describe("Testing Flight list component" , () => {
    
    it("Should render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<FlightList /> , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it("Flight component render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Flights /> , div)
        ReactDOM.unmountComponentAtNode(div)
    })
   

})