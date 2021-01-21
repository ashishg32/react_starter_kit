import React, {Component} from 'react';
import { Alert } from 'react-bootstrap';

class AlertMessage extends Component {
  constructor(props){
    super(props);
    this.state = {
        msg: props.msg || '',
        showMsg: props.msg || false,
        type: props.type
    }
    this.onDismissFn = this.onDismissFn.bind(this);
  }

  onDismissFn(){
    // this.setState({msg: '', showMsg: false});
    console.log('called');
  }

  render(){
    return(
      <Alert bsStyle={this.state.type} onDismiss={this.onDismissFn}>
        <h4>{this.state.msg}</h4>
      </Alert>
    )
  }
}

export default AlertMessage;
