import React, { useState } from 'react'; 
import PropTypes from 'prop-types';

import Icon from '@components/atoms/Icon';
import Loader from '@components/atoms/Loader';

import { Container, LoaderWrapper } from './style';

const Card = ({ name, role, imgSrc }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  function getInitials() {
    const names = name.toUpperCase().split(' ');

    if (names.length === 1) return names[0].charAt(0);

    return `${names[0].charAt(0) + names[names.length - 1].charAt(0)}`;
  }


  return (
    <Container>
      {imageError ? (
        <div className="card__fallback">
          <span className="card__fallback__initials">{getInitials()}</span>
        </div>
      ) : (
        <>
          <img
            className="card__img"
            src={imgSrc} 
            alt="destaque"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />

          {!imageLoaded && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
        </>
      ) }
      
      <h2 className="card__title" title={name}>{name}</h2>

      <span className="card__description" title={role}>{role}</span>

      <div className="card__actions">
        <div className="card__actions__icon-wrapper">
          <Icon name="delete" />
        </div>
        <div className="card__actions__icon-wrapper">
          <Icon name="edit" />
        </div>
      </div>
    </Container>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  imgSrc: PropTypes.string,
};

Card.defaultProps = {
  name: undefined,
  role: undefined,
  imgSrc: undefined,
};

export default Card;
