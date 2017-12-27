'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.handleAction = _this.handleAction.bind(_this);
    _this.state = {
      options_render: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOption',
    value: function handleDeleteOption(option_remove) {
      this.setState(function (prevState) {
        return {
          options_render: prevState.options_render.filter(function (option) {
            return option_remove !== option;
          })
        };
      });
    }
  }, {
    key: 'handleAction',
    value: function handleAction() {
      var rand_num = Math.floor(this.state.options_render.length * Math.random());
      var action_selected = this.state.options_render[rand_num];
      alert(action_selected);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(new_option) {

      if (!new_option) {
        return 'Enter a valid option.';
      } else if (this.state.options_render.indexOf(new_option) > -1) {
        return 'This option already exists.';
      }

      this.setState(function (prevState) {
        return {
          options_render: prevState.options_render.concat(new_option)
        };
      });
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      var _this2 = this;

      alert('All options are going to be deleted');
      this.setState(function () {
        return { options_render: _this2.props.options };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision Test';
      var subtitle = 'Take Action!';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Action, {
          hasOptions: this.state.options_render.length > 0,
          handleAction: this.handleAction
        }),
        React.createElement(Options, {
          options: this.state.options_render,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handleAction,
        disabled: !props.hasOptions },
      'What is the best decision to take?'
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.option,
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          props.handleDeleteOption(props.option);
        } },
      'x'
    )
  );
};

var Options = function Options(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All options'
    ),
    React.createElement(
      'p',
      null,
      'Here should be some options for render like:'
    ),
    React.createElement(
      'ul',
      null,
      props.options.map(function (opt, index) {
        return React.createElement(
          'li',
          { key: index },
          React.createElement(Option, {
            handleDeleteOption: props.handleDeleteOption,
            option: opt })
        );
      })
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var new_option = e.target.elements.option_add.value.trim();
      var error = this.props.handleAddOption(new_option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option_add' }),
          React.createElement(
            'button',
            null,
            'This should add an Option for render'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: [] }), document.getElementById('app'));
