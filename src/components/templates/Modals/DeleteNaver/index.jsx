import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import AppContext from '@context/appContext';

import NaversService from '@api/services/navers';
import Button from '@components/molecules/Button';
import { getErrorMessageByRequest } from '@modules/errors';

import InfoModal from '../InfoModal';

import { DefaultModalContent, Title } from '../style';

import { Body, ActionsWrapper } from './style';

export const DeleteNaverModal = ({ uid }) => {
  const notifyError = (msg) => toast.error(msg);
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  function closeModal() {
    return dispatch({ type: 'SET_MODAL_CLOSED' });
  }

  function openSuccessModal() {
    closeModal();
    return dispatch({
      type: 'SET_MODAL_OPENED',
      component: InfoModal,
      props: { title: 'Naver excluído', text: 'Naver excluído com sucesso!' },
    });
  }

  async function deleteNaver() {
    setLoading(true);
    try {
      await NaversService.deleteNaver(uid);

      dispatch({ type: 'REMOVE_NAVER', uid });
      openSuccessModal();
    } catch (err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DefaultModalContent size="medium" isOpened={state.modal.isOpened}>
      <Title>Excluir Naver</Title>
      <Body>
        <p>Tem certeza que deseja excluir este Naver?</p>
        <ActionsWrapper>
          <div className="button-wrapper">
            <Button type="secondary" onClick={closeModal}>Cancelar</Button>
          </div>
          <div className="button-wrapper">
            <Button onClick={deleteNaver} loading={loading} disabled={loading}>Excluir</Button>
          </div>
        </ActionsWrapper>
      </Body>
    </DefaultModalContent>
  );
};

DeleteNaverModal.propTypes = {
  uid: PropTypes.string.isRequired,
};

export default DeleteNaverModal;