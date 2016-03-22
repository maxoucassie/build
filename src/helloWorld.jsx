import React from 'react';
import './style.scss';

class HelloWorld extends React.Component {
  render() {
    return (<div id="helloWorld">
      <div className="text">
        Hello {this.props.name} !
      </div>
    </div>);
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string
};
HelloWorld.defaultProps = {
  name: 'world'
};


export default HelloWorld;