
let appRoot = document.getElementById('app');
const myP = 'This is my New Change JSX Write it by myself LOLZ';
const myTittle = 'Indecision App Dinamic Tittle'

const whishList = {
  title:'This is the list of my propurse for 2018:',
  l1: 'React SR' ,
  l2: 'Travel A LOT',
  l3: 'PIMP BETTER'};

let options = [
  'Buy a DSLR CAM',
  'Get a lot better',
  'Be a better soft developer'
];

function betterList() {
    if (options.length > 0){
      return (
        <ul><h4>Better things to do 2018</h4>
          {options.map((opt, index) => (
            <li key={index}>{opt}</li>
          ))}
        </ul>
      );
    }
};

function getList() {
  if (Object.keys(whishList).length > 0){
      return (
        Object.keys(whishList).map((key, index) => (
          <li key={index}>{whishList[key]}</li>
        ))
      );
    }
  };

function getTitle(opt) {
  if (opt){
    return <h4>{whishList.title}</h4>
  }
  else {
    return <h5>Nonsense</h5>
  }

}

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form Submitted');
  const newWhish = e.target.elements.whish.value;
  if (newWhish){
    options.push(newWhish);
    e.target.elements.whish.value = '';
    reRenderApp();
  }
};

const removeAll = () => {
  options = [];
  reRenderApp();
};

const reRenderApp = () => {
  let template = (
    <div>
      <h1>{myTittle}</h1>
      <p>{myP}</p>
      <ol>{whishList.title ? getTitle('lol') : getTitle() }
        {getList()}
      </ol>
      <div>
        <button onClick={removeAll}>Clear all better list</button>
      </div>
      {betterList()}
      <form onSubmit={onFormSubmit}>
        <input type='text' name='whish'></input>
        <button>Add a new Whish</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

};

reRenderApp();
