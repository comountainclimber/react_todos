var MyComponent = React.createClass({displayName: "MyComponent",
  render: function() {
    return ( 
      React.createElement("div", null, 
      React.createElement("h1", null, " ", this.props.text), 
      React.createElement("p", null, " ", this.props.children, " ")
      )
    );
  }
})

React.render( React.createElement("div", null, 
              React.createElement(MyComponent, {text: "Hello World!"}, 
                "This is a hello!"
              ), 
              React.createElement(MyComponent, {text: "How are you?"})
              ),
             document.getElementById('container'))
