let React = require('react');
let SvgIcon = require('../../svg-icon');

let NavigationExpandLess = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
      </SvgIcon>
    );
  }

});

module.exports = NavigationExpandLess;