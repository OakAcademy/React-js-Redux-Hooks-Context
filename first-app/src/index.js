import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const buttonText = { text: 'submit' };

	return(
		<div>
		  <label htmlFor="name" className="label">enter e-mail</label>
		  <input id="name" type="text" />
		  <button style={{ backgroundColor:'red', color:'white' }}>
		  	{ buttonText.text }
		  </button>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)
