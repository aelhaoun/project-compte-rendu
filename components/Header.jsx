import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';


class Header extends Component {


  render() {
    return (
      <header className="header">
          <AppBar title="Meeting list" />
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
