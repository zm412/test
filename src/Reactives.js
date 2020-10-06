const Auth = require('./components/Auth');
const React = require('react');
const ReactDOM = require('react-dom');

module.exports = () => {
  //ReactDOM.render(<Test />, document.getElementById('contentIndex'))
  ReactDOM.render(<Auth />, document.getElementById('authTest'))

}
