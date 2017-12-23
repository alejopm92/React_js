'use strict';

var appRoot = document.getElementById('app');

var showDetails = false;

var visibility = function visibility() {
  showDetails = !showDetails;
  reRenderApp();
};

var showedDetails = function showedDetails() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: visibility },
      showDetails ? 'Hide Details' : 'Show Details'
    ),
    showDetails && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey my algorithmia Sucks, and here are more details that I want you to know!'
      )
    )
  );
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
    showedDetails()
  );

  ReactDOM.render(template, appRoot);
};

reRenderApp();
