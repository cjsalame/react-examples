// Import the React and ReacDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component

const App = () => {

  const buttonText = {text: "Click Me"};
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = "Enter name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"/>
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take a React component and show it on the browser

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
