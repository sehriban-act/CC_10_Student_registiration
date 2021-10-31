const tbody = document.querySelector('tbody');
console.log(tbody);

const createPerson = (stNr, firstName, lastName, location, path) => {
  return {
    stNr,
    firstName,
    lastName,
    location,
    path
  };
};

const array = ['C1234 - John Doe, London, Full-Stack', 'C2345 - Jane Doe, London, Data-Science', 'C2346 - Mary Ann, Paris, AWS-Devops', 'C2347 - Adam Smith, Texas, AWS-Devops', 'C2444 - Michael Great, Arizona, Full-Stack', 'C2555 - William Cash, Manchester, Data-Science', 'C2455 - Patrick Jane, Madrid, Full-Stack'];

const people = [];

array.forEach(item => {
  let stNr = item.split(',')[0].split('-')[0].trim();
  let firstName = item.split(',')[0].split('-')[1].trim().split(' ')[0];
  let lastName = item.split(',')[0].split('-')[1].trim().split(' ')[1];
  let location = item.split(',')[1].trim();
  let path = item.split(',')[2].trim();
  people.push(createPerson(stNr, firstName, lastName, location, path));
});

people.forEach(person => {
  tbody.innerHTML += `<tr>
                        <td>${person.stNr}</td>
                        <td>${person.firstName}</td>
                        <td>${person.lastName}</td>
                        <td>${person.location}</td>
                        <td>${person.path}</td>
                      </tr>`;
});