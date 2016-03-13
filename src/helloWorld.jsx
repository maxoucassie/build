import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (<div>
            Hello {this.props.name} !
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