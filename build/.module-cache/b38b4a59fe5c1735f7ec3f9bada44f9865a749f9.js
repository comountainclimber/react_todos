var Checkbox = React.createClass({displayName: "Checkbox",
  getInitialState: function() {
    return {checked: false}
  },
  handleCheck: function() {
    this.setState({checked: !this.state.checked})
  },
  render: function() {
    var msg;
    if(this.state.checked) {
      msg = "The box is checked bitch"
    }
    // else {
    //   "The box is not checked mon."
    // }
    return(
      React.createElement("div", null, 
        React.createElement("input", {type: "checkbox", onChange: this.handleCheck}), 
      React.createElement("p", null, msg)
      )
      )
  }
})

React.render(React.createElement(Checkbox, null),
  document.getElementById('container'))