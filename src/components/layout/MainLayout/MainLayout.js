import React from 'react';
import PropTypes from 'prop-types';

class MainLayout extends React.Component {
  render() {

    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
