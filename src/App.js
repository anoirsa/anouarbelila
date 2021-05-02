//import './index.css'
import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {Layout , Menu , Breadcrumb} from 'antd'
import {BrowserRouter as Router , Route , Switch , Link} from 'react-router-dom';
import { Header } from 'antd/lib/layout/layout';
// import components 
import Flights from './Components/Flights'
import Passengers from './Components/Passengers'
import About from './Components/About';

function App() {
  const {Header , Content , Footer} = Layout;
  const contentStyling = {padding : '0 50px', height : '100vh'}
  const footerStyling = {textAlign : 'center'}
  return (
    <Router>
    <Layout className='layout'>
       
    <Header>
      <div className="logo"/>
     
      <Menu theme = "dark" mode="horizontal" >
        <Menu.Item key ="1"> <Link to="/flights">Flights</Link></Menu.Item>  
       <Menu.Item key="2"> <Link to="/passengers">Passengers </Link></Menu.Item> 
       <Menu.Item key="3"> <Link to="/">About </Link></Menu.Item> 
      </Menu>
      
    </Header>
    <Content style ={contentStyling}>
        <Breadcrumb style={{margin : '16px 0'}}>
        </Breadcrumb>
        
          <Switch>
      <Route  path="/flights" component={Flights}  exact />
      <Route  path = "/passengers" component={Passengers} exact />
      <Route  path = "/" component={About} exact />
      </Switch>
     
      </Content>
  <Footer style={footerStyling} > Anouar Belila : project assignment for Software methods course</Footer>

  </Layout>
  </Router>
    
  );
}

export default App;





/***< **/