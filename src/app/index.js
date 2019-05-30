import React from 'react';
import { PrerenderedComponent } from 'react-prerendered-component';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: this.props.counter || 0};
  }
  render() {
    return (
      <PrerenderedComponent
        restore={(el) => {
          console.log('restore fired');
          this.setState({counter: +el.querySelector('i').innerHTML});
        }}
        live={!!this.state.counter}
      >
        <p>Am I alive?</p>
        <i>{this.state.counter}</i>
      </PrerenderedComponent>
    );
  }
}
