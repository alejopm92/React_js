

var myP = 'This is my New Change JSX Write it by myself LOLZ';
var myTittle = 'Indecision App Dinamic Tittle'

var whishList = {
  title:'This is the list of my propurse for 2018:',
  l1: 'React SR' ,
  l2: 'Travel A LOT',
  l3: 'PIMP BETTER'
}
var opt1 = {
  parameter: 'Buy a DSLR CAM'
};

var opt2 = {
  parameter: 'Get a lot better'
};

var opt3 = {
  parameter :'Be a better soft developer'
};

var options = [opt1, opt2, opt3];

function betterList() {
    if (options.length > 0){
      return (
        <ol><h4>Better things to do 2018</h4>
          {options.map((opt, index) => (
            <li key={index}>{opt.parameter}</li>
          ))}
        </ol>
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

var template = (
  <div>
    <h1>{myTittle}</h1>
    <p>{myP}</p>
    <ol>
      <ol>{whishList.title ? getTitle('lol') : getTitle() }
        {getList()}
      </ol>
    </ol>
    {betterList()}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
