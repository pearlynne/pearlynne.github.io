import React from 'react';
import PropTypes from 'prop-types';
function Body({ title, children }) {
  return (
    <div className="main-content">
      {title && <div className="section-title">{title}</div>}
      {children}
    </div>
  );
}

export default Body;

Body.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};