
const appRoot = document.getElementById('app');

let showedDetails = '';

const hideDetails = () => {
  showedDetails = '';
  reRenderApp();
};

const startDetails = () => {
  showedDetails = 'There is some details that I want you to know!';
  reRenderApp();
};

let showDetais = () => {
  if(showedDetails) {
    return (
      <div>
        <button onClick={hideDetails}> Hide Details</button>
        <p>{showedDetails}</p>
      </div>
    );
  }
  else {
    return(
      <div>
        <button onClick={startDetails}>Show Details</button>
      </div>
    );
  }
};

const reRenderApp = () => {
  const template = (
    <div>
      <h1>Visible Toogle</h1>
      {showDetais()}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

reRenderApp();
