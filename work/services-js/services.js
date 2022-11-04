"use strict";
(function() {
  const MESSAGES = {
    NETWORK_ERROR: 'Unable to connect, please try again',
    GENERIC_ERROR: 'Something went wrong, please try again',
  };

  const state = {
    activePostId: null, 
    posts: [],
    commentsForPost: {}, 
  };

  const postEl = document.querySelector('.posts');
  loadPosts();
  addAbilityToTogglePosts();

  function render() {
    const html = state.posts.map( (post) => {
      const isActive = post.id === Number(state.activePostId);
      let commentsHtml = '';

      if(state.commentsForPost[post.id]) {
        commentsHtml = state.commentsForPost[post.id].map( (comment) => `
         <li class="comment ${isActive ? 'comment_active' : 'comment_inactive'}">
         <div class="comment__data">
          <p class="comment__body">${comment.body}</p>
          <div class="comment__info">
                <p class="comment__email">&#128231; ${comment.email}</p>
                <p class="comment__name" comment-id="${comment.id}">  &#128101; ${comment.name}</p>      
          </div>
          </div>
          </li>
        `).join('');
      }
      return `
        <li class="post ${isActive ? 'post--active' : 'post--inactive'}">
          <a class="post__title" data-id="${post.id}" href="#${post.id}">${post.title}</a>
          <p class="post__body">${post.body}</p>
          <ul class="post__comments">
            ${commentsHtml}
          </ul>
        </li>
      `;
    }).join('');
    postEl.innerHTML = html;
    updateStatus('');
  }

  function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .catch( () => Promise.reject('NETWORK_ERROR') )
    .then( response => {
      if( response.ok ) {
        return response.json();
      }
      return Promise.reject('GENERIC_ERROR');
    })
    .then( posts => {
      state.posts = posts;
      render();
    })
    .catch( error => updateStatus(error) );
  }

  function updateStatus(message) {
    const statusEl = document.querySelector('.status');
    if(message) {
      statusEl.innerText = MESSAGES[message] || MESSAGES.GENERIC_ERROR;
    } else {
      statusEl.innerText = '';
    }
  }

  function addAbilityToTogglePosts() {
    postEl.addEventListener('click', (e) => {
      let postId = e.target.getAttribute("data-id");
      if(state.activePostId === postId){
        state.activePostId = null;
        render();
      }else{
        loadComments(postId);
        state.activePostId = postId;  
      }
    });
  }

  function loadComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .catch( () => Promise.reject('NETWORK_ERROR') )
    .then( response => {
      if( response.ok ) {
        return response.json();
      }
      return Promise.reject('GENERIC_ERROR');
    })
    .then( comments => {
      state.commentsForPost[postId] = comments;
      render();
    })
    .catch( error => updateStatus(error) );
  }

})();