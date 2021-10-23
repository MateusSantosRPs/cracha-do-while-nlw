const links_social_media = {
  github: 'MateusSantosRPs',
  youtube: '',
  facebook: '',
  instagram: '_mattst',
  twitter: 'MateusSantosRPs'
}

function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}

change_social_media_links()

// Buscando dados da api do github

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_photo.src = data.avatar_url
      user_name.textContent = data.name
      user_login.textContent = data.login
      user_profile.href = data.html_url
      user_bio.textContent = data.bio
    })
}

getGithubProfileInfos()
