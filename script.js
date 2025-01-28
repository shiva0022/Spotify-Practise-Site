var folders = []

async function loadAlbums() {
    // let x = await fetch('http://127.0.0.1:3000/assets/songs/');
    // let x = await fetch('https://github.com/shiva0022/Spotify-Practise-Site/tree/main/assets/songs/');
    let x = await fetch('https://shiva0022.github.io/Spotify-Practise-Site/assets/songs/');
    let response = await x.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let links = div.getElementsByTagName('a')
    Array.from(links).forEach(element => {
        if(element.href.includes('/songs/')) {
            let folderLink = element.href;
            folders.push(folderLink.match(/\/songs\/(.*)/)[1]);
        }
    });
    let albumContainer = document.querySelector('.album-container');
    for (folder of folders) {
        // let info = await fetch(`http://127.0.0.1:3000/assets/songs/${folder}/info.json`);
        let info = await fetch(`https://github.com/shiva0022/Spotify-Practise-Site/tree/main/assets/songs/${folder}/info.json`);
        info = await info.json();
        albumContafiner.innerHTML = albumContainer.innerHTML + `
            <div class="card" data-folder="${folder}">
                <img src="./assets/songs/${folder}/card_img.jpg" alt="album-cover">
                <h2>${info.title}</h2>
                <div class="content d-flex">
                    <p>Artist</p>
                    <li>${info.artist}</li>
                </div>
                <button type="button">
                    <img src="./assets/icons/play.svg" alt="" width="20px">
                </button>
            </div>
        `;
    }
}

async function main() {
    loadAlbums();
}

main()