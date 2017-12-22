'use strict';

var myP = 'This is my New Change JSX Write it by myself LOLZ';
var myTittle = 'Indecision App Dinamic Tittle';

var whishList = {
  title: 'This is the list of my propurse for 2018:',
  l1: 'React SR',
  l2: 'Travel A LOT',
  l3: 'PIMP BETTER'
};

function getList(opt) {
  if (opt == 1) {
    return React.createElement(
      'li',
      null,
      whishList.l1
    );
  } else if (opt == 2) {
    return React.createElement(
      'li',
      null,
      whishList.l2
    );
  } else if (opt == 3) {
    return React.createElement(
      'li',
      null,
      whishList.l3
    );
  };
}

function getTitle(opt) {
  if (opt) {
    return React.createElement(
      'h4',
      null,
      whishList.title
    );
  } else {
    return React.createElement(
      'h5',
      null,
      'Nonsense'
    );
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    myTittle
  ),
  React.createElement(
    'p',
    null,
    myP
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'ol',
      null,
      whishList.title ? getTitle('lol') : getTitle(),
      getList(1),
      getList(2),
      getList(3),
      getList(4)
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
