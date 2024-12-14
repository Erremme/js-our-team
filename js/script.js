// FUNCTION
function createCardMember(member){
  const {name, role , image, email } = member;
  const card = `
  <div  class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
              
            <div class="col-md-4 ">
                <img src="${image}" class="img-fluid rounded-start" alt="${name}">
            </div>
            <div class="col-md-8 bg-dark text-white ">
                <div class="card-body">
                    <h5 class="card-title ms-text-bold">${name}</h5>
                    <p class="card-text ms-text-fred">${role}</p>
                    <a class="card-text ms-text-fred">${email}</small></a>
                  </div>
            </div>
        </div>
      </div>`;
  return card;
}


//VARIABLES
let teamItems= "";

//MEMBERS ARRAY
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    image: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    image: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    image: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    image: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    image: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    image: "img/female3.png"
  }
];

//DOM ELEMENTS
const teamContainerElm = document.querySelector(".team-container")
const formTeamElm = document.getElementById("form-team")
const nameElm = document.getElementById("name")
const roleElm = document.getElementById("role")
const emailElm = document.getElementById("email")
const imageElm = document.getElementById("image")



//PAGE LOAD
for(let i = 0; i < teamMembers.length; i++){
    const {name, role, image , email} = teamMembers[i]
    teamItems += createCardMember(teamMembers[i])
}

teamContainerElm.innerHTML  = teamItems



//DOM EVENT
formTeamElm.addEventListener("submit", function(event){
  event.preventDefault();


  const name = nameElm.value;
  const role = roleElm.value;
  const email = emailElm.value;
  const image = imageElm.value;


const newMember ={
  name,
  role,
  email,
  image
};

teamMembers.push(newMember);

const newCard = createCardMember(newMember)

teamContainerElm.innerHTML += newCard;


});


