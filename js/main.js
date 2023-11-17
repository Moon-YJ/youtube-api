const api_key = 'AIzaSyB81cXmxoWdzbYs8QZUlN_LQskZFT_Xqoo';
const playlist_id = 'PLMaY0ixOiyljR7EsFnCk9HPiR7eNsI6Yd';
const base_url = 'https://www.googleapis.com/youtube/v3/playlistItems';
const result_url = `${base_url}?part=snippet&api_key=${api_key}&playlistId=${playlist_id}&maxResults=5`;

/*
  GET 방식
    - 브라우저 URL을 통해서 데이터 요청 방식
    - 요청 URL: 기본URL?name=value&name=value
    - QueryString: 기본 요청 URL ?물음표 뒤로 name=value 세트로 옵션을 담아서 전달하는 방식
*/
