// increment likes
export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
};

// add comment
export const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postID,
    author,
    comment
  };
};

// remove comment
export const removeComment = (postId, i) => {
  return {
    type: 'REMOVE_COMMENT',
    postID,
    i
  };
};
