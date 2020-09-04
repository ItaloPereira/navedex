import React, { useState, useContext } from 'react'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppContext from '@context/appContext';

import DeleteNaver from '@components/templates/Modals/DeleteNaver'
import NaverDetails from '@components/templates/Modals/NaverDetails'

import Icon from '@components/atoms/Icon';
import Loader from '@components/atoms/Loader';

import { Container, LoaderWrapper } from './style';

const Card = ({ name, role, imgSrc, uid }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { dispatch } = useContext(AppContext);

  function openDeleteModal() {
    return dispatch({ type: 'SET_MODAL_OPENED', component: DeleteNaver, props: { uid } });
  }
  
  function openDetails() {
    return dispatch({ type: 'SET_MODAL_OPENED', component: NaverDetails, props: { uid } });
  }

  function getInitials() {
    const names = name.toUpperCase().split(' ');

    if (names.length === 1) return names[0].charAt(0);

    return `${names[0].charAt(0) + names[names.length - 1].charAt(0)}`;
  }

  return (
    <Container name={name}>
      <div
        onClick={openDetails}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
        className="image-container"
      >
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
        )}
      </div>
      
      <h2 className="card__title" title={name}>{name}</h2>

      <span className="card__description" title={role}>{role}</span>

      <div className="card__actions">
        <div
          className="card__actions__icon-wrapper"
          onClick={openDeleteModal}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          <Icon name="delete" />
        </div>
        <div className="card__actions__icon-wrapper">
          <Link to={`/editar-naver/${uid}`}>
            <Icon name="edit" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  imgSrc: PropTypes.string,
  uid: PropTypes.string.isRequired,
};

Card.defaultProps = {
  name: undefined,
  role: undefined,
  imgSrc: undefined,
};

export default Card;
