
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

  componentDidMount() {
    try {
      const json_count = localStorage.getItem('count');
      const count = parseInt(JSON.parse(json_count));
      const count_valid = isNaN(count);
      if (!count_valid){
          this.setState(() =>({count}));
      }
    } catch (e) {

    }
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){
      const json_count = JSON.stringify(this.state.count)
      localStorage.setItem('count',json_count);
      console.log('Component did update');
      console.log(json_count);
    }
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
