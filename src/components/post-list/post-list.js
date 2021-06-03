import React from 'react';

import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem 
          {...itemProps} 
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
         onToggleLiked={() =>onToggleLiked(id)}
          />
        {/* label={item.label} 
         important={item.important} /> */}
      </li>
    )
  })

  return (
    <ul className="post-list list-group">
      {elements}
      {/* <PostListItem label="Going to learn React" important />
      <PostListItem label="That is so good" />
      <PostListItem label="I need a break..." /> */}
    </ul>
  )
}

export default PostList