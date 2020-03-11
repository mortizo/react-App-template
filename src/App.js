import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      account:'0xAAFFFFXXXDFEEEG',
      textValue01:'',
      data:'void'
    }
  }

  functionData = async (event) => {
    this.state.data = this.state.textValue01
    alert('The data was submitted: ' + this.state.data);
    event.preventDefault();
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div>
        <Navbar className=" bg-light justify-content-between">
          <Navbar.Brand href="http://www.ups.edu.ec">React-solidity-app</Navbar.Brand>
          <Navbar.Text>
            Account: {this.state.account}
          </Navbar.Text>
        </Navbar>

        <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">   
              <Form.Control id="textValue01" name="textValue01" type="text" 
                    placeholder="Text Here !" 
                    value={this.state.textValue01}
                    onChange={this.onChange.bind(this)} />
              <Button variant="primary" type="submit" onClick={this.functionData} >Send</Button> 
            </div>
          </main>
          </div>  
        </div>

      </div>
    );
  }


}

export default App;
