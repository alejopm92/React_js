'use strict';

var appRoot = document.getElementById('app');
var myP = 'This is my New Change JSX Write it by myself LOLZ';
var myTittle = 'Indecision App Dinamic Tittle';

var whishList = {
  title: 'This is the list of my propurse for 2018:',
  l1: 'React SR',
  l2: 'Travel A LOT',
  l3: 'PIMP BETTER' };

var options = ['Buy a DSLR CAM', 'Get a lot better', 'Be a better soft developer'];

function betterList() {
  if (options.length > 0) {
    return React.createElement(
      'ul',
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
          opt
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

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log('Form Submitted');
  var newWhish = e.target.elements.whish.value;
  if (newWhish) {
    options.push(newWhish);
    e.target.elements.whish.value = '';
    reRenderApp();
  }
};

var removeAll = function removeAll() {
  options = [];
  reRenderApp();
};

var reRenderApp = function reRenderApp() {
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
      whishList.title ? getTitle('lol') : getTitle(),
      getList()
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: removeAll },
        'Clear all better list'
      )
    ),
    betterList(),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'whish' }),
      React.createElement(
        'button',
        null,
        'Add a new Whish'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

reRenderApp();
