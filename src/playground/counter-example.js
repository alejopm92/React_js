
let count = 0;
const sumOne = () => {
  count++;
  reRenderApp();
  console.log("plusOne");
};
const minusOne = () => {
  count--;
  reRenderApp();
  console.log("minusOne");
};
const resetFn = ()  => {
  count=0;
  reRenderApp();
  console.log("resetFn");
};

let appRoot = document.getElementById('app');

const reRenderApp = () => {
    const templateTwo = (
      <div>
        <h1>New App</h1>
        <h2>Count: {count}</h2>
        <button onClick={sumOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetFn}>Reset</button>
      </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

reRenderApp();
