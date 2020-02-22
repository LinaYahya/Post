fetch('/post')
  .then((res) => res.json())
  .then((result) => {
    for (let blogPost in result) {
      const postDiv = document.createElement('div');
      const postText = document.createElement('p');
      const thumbnail = document.createElement('img');
      const postContainer = document.getElementsByClassName(
        'post-container',
      )[0];

      thumbnail.src = '../img/logo2.png';
      thumbnail.className = 'thumbnail';
      postText.innerHTML = result[blogPost];
      postDiv.className = 'post';

      postDiv.appendChild(thumbnail);
      postDiv.appendChild(postText);
      postContainer.appendChild(postDiv);
    }
  });
