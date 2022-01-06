
// header
let headerSearch = document.querySelector('.header__search');

headerSearch.addEventListener('focus', (e) => {
  headerSearch.style.paddingLeft = '20px';
  document.querySelector('.loop-icon').style.display = 'none';
})

headerSearch.addEventListener('focusout', (e) => {
  headerSearch.style.paddingLeft = '33px';
  document.querySelector('.loop-icon').style.display = 'block';
})


// post grid 

let postObj = [
  {
    id: 1,
    link: '../../img/img.jpg',
    video: true,
    tagged: false,
    likes: 0,
    comments: 1
  },
  {
    id: 2,
    link: '../../img/post-image.jpg',
    video: false,
    tagged: true,
    likes: 0,
    comments: 1
  },
  {
    id: 3,
    link: '../../img/post-image1.png',
    video: true,
    tagged: false,
    likes: 0,
    comments: 1
  },
  {
    id: 4,
    link: '../../img/post-image.jpg',
    video: false,
    tagged: true,
    likes: 0,
    comments: 1
  },
  {
    id: 5,
    link: '../../img/img.jpg',
    video: true,
    tagged: false,
    likes: 0,
    comments: 1
  },
  {
    id: 6,
    link:  '../../img/post-image1.png',
    video: true,
    tagged: false,
    likes: 0,
    comments: 1
  },
  {
    id: 7,
    link: '../../img/img.jpg',
    video: true,
    tagged: false,
    likes: 0,
    comments: 1
  },
  {
    id: 8,
    link:  '../../img/post-image1.png',
    video: true,
    tagged: false,
    likes: 0,
    comments: 1
  },
  {
    id: 9,
    link: '../../img/post-image.jpg',
    video: false,
    tagged: true,
    likes: 0,
    comments: 1
  }
]

let postsAll = document.querySelector('.post-all');
let postVideo = document.querySelector('.post-video');
let postTagged = document.querySelector('.post-tagged');

for (let i of postObj) {
  let image = document.createElement('img');
  image.src = `${i.link}`;
  let post = document.createElement('div');
  post.appendChild(image);
  post.classList.add(`n${i.id}`, 'posted-post');
  postsAll.appendChild(post);

  if (i.video) {
    let image = document.createElement('img');
    image.src = `${i.link}`;
    let post = document.createElement('div');
    post.appendChild(image);
    post.classList.add(`n${i.id}`, 'posted-post');
    postVideo.appendChild(post);
  } else if (i.tagged) {
    let image = document.createElement('img');
    image.src = `${i.link}`;
    let post = document.createElement('div');
    post.appendChild(image);
    post.classList.add(`n${i.id}`, 'posted-post');
    postTagged.appendChild(post);
  }
}

// tabs =================================================
let postsTab = document.querySelector('.all');
let videosTab = document.querySelector('.videos');
let taggedTab = document.querySelector('.tagged');
let tabs = document.querySelectorAll('.tab__link');

for (tab of tabs) {
  tab.addEventListener('click', (e) => {
    if (e.target.classList.contains("videos")) {
      postsTab.classList.remove('active');
      taggedTab.classList.remove('active');
      videosTab.classList.add('active');
      postsAll.style.display = 'none';
      postTagged.style.display = 'none';
      postVideo.style.display = 'grid';
    } else if (e.target.classList.contains("tagged")) {
      postsTab.classList.remove('active');
      taggedTab.classList.add('active');
      videosTab.classList.remove('active');
      postsAll.style.display = 'none';
      postVideo.style.display = 'none';
      postTagged.style.display = 'grid';
    } else {
      postsTab.classList.add('active');
      taggedTab.classList.remove('active');
      videosTab.classList.remove('active');
      postVideo.style.display = 'none';
      postTagged.style.display = 'none';
      postsAll.style.display = 'grid';
    }
  })
}

// inner post =================================================
let allPosts = document.querySelectorAll('.posted-post');
let postInner = document.querySelector('.inner');
let postImage = document.querySelector('.inner__image');
let closePost = document.querySelector('.inner__close');
let prevBtn = document.querySelector('.inner__prev');
let nextBtn = document.querySelector('.inner__next');

for (let post of allPosts) {
  post.addEventListener('click', e => {
    postInner.style.display = 'flex';
    let postId = e.target.classList[0].slice(-1);
    postImage.src = postObj[postId-1].link;

    nextBtn.addEventListener('click', e => {
      if (postId < postObj.length) {
        postId++;
        postImage.src = postObj[postId-1].link;
        console.log(postId)
      }
      if (postId == postObj.length) nextBtn.style.display = 'none';
      if (prevBtn.style.display = 'none') prevBtn.style.display = 'block';
    })

    prevBtn.addEventListener('click', e => {
      postId--;
      if (postId >= 1) postImage.src = postObj[postId-1].link;
      if (postId <= 0) postId = 1;
      if (postId == 1) prevBtn.style.display = 'none';
      if (nextBtn.style.display = 'none') nextBtn.style.display = 'block';
    })

    closePost.addEventListener('click', () => {
      postInner.style.display = 'none';
    })
  })
}








