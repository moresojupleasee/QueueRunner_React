const express = require('express')
const axios = require('axios')

const app = express()
const port = 4000

// Route for handling the authorization callback
app.get('/auth/twitch/callback', async (req, res) => {
  try {
    const code = req.query.code

    // Make a POST request to the Twitch API token endpoint
    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id: 'f0e3pg7ueeqjoqb37jigpxy2d6y4cp',
          client_secret: '',
          code: code,
          grant_type: 'authorization_code',
          redirect_uri:
            'http://queue-runner-react.vercel.app/queue/auth/twitch/callback', // Replace with your redirect URI
        },
      }
    )
    const accessToken = response.data.access_token

    // Make a GET request to the Twitch API's /users endpoint
    const userInfoResponse = await axios.get(
      'https://api.twitch.tv/helix/users',
      {
        headers: {
          'Client-ID': 'YOUR_CLIENT_ID',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    // Extract the user's display name and profile picture URL
    const { display_name, profile_image_url } = userInfoResponse.data.data[0]

    res.send('Authorization successful!')
  } catch (error) {
    console.error(
      'Error exchanging authorization code for access token:',
      error
    )
    res.status(500).send('Error occurred during authorization process')
  }
})

// Make a GET request to the Twitch API's /users endpoint

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

// Revoke Access Token
function revokeAccessToken(accessToken, clientId) {
  const url = `https://id.twitch.tv/oauth2/revoke?client_id=${clientId}&token=${accessToken}`

  fetch(url, {
    method: 'POST',
  })
    .then((response) => {
      // Handle response
      if (response.ok) {
        // Access token revoked successfully
        clearUserInfo()
        redirectToHomePage()
      } else {
        // Handle error
        console.error('Failed to revoke access token.')
      }
    })
    .catch((error) => {
      // Handle error
      console.error('An error occurred while revoking access token:', error)
    })
}

// Clear User Information
function clearUserInfo() {
  // Remove user information from session or cache
  // Example:
  sessionStorage.removeItem('accessToken')
  sessionStorage.removeItem('userId')
}

// Redirect to Home Page
function redirectToHomePage() {
  // Redirect to the home page or a relevant page
  // Example:
  window.location.href = '/home'
}

// Log Out Button Click Event
const logoutButton = document.getElementById('logoutButton')

logoutButton.addEventListener('click', () => {
  // Get the access token and client ID
  const accessToken = sessionStorage.getItem('accessToken')
  const clientId = 'YOUR_CLIENT_ID' // Replace with your Twitch application's client ID

  // Revoke the access token and perform log out
  revokeAccessToken(accessToken, clientId)
})
