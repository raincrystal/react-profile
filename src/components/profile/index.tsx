import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './index.css';
import CustomStartRating from '../rating';

import avatarImage from '../../assets/avatar@2x.png';
import favoriteFillIcon from '../../assets/favorite_fill.svg';
import favoriteNoFillIcon from '../../assets/favorite_no_fill.svg';

const ProfileCard = (props: any) => {
  const {
    favorite,
    avatar,
    name,
    title,
    address,
    profileViews,
    websiteViews,
    rating,
    handleFavorite
  } = props;

  const [isFavorite, setFavorite] = useState(favorite);
  const onClickFavorite = (): void => {
    setFavorite(!isFavorite);
    handleFavorite(!isFavorite);
  };

  const numberWithCommas = (x: number) : string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <div className="profile-card-header-title">
          Developer Profile
        </div>
        <img
          src={isFavorite ? favoriteFillIcon : favoriteNoFillIcon}
          alt="favorite icon"
          onClick={onClickFavorite}
        />
      </div>
      <div className="profile-card-content">
        <img src={avatar} alt="favorite icon"/>
        <div className="profile-card-content-name">
          {name}
        </div>
        <div className="profile-card-content-title">
          {title}
          <br/>
          {address}
        </div>
      </div>
      <div className="profile-card-footer">
        <div className="profile-card-footer-item">
          <div className="profile-card-footer-item-value">
            {numberWithCommas(profileViews)}
          </div>
          <div className="profile-card-footer-item-label">
            Profile Views
          </div>
        </div>
        <div className="profile-card-footer-item">
          <div className="profile-card-footer-item-value">
            {numberWithCommas(websiteViews)}
          </div>
          <div className="profile-card-footer-item-label">
            Website Views
          </div>
        </div>
        <div className="profile-card-footer-item">
          <div className="profile-card-footer-item-value profile-rating">
            <CustomStartRating rating={rating}/>
          </div>
          <div className="profile-card-footer-item-label">
            Avg Rating
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  favorite: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  profileViews: PropTypes.number,
  websiteViews: PropTypes.number,
  rating: PropTypes.number,
  handleFavorite: PropTypes.func,
};

ProfileCard.defaultProps = {
  favorite: false,
  avatar: avatarImage,
  name: 'Your Name',
  title: 'Your Title',
  address: 'City, Country',
  profileViews: 0,
  websiteViews: 0,
  rating: 0,
  handleFavorite: () => {
  },
};

export default ProfileCard;
