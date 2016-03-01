var Checkbox = React.createClass({
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
      <div>
        <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handleCheck} />
      <p>{msg}</p>
      </div>
      )
  }
})

React.render(<Checkbox/>,
  document.getElementById('container'))