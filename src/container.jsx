import React from 'react';
import HelloWorld from './helloWorld';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: 'You'
    }
  }

  componentDidMount() {
    fetch('/hello', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response);
        }
        return response.json();
      })
      .then(json => this.setState(json));
  }

  render() {
    return (<HelloWorld name={this.state.string} />);
  }
}


export default Container;