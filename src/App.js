import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import getWeb3 from './Web3';
import Contract001 from './Contract001';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      account:'',
      contract001:null,
      textValue01:'',
      data:'void'
    }
  }

  async componentWillMount(){
    this.web3 = await getWeb3();
    const _accounts = await this.web3.eth.getAccounts()
    const _datosRed = Contract001.networks[await this.web3.eth.net.getId()]
    const _contract001 =  new this.web3.eth.Contract(Contract001.abi, _datosRed.address)
    this.setState({
      account: _accounts[0],
      contract001: _contract001
    })
    
  }

  functionSetData = async (event) => {
    await this.state.contract001.methods.setData(this.state.textValue01).send({from: this.state.account})
  }

  functionData = async (event) => {
    this.state.data = await this.state.contract001.methods.data().call()
    alert('The data was submitted: ' + this.state.data)
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
                <Button variant="primary" type="submit" onClick={this.functionSetData} > Send </Button> 
                <br></br>
                <Button variant="primary" type="submit" onClick={this.functionData} > Data stored </Button> 
              </div>
            </main>
          </div>  
        </div>

      </div>
    );
  }
}

export default App;
