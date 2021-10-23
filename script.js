const links_social_media = {
  github: 'MateusSantosRPs',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: '_mattst',
  twitter: 'maykbrito'
}

function change_social_media_links() {
  for (let li of social_links.children) {
   const social= li.getAttribute('class')
  li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}

change_social_media_links()
