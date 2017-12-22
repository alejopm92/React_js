

var myP = 'This is my New Change JSX Write it by myself LOLZ';
var myTittle = 'Indecision App Dinamic Tittle'

var whishList = {
  title:'This is the list of my propurse for 2018:',
  l1: 'React SR' ,
  l2: 'Travel A LOT',
  l3: 'PIMP BETTER'
}

function getList(opt) {
  if (opt ==1){
      return <li>{whishList.l1}</li>;
  }
  else if (opt ==2){
      return <li>{whishList.l2}</li>;
  }
  else if (opt ==3){
      return <li>{whishList.l3}</li>;
    };
  }

function getTitle(opt) {
  if (opt){
    return <h4>{whishList.title}</h4>
  }
  else {
    return <h5>Nonsense</h5>
  }

}

var template = (
  <div>
    <h1>{myTittle}</h1>
    <p>{myP}</p>
    <ol>
      <ol>{whishList.title ? getTitle('lol') : getTitle() }
        {getList(1)}
        {getList(2)}
        {getList(3)}
        {getList(4)}
      </ol>
    </ol>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
