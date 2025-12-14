const reels = [{
        username: "rahul_dev",
        userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
        caption: "Morning coding vibes ☕💻",
        likeCount: 1240,
        commentCount: 86,
        shareCount: 34,
        isLiked: false,
        isFollowed: false,
        video: "./reels/video1.mp4"
    },
    {
        username: "neha_travels",
        userprofile: "https://randomuser.me/api/portraits/women/21.jpg",
        caption: "Mountains are calling 🌄",
        likeCount: 5320,
        commentCount: 214,
        shareCount: 98,
        isLiked: true,
        isFollowed: true,
        video: "./reels/video2.mp4"
    },
    {
        username: "foodie_raj",
        userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
        caption: "Street food love ❤️🍔",
        likeCount: 2890,
        commentCount: 132,
        shareCount: 56,
        isLiked: false,
        isFollowed: false,
        video: "./reels/video3.mp4"
    },
    {
        username: "fit_life",
        userprofile: "https://randomuser.me/api/portraits/men/45.jpg",
        caption: "No excuses. Just results 💪",
        likeCount: 4120,
        commentCount: 176,
        shareCount: 89,
        isLiked: true,
        isFollowed: true,
        video: "./reels/video4.mp4"
    },
    {
        username: "art_with_riya",
        userprofile: "https://randomuser.me/api/portraits/women/55.jpg",
        caption: "Sketching peace 🎨✨",
        likeCount: 1987,
        commentCount: 64,
        shareCount: 22,
        isLiked: false,
        isFollowed: true,
        video: "./reels/video5.mp4"
    },
    {
        username: "tech_guru",
        userprofile: "https://randomuser.me/api/portraits/men/60.jpg",
        caption: "JavaScript tips in 30 seconds 🚀",
        likeCount: 7420,
        commentCount: 341,
        shareCount: 210,
        isLiked: true,
        isFollowed: false,
        video: "./reels/video6.mp4"
    },
    {
        username: "nature_clicks",
        userprofile: "https://randomuser.me/api/portraits/women/68.jpg",
        caption: "Sunset therapy 🌅",
        likeCount: 3650,
        commentCount: 118,
        shareCount: 47,
        isLiked: false,
        isFollowed: false,
        video: "./reels/video7.mp4"
    },
    {
        username: "daily_motivation",
        userprofile: "https://randomuser.me/api/portraits/men/72.jpg",
        caption: "Believe in yourself 🔥",
        likeCount: 9100,
        commentCount: 402,
        shareCount: 310,
        isLiked: true,
        isFollowed: true,
        video: "./reels/video8.mp4"
    },
    {
        username: "fashion_diary",
        userprofile: "https://randomuser.me/api/portraits/women/81.jpg",
        caption: "Simple outfits, strong confidence 👗",
        likeCount: 2560,
        commentCount: 95,
        shareCount: 40,
        isLiked: false,
        isFollowed: false,
        video: "./reels/video9.mp4"
    },
    {
        username: "music_zone",
        userprofile: "https://randomuser.me/api/portraits/men/90.jpg",
        caption: "Headphones on, world off 🎧",
        likeCount: 6840,
        commentCount: 278,
        shareCount: 190,
        isLiked: true,
        isFollowed: true,
        video: "./reels/video10.mp4"
    }
];

var allReels = document.querySelector(".all-reels")

function addData() {
    var sum = '';
    reels.forEach(function (elem, idx) {
        sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow'>${elem.isFollowed?"UnFollow":"Follow"}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                            <h6>88</h6>
                        </div>
                    </div>
                </div>`;
    });

    allReels.innerHTML = sum;
}

addData();

allReels.addEventListener('click', function (dets) {

    if (dets.target.className == 'like') {
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true
        } else {
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        }
    }

    if (dets.target.className == 'follow') {
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true
        } else {
            reels[dets.target.id].isFollowed = false
        }
    }

    addData();
})