import React from 'react';
import PropTypes from 'prop-types'; //prop-types라이브러리를 PropTypes라는 이름으로 import.

class PropsComponent extends React.Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
