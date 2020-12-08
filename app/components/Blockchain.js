// import EmbarkJS from 'Embark/EmbarkJS';
import TransactionContract from '../../embarkArtifacts/contracts/TransactionContract';
import React from 'react';
import {Form, FormGroup, Input, HelpBlock, Button, FormText} from 'reactstrap';

class Blockchain extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valueIn: 10,
      balanceGet: "",
      accountDest: "0xf6D5C6D500caC10EE7e6eFb5C1B479CFb789950a",
      logs: []
    };
  }

  handleChangeIn(e) {
    this.setState({ valueIn: e.target.value });
  }

  handleChangeTr(e) {
    this.setState({ accountDest: e.target.value });
  }

  checkEnter(e, func) {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    func.apply(this, [e]);
  }

  async addToBalance(e) {
    e.preventDefault();
    var valueToIn = parseInt(this.state.valueIn, 10);

    TransactionContract.methods.incrementBalance().send({value: valueToIn});
    this._addToLog("TransactionContract.methods.incrementBalance().send({value: valueToIn})");
  }

  async transferirBalance(e) {
    e.preventDefault();
    var value = this.state.accountDest;

    TransactionContract.methods.transferEthers(value).send();
    this._addToLog("TransactionContract.methods.transferEthers(value).send()");
  }

  getBalance(e) {
    e.preventDefault();

    TransactionContract.methods.getBalance().call().then(_value => this.setState({ balanceGet: _value }));
    this._addToLog("TransactionContract.methods.getBalance(console.log)");
  }

  _addToLog(txt) {
    this.state.logs.push(txt);
    this.setState({ logs: this.state.logs });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 div-form">
            <React.Fragment>
              <h3> 1. Modificar valores en la Blockchain</h3>
              <Form onKeyDown={(e) => this.checkEnter(e, this.setValue)}>
                <h4>Incrementar balance</h4>
                <FormGroup className="inline-input-btn">
                  <Input
                    type="text"
                    defaultValue={this.state.valueIn}
                    onChange={(e) => this.handleChangeIn(e)}/>
                  <Button color="primary" onClick={(e) => this.addToBalance(e)}>Ingresar</Button>
                  <FormText color="muted">Once you set the value, the transaction will need to be mined and then the value will be updated
                    on the blockchain.</FormText>
                </FormGroup>
              </Form>

              <h3> 2. Obtener saldo actual</h3>
              <Form>
                <FormGroup>
                  <Button color="primary" onClick={(e) => this.getBalance(e)}>Obtener saldo</Button>
                  <FormText color="muted">Click the button to get the current value. The initial value is 100.</FormText>
                  {this.state.balanceGet && this.state.balanceGet !== 0 &&
                  <p>Current value is <span className="value font-weight-bold">{this.state.balanceGet}</span></p>}
                </FormGroup>
              </Form>
              <Form onKeyDown={(e) => this.checkEnter(e, this.setValue)}>
                <h4>3. Transferir balance</h4>
                <FormGroup className="inline-input-btn">
                  <Input
                    type="text"
                    defaultValue={this.state.accountDest}
                    onChange={(e) => this.handleChangeTr(e)}/>
                  <Button color="primary" onClick={(e) => this.transferirBalance(e)}>Transferir</Button>
                  <FormText color="muted">Once you set the value, the transaction will need to be mined and then the value will be updated
                    on the blockchain.</FormText>
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
