'use strict';

var appRoot = document.getElementById('app');

var showedDetails = '';

var hideDetails = function hideDetails() {
  showedDetails = '';
  reRenderApp();
};

var startDetails = function startDetails() {
  showedDetails = 'There is some details that I want you to know!';
  reRenderApp();
};

var showDetais = function showDetais() {
  if (showedDetails) {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: hideDetails },
        ' Hide Details'
      ),
      React.createElement(
        'p',
        null,
        showedDetails
      )
    );
  } else {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: startDetails },
        'Show Details'
      )
    );
  }
};

var reRenderApp = function reRenderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visible Toogle'
    ),
    showDetais()
  );

  ReactDOM.render(template, appRoot);
};

reRenderApp();
