let React = require('react');
let SvgIcon = require('../../svg-icon');

let ActionAccountBalance = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>
      </SvgIcon>
    );
  }

});

module.exports = ActionAccountBalance;