// Init UI and github class
const github = new Github;
const ui = new UI;


const searchBtn = document.querySelector('#search-btn');
const searchUserInput = document.querySelector('#searchUser');

searchUserInput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        // Always remove invalid class
        searchUserInput.classList.remove("is-invalid");
        // Always clear the profile and repos first to start afresh 
        ui.clearProfile();
        ui.clearRepos();
        if(searchUserInput.value !== '') {
            // make http call
            github.getUser(searchUserInput.value)
                    .then(data => {
                        if(data.profile.message === "Not Found") {
                            // Show Alert
                            ui.showAlert('User not found', 'alert alert-danger')
                        } else {
                            console.log(data.profile);
                            ui.showProfile(data.profile);
                            ui.showRepo(data.repos);
                        }
                    })
        } else {
            // Add invalid class to show alert message in form
            searchUserInput.classList.add("is-invalid");
        }
        // Empty search input
        searchUserInput.value = '';
        // remove focus from the input field
        searchUserInput.blur();
    }
})

searchBtn.addEventListener('click', (e) => {
    // Always clear the profile and repos first to start afresh
    ui.clearProfile();
    ui.clearRepos();
    if(searchUserInput.value !== '') {
        // Always remove invalid class
        searchUserInput.classList.remove('is-invalid');
        // make http call
        github.getUser(searchUserInput.value)
                .then(data => {
                    if(data.profile.message === "Not Found") {
                        // Show Alert
                        ui.showAlert('User not found', 'alert alert-danger');
                    } else {
                        console.log(data.profile);
                        ui.showProfile(data.profile);
                        ui.showRepo(data.repos);
                    }
                })
    } else {
        // Add invalid class to show alert message in form
        searchUserInput.classList.add('is-invalid');
    }
    // Empty search input
    searchUserInput.value = '';
    // remove focus from the button
    searchBtn.blur();
    e.preventDefault();
})
