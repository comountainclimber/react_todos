var Checkbox = React.createClass({displayName: "Checkbox",
  getInitialState: function() {
    return {checked: true}
  },
  handleCheck: function() {
    this.setState({checked: !this.state.checked})
  },
  render: function() {
    var msg;
    if(this.state.checked) {
      msg = "The box is checked mon."
    }
    else {
      msg = "The box is not checked mon."
    }
    return(
      React.createElement("div", null, 
        React.createElement("input", {type: "checkbox", defaultChecked: this.state.checked, onChange: this.handleCheck}), 
      React.createElement("p", null, msg)
      )
      )
  }
})

React.render(React.createElement(Checkbox, null),
  document.getElementById('container'))