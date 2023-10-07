//HW: Make the NASA API handle all the data types including video
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=TDRYoaduoYDATA43uUrXTsB2d6SUq15HE7yjs8Md&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').src = ''
        } else if (data.media_type === 'video') {
          document.querySelector('img').src = ''
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}