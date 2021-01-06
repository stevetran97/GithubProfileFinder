class UI {
  constructor () {
    this.profile = document.getElementById('profile')
  }
  // ----------------------------------------------
  // Show Full Profile
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-4">
      <div class="row">
        <div class="col md-3">
          <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">
            Public Repos: ${user.public_repos}
          </span>
          <span class="badge badge-primary">
            Public Gists: ${user.public_gists}
          </span>
          <span class="badge badge-primary">
            Followers: ${user.followers}
          </span>
          <span class="badge badge-primary">
            Following: ${user.following}
          </span>
          <br>
          <br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Date of Creation: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `
  }
  // ----------------------------------------------
  // Show Repos
  showRepos(repos) {
    let output = ''
    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="blank"></a>
            ${repo.name}
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary mb-2">
              Public Gists: ${repo.stargazers_count}
            </span>
            <span class="badge badge-primary mb-2">
              Followers: ${repo.watchers}
            </span>
            <span class="badge badge-primary mb-2">
              Public Repos: ${repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    `}
    )
    document.getElementById('repos').innerHTML = output
  }

  // ----------------------------------------------
  // Show Alert Message
  showAlert(message, className) {
    // Create div
    const div = document.createElement('div')
    // Add classes
    div.className = className
    // Add Text
    div.appendChild(document.createTextNode(message))
    // Get parent
    const container = document.querySelector('.searchContainer')
    // Get search bar
    const search = document.querySelector('.search')
    // Insert Alert 
    container.insertBefore(div, search)

    // Timeout after 3 seconds
    setTimeout(()=>{this.clearAlert()}, 1000)
  }
  // ----------------------------------------------
  // Clear Alert
  clearAlert()  {
    const currentAlert =  document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove()
    }
  }
  // ----------------------------------------------
  // Clear Profile
  clearProfile()  {
    this.profile.innerHTML = ''
  }
}

// Debugging Code
  // console.log('Showing Profile')
  // console.log('public repos', user.public_repos)