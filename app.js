// Instantiate
// Instantiate used function object
const github = new Github
// Instantiate UI
const ui = new UI
// ----------------------------------------
// ----------------------------------------
// Variables
// Search Input
const searchUser = document.getElementById('searchUser')
// Load button
const loadButton = document.getElementById('load')
// ----------------------------------------
// ----------------------------------------
// Event Listeners
// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value
  // If username input is not empty...
  if (userText !== '') {
    // Find user profile, optain full profile and first 5 repos 
    github.getUser(userText)
    .then(
      data=>{
        // Save data for use later
        github.data = data
        // UI Now needs to display
        if (data.profile.message === 'Not Found') {
          //Show alert
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          //Show profile
          ui.showProfile(data.profile)
          // Get first 5 repos and set index starting at 0
          ui.showRepos(data.repos)
          // Show load button
          loadButton.style.display = 'block'
        }
      }
    )
  } 
  else {
    // Clear profile
    ui.clearProfile()
    // Hide load button
    loadButton.style.display = 'none'
  }
})
// Load more event listener
loadButton.addEventListener('click', () =>  {
  console.log(`loading new repo entries starting from ${ui.currentRepoIdx}th element`)
  ui.showMoreRepos(github.data.repos, ui.currentRepoIdx)
})


// Debugging Code
  // console.log(data.repos)
  // console.log('Extracted data = ', data.profile)
  // console.log('Extracted public repos numbers data = ', data.profile)