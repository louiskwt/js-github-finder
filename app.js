// Init UI and github class
const github = new Github;
const ui = new UI;


const searchBtn = document.querySelector('#search-btn');
const searchUserInput = document.querySelector('#searchUser');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(searchUserInput.value !== '') {
        // make http call
        github.getUser(searchUserInput.value)
                .then(data => {
                    ui.showProfile(data.profile);
                })
    }
})