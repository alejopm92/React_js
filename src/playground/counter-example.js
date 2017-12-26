
class Counter extends React.Component {
  constructor (props){
    super(props);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
    this.state = {
      count: 0
    };
  }
  handleMinusOne (){
    console.log('Minus 1');
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      };
    });
  }

  handlePlusOne (){
    console.log('Plus 1');
    this.setState((prevState) => {
      return {
        count: prevState.count +1
      };
    });
  }

  handleResetAll (){
    console.log('Reset');
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render () {
    return (
      <div>
        <Header counter={this.state.count}/>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleResetAll}>reset</button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>Count: {this.props.counter}</h1>
    );
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);
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
