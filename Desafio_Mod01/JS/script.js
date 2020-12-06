window.addEventListener('load', start);

let tabResult = null;
let tabStatistic = null;
let search = null;
let search_button = null;

let result_title = null;
let statistic_title = null;

//Result Tab
let allUsers = [];

//Statistic Tab
let countMen = 0;
let countWomen = 0;
let sumAge = 0;
let averageAge = 0;

let numberFormat = null;

function start() {
  console.log('JS done');
  tabResult = document.querySelector('#result');
  tabStatistic = document.querySelector('#statistic');

  search = document.querySelector('#search');
  search.addEventListener('keyup', checkInputField);

  search_button = document.querySelector('#search-button');
  search_button.addEventListener('click', () => searchUsers(search.value));

  result_title = document.querySelector('#result-title');
  statistic_title = document.querySelector('#statistic-title');

  numberFormat = Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
  fetchUsers();
}

async function fetchUsers() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json();
  allUsers = json.results
    .map((user) => {
      return {
        name: {
          first: user.name.first,
          last: user.name.last,
        },
        picture: user.picture,
        dob: { age: user.dob.age },
        gender: user.gender,
      };
    })
    .sort((a, b) => {
      // console.log(a);
      return a.name.first.localeCompare(b.name.first);
    });
  // console.log(allUsers);
}

function checkInputField(event) {
  const searchValue = event.target.value;

  if (searchValue.length > 0) {
    search_button.removeAttribute('disabled');
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      searchUsers(searchValue);
    }
  } else {
    search_button.setAttribute('disabled', 'disabled');
  }
}

function searchUsers(inputValue) {
  const inputLower = inputValue.toLowerCase();

  clearData();
  const searchResult = allUsers.filter((user) => {
    const { first, last } = user.name;
    if (
      first.toLowerCase().includes(inputLower) ||
      last.toLowerCase().includes(inputLower)
    )
      return user;
  });
  if (searchResult != null && searchResult.length > 0) {
    renderResult(searchResult);
  } else {
    result_title.innerText = `Nenhum usuário filtrado`;
    tabResult.innerText = '';

    statistic_title.innerText = `Nada a ser exibido`;
    tabStatistic.innerHTML = '';
  }
}

function renderResult(result) {
  console.log(result);
  let usersHTML = '<div>';

  result.map((user) => {
    if (user.gender === 'male') {
      countMen += 1;
    } else {
      countWomen += 1;
    }

    const userHTML = `
    <div class='user'>
      <div>
        <img src="${user.picture.large}" />     
      </div>
      <div>
        <br>${user.name.first} ${user.name.last}, 
        ${user.dob.age} anos</br>
      </div>
    </div>`;
    usersHTML += userHTML;
  });

  calcAge(result);

  result_title.innerText = `${result.length} usuário(s) encontrado(s)`;
  statistic_title.innerText = `Estatísticas`;

  usersHTML += '</div>';
  tabResult.innerHTML = usersHTML;

  renderStatistic();
}
function renderStatistic() {
  let usersHTML = `<br> Sexo Masculino: ${formatNumber(countMen)}
  <br> Sexo Feminino: ${countWomen}
  <br> Soma das idades: ${formatNumber(sumAge)}
  <br> Média das idades: ${formatNumber(averageAge)}
  `;

  // console.log(usersHTML);
  tabStatistic.innerHTML = usersHTML;
}

function calcAge(userList) {
  sumAge = userList.reduce((acc, cur) => {
    return acc + cur.dob.age;
  }, 0);
  console.log(sumAge);

  averageAge = sumAge / userList.length;
  console.log(averageAge);
}

function clearData() {
  countMen = 0;
  countWomen = 0;
  sumAge = 0;
  averageAge = 0;
}

function formatNumber(number) {
  return numberFormat.format(number);
}