import { useState, useEffect } from 'react';
import Comments from './Comments';
import { fetchPostsList } from './services';
import './Spinner.css';

/* Error image from https://undraw.co/license */

function Posts() {

  const [posts, setPosts] = useState();
  const [error, setError] = useState('');
  const [activePostId, setActivePostId] = useState();
  const [commentsForPostId, setCommentsForPostId] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
  


  function saveCommentsForPostId(postId, comments) {

    setCommentsForPostId({
      ...commentsForPostId,
      [postId]: comments['commentsForAPost']
    });
  }


  useEffect(
    () => {
      fetchPostsList()
      .then( fetchedPost => {
        setPosts(fetchedPost);
        setIsLoading(false);
      })
      .catch( error => {
        setError(error)
        setIsLoading(false);
      });
    },
    []
  );


  return (
    <>
       {!posts && error && error==='networkError' &&
         <div className="status"> 
              <div className="error">
                  <p className="error-head">Oops 400!...</p>
                  <img className="error-img" src="error_svg.svg" alt="Error"/>
                  <p className="error-type">Unable to load the page</p> 
                  <p className="error-description">Please make sure you are connected to the Internet and then reload your browser...</p>    
                </div>
              </div> } 
       { !posts && error && error==='serviceError' &&
          <div className="status"> 
                <div className="error">
                   <p className="error-head">Oops 404!...</p>
                   <img className="error-img" src="error_svg.svg" alt="Error"/>
                   <p className="error-type">Page not found.</p> 
                   <p className="error-description">Sorry we can't find the page you're looking for...</p>    
                </div>
          </div> }
    { isLoading && <div className="gg-spinner"></div> }
    { posts && (
      <ul className="posts">
        { posts.map( post => {
          return (
            <li className="post" key={post.id}>
              <div className="post-parts">
                <div className="post-first" >

                </div>
                <div className="post-second">
                  <a className="post__title" onClick={()=>setActivePostId(post.id)} href="#{post.id}">{post.title}</a>
                   <p className="post__body">{post.body}</p>
                </div>
                </div>
                {(activePostId === post.id) && <Comments
                  postId={ post.id }
                  comments={ commentsForPostId[post.id] }
                  saveComments={ comments => saveCommentsForPostId(post.id, comments)}
                  setError={setError}/>} 
            </li>
          );
        }) }
      </ul>
    ) }
    </>
  );
}

export default Posts;
