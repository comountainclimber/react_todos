var MyComponent = React.createClass({displayName: "MyComponent",
  render: function() {
    return ( 
      React.createElement("div", null, " My Component ")
    );
  }
});

React.render(React.createElement(MyComponent, null), document.getElementById('container'));
