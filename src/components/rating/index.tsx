import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Rater from 'react-rater';

import 'react-rater/lib/react-rater.css';

const CustomStartRating = (props: any) => {
  const {
    total,
    rating,
    interactive,
    handleChangeRate
  } = props;

  const [rate, setRate] = useState(rating);
  const onChangeRate = (rate: number) : void => {
    setRate(rate);
    handleChangeRate(rate);
  };

  return (
    <Rater
      total={total}
      rating={rate}
      interactive={interactive}
      onRate={onChangeRate}
    />
  );
};

CustomStartRating.propTypes = {
  total: PropTypes.number,
  rating: PropTypes.number,
  interactive: PropTypes.bool,
  handleChangeRate: PropTypes.func,
};

CustomStartRating.defaultProps = {
  total: 5,
  rating: 0,
  interactive: false,
  handleChangeRate: () => {
  },
};

export default CustomStartRating;
