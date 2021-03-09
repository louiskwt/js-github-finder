class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }
    // display profile and ui
    showProfile(user) {
        this.profile.innerHTML = `
                                    <div class="card card-body mb-5>
                                        <div class ="row">
                                            <div class="col-md-3">
                                                <img class="img-fluid mb-2" src="${user.avatar_url}">
                                                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View in Github</a>
                                            </div>
                                            <div class="col-md-9">
                                                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                                                <span class="badge badge-secondary">Followers: ${user.followers}</span>
                                                <span class="badge badge-success">Following: ${user.following}</span>
                                                <br><br>
                                                <ul class="list-group">
                                                    <li class="list-group-item">Website: ${user.blog}</li>
                                                    <li class="list-group-item">Location: ${user.location}</li>
                                                    <li class="list-group-item">Member Since: ${user.created_at}</li>
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
}