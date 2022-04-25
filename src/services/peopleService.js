const fakeData = [
  {id: '1', name: 'Teste 1', vocation: 'Desenvolvedor', cep: '12913045', picture: 'http://img1.wikia.nocookie.net/__cb20140108234225/walkingdead/images/thumb/8/87/Anonymous_silhouette.jpg/500px-Anonymous_silhouette.jpg'},
  {id: '2', name: 'Teste 2', vocation: 'QA', cep: '01001000', picture: 'https://svgsilh.com/svg/295387.svg'},
  {id: '3', name: 'Teste 3', vocation: 'Designer', cep: '12915000', picture: 'https://media.istockphoto.com/vectors/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-vector-id965743490?k=6&m=965743490&s=170667a&w=0&h=RT-mOJ6--1NlwHTeXujMW3eC5dxCajHdaR6gEJi2jvU='},
  {id: '4', name: 'Teste 4', vocation: 'Test Manager', cep: '01311000', picture: 'https://svgsilh.com/svg/295387.svg'},
];

export const initLocalStorage = () => {
  let people = localStorage.getItem('people');

  if (!people) {
    localStorage.setItem('people', JSON.stringify(fakeData));
    people = fakeData;
  } else {
    people = JSON.parse(people);
  }

  return people;
};

export const getPersonByID = (id) => {
  const people = initLocalStorage();
  const user = people.find((p) => p.id == id);
  return user;
};
