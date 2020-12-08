// import EmbarkJS from 'Embark/EmbarkJS';
import TestContract from '../../embarkArtifacts/contracts/testcontract';
import React from 'react';
import {Form, FormGroup, Input, HelpBlock, Button, FormText} from 'reactstrap';

class Blockchain extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valueSet: 10,
      valueGet: "",
      logs: []
    };
  }

  handleChange(e) {
    this.setState({ valueSet: e.target.value });
  }

  checkEnter(e, func) {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    func.apply(this, [e]);
  }

  async ingresarSaldo(e) {
    e.preventDefault();
    var value = parseInt(this.state.valueSet, 10);

    TestContract.methods.ingresar(value).send();
    this._addToLog("TestContract.methods.ingresar(value).send()");
  }

  async retirarSaldo(e) {
    e.preventDefault();
    var value = parseInt(this.state.valueSet, 10);

    TestContract.methods.retirar(value).send();
    this._addToLog("TestContract.methods.retirar(value).send()");
  }

  getSaldo(e) {
    e.preventDefault();

    TestContract.methods.getSaldo().call().then(_value => this.setState({ valueGet: _value }));
    this._addToLog("TestContract.methods.getSaldo(console.log)");
  }

  _addToLog(txt) {
    this.state.logs.push(txt);
    this.setState({ logs: this.state.logs });
  }

  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 div-form">
            <React.Fragment>
              <h3> 1. Modificar valores en la Blockchain</h3>
              <Form onKeyDown={(e) => this.checkEnter(e, this.setValue)}>
                <h4>Ingresar</h4>
                <FormGroup className="inline-input-btn">
                  <Input
                    type="text"
                    defaultValue={this.state.valueSet}
                    onChange={(e) => this.handleChange(e)}/>
                  <Button color="primary" onClick={(e) => this.ingresarSaldo(e)}>Ingresar</Button>
                  <FormText color="muted">Once you set the value, the transaction will need to be mined and then the value will be updated
                    on the blockchain.</FormText>
                </FormGroup>
                <h4>Retirar</h4>
                <FormGroup className="inline-input-btn">
                  <Input
                    type="text"
                    defaultValue={this.state.valueSet}
                    onChange={(e) => this.handleChange(e)}/>
                  <Button color="primary" onClick={(e) => this.retirarSaldo(e)}>Retirar</Button>
                  <FormText color="muted">Once you set the value, the transaction will need to be mined and then the value will be updated
                    on the blockchain.</FormText>
                </FormGroup>
              </Form>

              <h3> 2. Obtener saldo actual</h3>
              <Form>
                <FormGroup>
                  <Button color="primary" onClick={(e) => this.getSaldo(e)}>Obtener saldo</Button>
                  <FormText color="muted">Click the button to get the current value. The initial value is 100.</FormText>
                  {this.state.valueGet && this.state.valueGet !== 0 &&
                  <p>Current value is <span className="value font-weight-bold">{this.state.valueGet}</span></p>}
                </FormGroup>
              </Form>

              <h3> 3. Llamadas del contrato</h3>
              <p>Javascript calls being made: </p>
              <div className="logs">
                {
                  this.state.logs.map((item, i) => <p key={i}>{item}</p>)
                }
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default Blockchain;
