class VisibilityToogle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisible = this.handleVisible.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleVisible () {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visible Toogle</h1>
        <button onClick={this.handleVisible}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility &&(
          <div>
            <p>My algoritmia is getting better i think. :/ </p>
          </div>
        )}
      </div>
    );
  }
}

//
const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToogle />, appRoot);
