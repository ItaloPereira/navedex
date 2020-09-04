import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import AppContext from '@context/appContext';
import { getAge, getDateRange } from '@utils/date';

import Icon from '@components/atoms/Icon';
import DeleteNaver from '@components/templates/Modals/DeleteNaver';

import { DefaultModalContent, Title } from '../style';

import {
  DetailsWrapper,
  DetailsInfo,
  CloseContainer,
  NaverImg,
  ActionsWrapper,
} from './style';

const NaverDetailsModal = ({ uid }) => {
  const { state, dispatch } = useContext(AppContext);
  const naver = state.navers.find(naver_ => naver_.id === uid);
  
  const [imageError, setImageError] = useState(false);
  const history = useHistory();

  function closeModal() {
    return dispatch({ type: 'SET_MODAL_CLOSED' });
  }

  function openDeleteModal() {
    return dispatch({ type: 'SET_MODAL_OPENED', component: DeleteNaver, props: { uid: naver.id } });
  }

  function goToEdit() {
    history.push(`/editar-naver/${uid}`);
    closeModal();
  }

  function getInitials() {
    const names = naver.name.toUpperCase().split(' ');

    if (names.length === 1) return names[0].charAt(0);

    return `${names[0].charAt(0) + names[names.length - 1].charAt(0)}`;
  }

  useEffect(() => {
    setImageError(false);
  }, [state.modal.isOpened]);

  return (
    <DefaultModalContent size="large" isOpened={state.modal.isOpened} noPadding>
      <CloseContainer onClick={closeModal}>
        <Icon name="close" />
      </CloseContainer>
      <DetailsWrapper>
        {naver && (
          <>
            <div className="figure-wrapper">
              {imageError ? (
                <div className="figure__fallback">
                  <span className="figure__fallback__initials">{getInitials()}</span>
                </div>
              ) : (
                <NaverImg
                  src={naver.url}
                  alt={naver.name}
                  onError={() => setImageError(true)}
                />
              )}
            </div>
            <DetailsInfo>
              <header>
                <Title>{naver.name}</Title>
                <p>{naver.job_role}</p>
              </header>
              <ul className="naver-informations">
                {naver.birthdate && (
                  <li>
                    <strong>Idade</strong>
                    <span>{`${getAge(naver.birthdate)} anos`}</span>
                  </li>
                )}
                {naver.admission_date && (
                  <li>
                    <strong>Tempo de empresa</strong>
                    <span>{getDateRange(naver.admission_date)}</span>
                  </li>
                )}
                {naver.project && (
                  <li>
                    <strong>Projetos que participou</strong>
                    <span>{naver.project}</span>
                  </li>
                )}
              </ul>
              <ActionsWrapper>
                <div
                  onClick={openDeleteModal}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => {}}
                >
                  <Icon name="delete" onClick={openDeleteModal} />
                </div>
                <div
                  onClick={goToEdit}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => {}}
                >
                  <Icon name="edit" onClick={goToEdit} />
                </div>
              </ActionsWrapper>
            </DetailsInfo>
          </>
        )}
      </DetailsWrapper>
    </DefaultModalContent>
  );
};

NaverDetailsModal.propTypes = {
  uid: PropTypes.string.isRequired,
};

export default NaverDetailsModal;