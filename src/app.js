

const myP = 'This is my New Change JSX Write it by myself LOLZ';
const myTittle = 'Indecision App Dinamic Tittle'

const whishList = {
  title:'This is the list of my propurse for 2018:',
  l1: 'React SR' ,
  l2: 'Travel A LOT',
  l3: 'PIMP BETTER'};

const options = {
  opt1:'Buy a DSLR CAM',
  opt2:'Get a lot better',
  opt3:'Be a better soft developer'};

function betterList() {
    if (options){
      return (
        <ul><h4>Better things to do 2018</h4>
          {Object.keys(options).map((opt, index) => (
            <li key={index}>{options[opt]}</li>
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

let template = (
  <div>
    <h1>{myTittle}</h1>
    <p>{myP}</p>
    <ol>{whishList.title ? getTitle('lol') : getTitle() }
      {getList()}
    </ol>
    {betterList()}
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
