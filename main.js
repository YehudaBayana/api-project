function openNav() {
  document.getElementById('mySidebar').style.width = '250px';
  document.getElementById('main').style.marginRight = '250px';
}

function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginRight = '0';
}

class User {
  constructor(firstName, lastName, age, image, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.image = image;
    this.email = email;
    this.phone = phone;
  }
}

const usersApi = 'https://next.json-generator.com/api/json/get/NJ-UoW2Xq';

function returnFetch() {
  return fetch(usersApi).then((res) => res.json());
}

let tableAndCardsContainer = document.getElementById('tableAndCardsContainer');
let fetchApiResults;
let catchUserClassShow;
let catchTableCreation;
let catchcardsCreation;
let counterForTableNumbers = 1;
let counterForCardId = 0;
let saveOnlyUserCard;
async function createClassShowsOfAllDataInApiAndCreateCards() {
  loader.src =
    'https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif';
  loader.style.display = 'inline';
  try {
    fetchApiResults = await returnFetch();
    fetchApiResults.forEach((userObjectInTheApi) => {
      catchUserClassShow = new User(
        userObjectInTheApi.name.first,
        userObjectInTheApi.name.last,
        userObjectInTheApi.age,
        userObjectInTheApi.picture,
        userObjectInTheApi.email,
        userObjectInTheApi.phone
      );
      console.log(catchUserClassShow);
      catchTableCreation += `<tr><th scope="row">${counterForTableNumbers++}</th>
    <td>${catchUserClassShow.firstName}</td>>
    <td>${catchUserClassShow.lastName}</td>>
    <td>${catchUserClassShow.age}</td>>
    <td>${catchUserClassShow.email}</td>>
    <td>${catchUserClassShow.phone}</td>>
    <tr>`;
      catchcardsCreation += `
    <div class="col" id="userCard${counterForCardId}">
    <div class="card h-100">
      <img
        src="${catchUserClassShow.image}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h4>first name: ${catchUserClassShow.firstName}</h4>
        <h4>last name: ${catchUserClassShow.lastName}</h4>
        <p class="card-text">email: ${catchUserClassShow.email}</p>
        <p class="card-text">age: ${catchUserClassShow.age}</p>
        <p class="card-text">phone: ${catchUserClassShow.phone}</p>
        <button id='dynamicButton' onclick="showCard(${counterForCardId})">for more</button>
      </div>
    </div>
  </div>`;

      saveOnlyUserCard += `
  <div class="container" id="userCard${counterForCardId}">
  <div class="main-body">
  
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
    <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
    <li class="breadcrumb-item active" aria-current="page">User Profile</li>
  </ol>
  </nav>
  <!-- /Breadcrumb -->
  <button id='dynamicButton' onclick="goBack()">go back for home page</button>
  <div class="row gutters-sm">
  <div class="col-md-4 mb-3">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
          <div class="mt-3">
            <h4>John Doe</h4>
            <p class="text-secondary mb-1">Full Stack Developer</p>
            <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            <button class="btn btn-primary">Follow</button>
            <button class="btn btn-outline-primary">Message</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3">
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
          <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
          <span class="text-secondary">https://bootdey.com</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
          <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
          <span class="text-secondary">bootdey</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
          <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
          <span class="text-secondary">@bootdey</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
          <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
          <span class="text-secondary">bootdey</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
          <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
          <span class="text-secondary">bootdey</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="col-md-8">
    <div class="card mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Full Name</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${catchUserClassShow.firstName}
            ${catchUserClassShow.lastName}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Email</h6>
          </div>
          <div class="col-sm-9 text-secondary">
          ${catchUserClassShow.email}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">age</h6>
          </div>
          <div class="col-sm-9 text-secondary">
          ${catchUserClassShow.age}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">phone</h6>
          </div>
          <div class="col-sm-9 text-secondary">
          ${catchUserClassShow.phone}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Address</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            Bay Area, San Francisco, CA
          </div>
        </div>
      </div>
    </div>
    <div class="row gutters-sm">
      <div class="col-sm-6 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
            <small>Web Design</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small>Website Markup</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small>One Page</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small>Mobile Template</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small>Backend API</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
            <small>Web Design</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small>Website Markup</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small>One Page</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small>Mobile Template</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small>Backend API</small>
            <div class="progress mb-3" style="height: 5px">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  `;
      counterForCardId++;
    });
    tableAndCardsContainer.innerHTML += `<div
  id="cardsSecondContainerId"
  class="row row-cols-1 row-cols-md-4 g-4">
  ${catchcardsCreation}
  </div>`;
  } catch (rej) {
  } finally {
    loader.style.display = 'none';
  }
}
createClassShowsOfAllDataInApiAndCreateCards();

let toggleCounter = 0;
function toggleTableCards() {
  if (toggleCounter == 0) {
    tableAndCardsContainer.innerHTML = `
    <table class="table caption-top">
          <caption>
            List of users
          </caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">age</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
            </tr>
          </thead>
          <tbody id="tbodyId">
          ${catchTableCreation}
          </tbody>
        </table>
    `;
    toggleCounter++;
  } else {
    tableAndCardsContainer.innerHTML = `<div
  id="cardsSecondContainerId"
  class="row row-cols-1 row-cols-md-4 g-4">
  ${catchcardsCreation}
  </div>`;
    toggleCounter = 0;
  }
}

function addUserBtn() {
  container1Id.style.top = '0';
}

function cancelAddUserBtn() {
  container1Id.style.top = '-1200px';
}

function createNewUser() {
  let newUser = new User(
    firstName.value,
    lastName.value,
    age.value,
    'sdfdsfsd.jpg',
    email.value,
    phone.value
  );
  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !age.value ||
    !phone.value
  ) {
    alert('you need to fill all feilds');
  } else {
    if (emailConfirm.value === email.value) {
      if (toggleCounter == 0) {
        cardsSecondContainerId.innerHTML += `
    <div class="col">
    <div class="card h-100">
      
      <div class="card-body">
        <h4>first name: ${newUser.firstName}</h4>
        <h4>last name: ${newUser.lastName}</h4>
        <p class="card-text">email: ${newUser.email}</p>
        <p class="card-text">age: ${newUser.age}</p>
        <p class="card-text">phone: ${newUser.phone}</p>
      </div>
    </div>
  </div>`;
        container1Id.style.top = '-1200px';
      } else {
        tbodyId.innerHTML += `<tr><th scope="row">${counterForTableNumbers++}</th>
    <td>${newUser.firstName}</td>>
    <td>${newUser.lastName}</td>>
    <td>${newUser.age}</td>>
    <td>${newUser.email}</td>>
    <td>${newUser.phone}</td>>
    <tr>`;
        container1Id.style.top = '-1200px';
      }
    } else {
      alert('the email confirm is not correct');
    }
  }
}

let saveMyContent = tableAndCardsContainer.innerHTML;
let userCardVar = 'userCard';
function showCard(userId) {
  tableAndCardsContainer.innerHTML = '';
  tableAndCardsContainer.innerHTML = saveOnlyUserCard;
  for (let i = 0; i < fetchApiResults.length; i++) {
    if ('userCard' + userId != 'userCard' + i) {
      document.getElementById('userCard' + i).style.display = 'none';
    }
  }
}

function goBack() {
  toggleTableCards();
}
