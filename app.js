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
// ----------------------------------------
// ----------------------------------------
// Event Listeners
// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value
  // If username input is not empty...
  if (userText !== '') {
    // Find user profile
    github.getUser(userText)
    .then(
      data=>{
        // UI Now needs to display
        if (data.profile.message === 'Not Found') {
          //Show alert
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          //Show profile
          console.log(data.repos)
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
      }
    )
  } 
  else {
    // Clear profile
    ui.clearProfile()
  }
})



// Debugging Code
  // console.log('Extracted data = ', data.profile)
  // console.log('Extracted public repos numbers data = ', data.profile)