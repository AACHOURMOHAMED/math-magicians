import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
  const { output } = props;
  return <div className="text">{output}</div>;
};

Result.defaultProps = {
  output: '0',
};

Result.propTypes = {
  output: PropTypes.string,
};

export default Result;
