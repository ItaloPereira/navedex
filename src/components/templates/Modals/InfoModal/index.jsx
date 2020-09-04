import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AppContext from '@context/appContext';
import Icon from '@components/atoms/Icon';

import { DefaultModalContent, Title } from '../style';

import { CloseContainer, Body } from './style';

const InfoModal = ({ isOpened, title, text }) => {
  const { dispatch } = useContext(AppContext);

  function closeModal() {
    return dispatch({ type: 'SET_MODAL_CLOSED' });
  }

  return (
    <DefaultModalContent size="medium" isOpened={isOpened}>
      <CloseContainer onClick={closeModal}>
        <Icon name="close" />
      </CloseContainer>
      <Title>{title}</Title>
      <Body>
        <p>{text}</p>
      </Body>
    </DefaultModalContent>
  );
};

InfoModal.propTypes = {
  isOpened: PropTypes.bool,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

InfoModal.defaultProps = {
  isOpened: false,
};

export default InfoModal;