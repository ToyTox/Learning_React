import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPost}) => {
  return(
    <div className="app-header d-flex">
      <h1>Artem Kosulin</h1>
      <h2>{allPost} записей, из них понравились {liked}</h2>
    </div>
  )
}

export default AppHeader;