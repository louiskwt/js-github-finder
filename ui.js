class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }
    // display profile and ui
    showProfile(user) {
        // handling location info
        if(user.location === null) {
            user.location = 'Location Unknown';
        }
        // handling name info
        if(user.name === null) {
            user.name = 'No user name';
        }
        // handling website/blog info
        if(user.blog === '') {
            user.blog = "User has no website/blog";
        }
        // Date string
        let regex = /T/; // the place I want to cut
        // reformat joining date
        let joinDate = user.created_at;
        joinDate = joinDate.slice(0, joinDate.match(regex).index);
        // reformat update date
        let updateDate = user.updated_at;
        updateDate = updateDate.slice(0, updateDate.match(regex).index);
        // HTML template
        this.profile.innerHTML = `
                                    <div class="card card-body mb-5">
                                        <div class ="row">
                                            <div class="col-md-3 mb-3">
                                                <img class="img-fluid rounded-circle mb-3" src="${user.avatar_url}">
                                                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-3">View in Github</a>
                                            </div>
                                            <div class="col-md-9">
                                                <span class="badge badge-primary mr-2">Public Repos: ${user.public_repos}</span>
                                                <span class="badge badge-secondary mr-2">Followers: ${user.followers}</span>
                                                <span class="badge badge-success mr-2">Following: ${user.following}</span>
                                                <br><br>
                                                <ul class="list-group">
                                                    <li class="list-group-item">User name: ${user.name}</li>
                                                    <li class="list-group-item">Website: ${user.blog}</li>
                                                    <li class="list-group-item">Location: ${user.location}</li>
                                                    <li class="list-group-item">Member Since: ${joinDate}</li>
                                                    <li class="list-group-item">Last Update: ${updateDate}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    `
    }

    // clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // Show alert message
    showAlert(message, className) {
        // clear all the remaining alert first
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get the parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const searchBox = document.querySelector('.search');
        // Insert alert message
        container.insertBefore(div, searchBox);
        
        // Time out after 3 seconds
        setTimeout(() => {
            this.clearAlert()
        }, 3000);
    }

    // clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }
}