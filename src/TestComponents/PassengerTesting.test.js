import React from 'react';
import ReactDOM from 'react-dom'
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import matchMediaPolyfill from 'mq-polyfill'
import Passengers from '../Components/Passengers';
import PassengerList from '../Components/PassengerList';

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
        ReactDOM.render(<Passengers /> , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it("Flight component render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<PassengerList /> , div)
        ReactDOM.unmountComponentAtNode(div)
    })
   

})