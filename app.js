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
  ReactDOM.render(JSX,document.getElementById('challenge-node'))

  //Exercise 5
  const JSX = (
    <div className = 'myDiv'>
   
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
  const MyComponent = function() {
    // Change code below this line
  
  
    // Change code above this line
  
  return(
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
      return(
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
              { /* Change code below this line */ }
            
      <ChildComponent/>
        
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
              { /* Change code below this line */ }
        <TypesOfFruit />
              { /* Change code above this line */ }
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
                { /* Change code below this line */ }
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
                        { /* Change code below this line */ }
                <NonCitrus />
                <Citrus />
                        { /* Change code above this line */ }
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
                        { /* Change code below this line */ }
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
        ReactDOM.render(JSX,document.getElementById('challenge-node'))
        // Exercise 12
        const JSX = (
          <div className = 'myDiv'>
         
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
       const MyComponent = function() {
        // Change code below this line
      <div />
      return(
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
      return(
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
              { /* Change code below this line */ }
            
      <ChildComponent/>
        
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
            { /* Change code below this line */ }
      <TypesOfFruit />
            { /* Change code above this line */ }
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
              { /* Change code below this line */ }
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
                      { /* Change code below this line */ }
              <NonCitrus />
              <Citrus />
                      { /* Change code above this line */ }
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
                      { /* Change code below this line */ }
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
                      // Exercise 20
      

      

