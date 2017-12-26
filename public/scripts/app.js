'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handlePlusOne = _this.handlePlusOne.bind(_this);
    _this.handleResetAll = _this.handleResetAll.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      console.log('Minus 1');
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handlePlusOne',
    value: function handlePlusOne() {
      console.log('Plus 1');
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleResetAll',
    value: function handleResetAll() {
      console.log('Reset');
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { counter: this.state.count }),
        React.createElement(
          'button',
          { onClick: this.handlePlusOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleResetAll },
          'reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        'Count: ',
        this.props.counter
      );
    }
  }]);

  return Header;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(Counter, null), appRoot);
//
// let count = 0;
// const sumOne = () => {
//   count++;
//   reRenderApp();
//   console.log("plusOne");
// };
// const minusOne = () => {
//   count--;
//   reRenderApp();
//   console.log("minusOne");
// };
// const resetFn = ()  => {
//   count=0;
//   reRenderApp();
//   console.log("resetFn");
// };
//
// let appRoot = document.getElementById('app');
//
// const reRenderApp = () => {
//     const templateTwo = (
//       <div>
//         <h1>New App</h1>
//         <h2>Count: {count}</h2>
//         <button onClick={sumOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={resetFn}>Reset</button>
//       </div>
//     );
//
//     ReactDOM.render(templateTwo, appRoot);
// };
//
// reRenderApp();
