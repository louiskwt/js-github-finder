// Init UI and github class
const github = new Github;
const ui = new UI;


const searchBtn = document.querySelector('#search-btn');
const searchUserInput = document.querySelector('#searchUser');

searchUserInput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        ui.clearProfile();
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
                        }
                    })
        }
        // Empty search input
        searchUserInput.value = '';
        // remove focus from the input field
        searchUserInput.blur();
    }
})

searchBtn.addEventListener('click', (e) => {
    ui.clearProfile();
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
                    }
                })
    }
    // Empty search input
    searchUserInput.value = '';
    // remove focus from the button
    searchBtn.blur();
    e.preventDefault();
})
