import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';


class Header extends Component {


  render() {
    return (
      <header className="header">
          <AppBar title="Compte Rendu du projet" />
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
