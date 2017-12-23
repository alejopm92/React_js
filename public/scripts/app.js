'use strict';

var myP = 'This is my New Change JSX Write it by myself LOLZ';
var myTittle = 'Indecision App Dinamic Tittle';

var whishList = {
  title: 'This is the list of my propurse for 2018:',
  l1: 'React SR',
  l2: 'Travel A LOT',
  l3: 'PIMP BETTER'
};
var opt1 = {
  parameter: 'Buy a DSLR CAM'
};

var opt2 = {
  parameter: 'Get a lot better'
};

var opt3 = {
  parameter: 'Be a better soft developer'
};

var options = [opt1, opt2, opt3];

function betterList() {
  if (options.length > 0) {
    return React.createElement(
      'ol',
      null,
      React.createElement(
        'h4',
        null,
        'Better things to do 2018'
      ),
      options.map(function (opt, index) {
        return React.createElement(
          'li',
          { key: index },
          opt.parameter
        );
      })
    );
  }
};

function getList() {
  if (Object.keys(whishList).length > 0) {
    return Object.keys(whishList).map(function (key, index) {
      return React.createElement(
        'li',
        { key: index },
        whishList[key]
      );
    });
  }
};

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
      getList()
    )
  ),
  betterList()
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
