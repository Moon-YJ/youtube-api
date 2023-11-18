const api_key = 'AIzaSyB81cXmxoWdzbYs8QZUlN_LQskZFT_Xqoo';
const playlist_id = 'PLMaY0ixOiylhMzTSeHXmbE-6qLm2t-qkU';
const base_url = 'https://www.googleapis.com/youtube/v3/playlistItems';
const num = 7;
const result_url = `${base_url}?part=snippet&key=${api_key}&playlistId=${playlist_id}&maxResults=${num}`;

/*
  GET 방식
    - 브라우저 URL을 통해서 데이터 요청 방식
    - 요청 URL: 기본URL?name=value&name=value
    - QueryString: 기본 요청 URL ?물음표 뒤로 name=value 세트로 옵션을 담아서 전달하는 방식
*/

fetch(result_url)
	.then((data) => data.json())
	.then((json) => {
		console.log(json.items);
		let tags = '';
		json.items.forEach((el) => {
			tags += `
        <article>
          <img src=${el.snippet.thumbnails.standard.url} />
          <h2>${el.snippet.title}<h2/>
          <p>${el.snippet.description}</p>
        </article>
      `;
		});
		document.body.innerHTML = tags;
	});
