//Exercise 1
const JSX = <h1>Hello JSX!</h1>
//Exercise 2
const JSX =
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li>hello</li>
      <li>hi</li>
      <li>there</li>
    </ul>
  </div>
//Exercise 3
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>

    <p>Here's a subtitle</p>
    {/*This is a comment */}
  </div>
);
//Exercise 4
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'))

//Exercise 5
const JSX = (
  <div className='myDiv'>

    <h1>Add a class to this div</h1>
  </div>
);
//Exercise 6
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
//Exercise 7
const MyComponent = function () {
  // Change code below this line


  // Change code above this line

  return (
    <div>Completed challenge!</div>
  );
}
//Exercise 8
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )


    // Change code above this line
  }
};
//Exercise 8
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */}

        <ChildComponent />

      </div>
    );
  }
};

{ /* Change code above this line */ }
// Exercise 9
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */}
      <TypesOfFruit />
      { /* Change code above this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */}
        <Fruits />

      </div>
    );
  }
};
{ /* Change code above this line */ }
//Exercise 10
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */}
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */}
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */}
        <Fruits />
        <Vegetables />

      </div>
    );
  }
};
{ /* Change code above this line */ }

//Exercise 11
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'))
// Exercise 12
const JSX = (
  <div className='myDiv'>

    <h1>Add a class to this div</h1>
  </div>
);
// Exercise 13
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
// Exercise 14 
const MyComponent = function () {
  // Change code below this line
  <div />
  return (
    <div>Completed challenge!</div>
  );




}
// Exercise 15
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
};
// Exercise 16
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */}

        <ChildComponent />

      </div>
    );
  }
};
// Exercise 17
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>

    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */}
      <TypesOfFruit />
      { /* Change code above this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */}
        <Fruits />

      </div>
    );
  }
};

{ /* Change code above this line */ }

//Exercise 18
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */}
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */}
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */}
        <Fruits />
        <Vegetables />

      </div>
    );
  }
};
{ /* Change code above this line */ }

// Exercise 19
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        React.DOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
      </div>
    );
  }
};
// Exercise 21
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here

    this.state = {
      name: "Name",
      firstName: 'firstname'
    }

  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
//Exercise 22
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <h1> {this.state.name}</h1>
      </div>
    );
  }
};
{ /* Change code above this line */ }
//Excercise 23
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name

    // Change code above this line
    return (
      <div>
        <h1>{name}</h1>
        { /* Change code below this line */}
      </div>
    );
  }
};
{ /* Change code above this line */ }
//Exercise 24
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

// Change code above this line
//Exercise 25
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
// Exercise 26
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) {
        return { visibility: false };
      } else {
        return { visibility: true };
      }
    });
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
//Exercise 27
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }

  // Change code below this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  };

};


// Change code above this line
//Exercise 28
class ControlledInput extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      input: ''

    };

    // Change code below this line

    this.handleChange = this.handleChange.bind(this);

    // Change code above this line

  }

  // Change code below this line

  handleChange(event) {

    this.setState({

      input: event.target.value

    })

  }

  // Change code above this line

  render() {

    return (

      <div>

        { /* Change code below this line */}

        <input value={this.state.input} onChange={this.handleChange} />

        { /* Change code above this line */}

        <h4>Controlled Input:</h4>

        <p>{this.state.input}</p>

      </div>

    );

  }

};
// Exercise 29
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};
// Excercise 30
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name= {this.state.name}/>
          </div>

    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
        <h1>Hello, my name is:{this.props.name} </h1>
            </div>
    );
  }
};
//Exercise 31
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
//Exercise 33
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
 componentWillMount() {
  console.log('Component being mounted');
}
  render() {
    return <div />
  }
};
    // Change code below this line

    // Change code above this line
    //Exercise 34
    class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
      <h1>Active Users:{ this.state.activeUsers}</h1>
          </div>
    );
  }
}
//Exercise 35
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}


 










