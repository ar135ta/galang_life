/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Intro Galang',
        'name': 'Intro Galang.mp4',
        'duration': '0:27',
    },
    {
        'id': 'a2',
        'title': 'Piano 1',
        'name': 'Piano 1.mp4',
        'duration': '0:35',
    },
    {
        'id': 'a3',
        'title': 'Piano 2',
        'name': 'Piano 2.mp4',
        'duration': '0:25',
    },

    {
        'id': 'a4',
        'title': 'Piano 3',
        'name': 'Piano 3.mp4',
        'duration': '0:36',
    },
    {
        'id': 'a5',
        'title': 'Feel',
        'name': 'Feel.mp4',
        'duration': '1:18',
    },
    {
        'id': 'a6',
        'title': 'Just For You',
        'name': 'Just For You.mp4',
        'duration': '1:32',
    },
    {
        'id': 'a7',
        'title': 'Just For You 2',
        'name': 'Just For You 2.mp4',
        'duration': '0:39',
    },

    {
        'id': 'a8',
        'title': 'My Movies',
        'name': 'My Movies.mp4',
        'duration': '11:51',
    },
    {
        'id': 'a9',
        'title': 'See You',
        'name': 'See You.mp4',
        'duration': '0:20',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
