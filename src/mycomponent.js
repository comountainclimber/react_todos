var MyComponent = React.createClass({
  render: function() {
    return ( 
      <div> 
      <h1> {this.props.text}</h1>
      <p> {this.props.children} </p>
      </div>
    );
  }
})

React.render( <div>
              <MyComponent text="Hello World!">
                This is a hello!
              </MyComponent>
              <MyComponent text="How are you?"></MyComponent>
              </div>,
             document.getElementById('container'))
