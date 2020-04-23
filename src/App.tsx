import React from 'react';

import './App.css';
import ProfileCard from "./components/profile";

const App = () => {
  const handleFavorite = (favorite: boolean) => {
    console.log('>>>>> Info: Favorite', favorite); //fixme
  };

  return (
    <div className="App">
      <ProfileCard
        rating={3.5}
        profileViews={1234}
        websiteViews={5678}
        handleFavorite={handleFavorite}
      />
    </div>
  );
};

export default App;
