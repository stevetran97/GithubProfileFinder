class Github {
  constructor () {
    this.client_id = 'bfc9625a6ccc1984ac02',
    this.client_secret = '99f7c2fda20ab9b39a1188d59b50351cce0ff08d',
    this.repos_sort = 'created: asc'
    this.data = null
  }

  async getUser(user) {
    // User response: Populate user info
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    // User's repos: Populate repos information
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    // Parse the response
    const profile = await profileResponse.json()
    console.log(profile)
    const repos = await repoResponse.json()
    // Return parsed response
    return {
      profile,
      repos
    }
  }
}


// Debugging Code
    // console.log(profileResponse)
    // console.log(profile)