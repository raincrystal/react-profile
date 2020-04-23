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
        name="Marcel Konig"
        title="Senior Front End Developer"
        address="Ruber, Germany"
        rating={3.5}
        profileViews={1234}
        websiteViews={5678}
        handleFavorite={handleFavorite}
        favorite
      />
    </div>
  );
};

export default App;
