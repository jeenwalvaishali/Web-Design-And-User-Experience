import { useEffect, useState } from 'react';
import { fetchCommentsForPostId } from './services';
import './Spinner.css';
import './Icon.css';

function Comments({ postId, comments, saveComments, setError }) {

  const isLoading = !comments;
 
  const [hasError,setHasError] = useState();
  const [isLoadingError, setIsLoadingError] = useState(false); 

  useEffect(
    () => {
      fetchCommentsForPostId(postId)
      .then( commentsForAPost => {
        saveComments({postId, commentsForAPost});
      })
      .catch( error => {
        setError(error); 
        setHasError(error);
        setIsLoadingError(true);
      });
    },
     []
  );

  return (
    <>
    { isLoading && !isLoadingError && <div className="gg-spinner"></div> }
    { isLoadingError && hasError && hasError==='serviceError' &&
          <div className="status"> 
                <div className="error">
                   <p className="error-head">Oops 404!...</p>
                   <img className="error-img" src="error_svg.svg" alt="Error"/>
                   <p className="error-type">No Comments found.</p> 
                   <p className="error-description">Sorry we can't find the comments you're looking for...</p>    
                </div>
          </div> }
    { isLoadingError && hasError && hasError==='networkError' &&
         <div className="status"> 
              <div className="error">
                  <p className="error-head">Oops 400!...</p>
                  <img className="error-img" src="error_svg.svg" alt="Error"/>
                  <p className="error-type">Unable to load the comments</p> 
                  <p className="error-description">Please make sure you are connected to the Internet and then reload your browser...</p>    
                </div>
              </div> }       
    { !isLoading && 
       <div className="pre-post-comment"> 
          <ul className="post__comments"> 
              { comments.map( comment => {
      return ( 
        <li className="comment" key={comment.id} >
          <div className="comment-parts">
          <div className="comment-first"></div>
            <div className="comment-second">
              <div className="gg-comment-icon">
                 <i className="gg-comment"></i>
                 <p className="comment__body">{comment.body}</p>
              </div>
                   <div className="comment__info">
                     <p className="comment__email"><i className="gg-mail"></i>{comment.email}</p>
                     <p className="comment__name"><i className="gg-user"></i>{comment.name}</p>      
                </div>
            </div>
          </div>
          </li>
            );
          }) }
      </ul>
    </div> }
    </>
  );
};


export default Comments;
