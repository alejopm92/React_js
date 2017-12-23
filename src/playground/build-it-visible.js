
const appRoot = document.getElementById('app');

let showDetails = false;

const visibility = () => {
  showDetails = !showDetails;
  reRenderApp();
};

const showedDetails = () => {
  return (
    <div>
      <button onClick={visibility}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div>
          <p>Hey my algorithmia Sucks, and here are more details that I want you to know!</p>
        </div>
      )}
    </div>
  );
};

const reRenderApp = () => {
  const template = (
    <div>
      <h1>Visible Toogle</h1>
      {showedDetails()}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

reRenderApp();
