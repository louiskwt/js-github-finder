class Github {
    constructor() {
        this.client_id = '49a68de4b6b3d34a54cb';
        this.client_secret = 'c25545779863f77702f7fcc8f4c0def335405e15';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}