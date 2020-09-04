import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import AppContext from '@context/appContext';
import NaversService from '@api/services/navers';

import { getErrorMessageByRequest } from '@modules/errors';
import RareNaver from '@components/templates/Modals/RareNaver'

import Page from '@components/templates/Page';
import CardGroup from '@components/templates/CardGroup';
import Button from '@components/molecules/Button';
import Pagination from '@components/molecules/Pagination';

import { 
  PageWrapper,
  PageHeader,
  NaversContainer,
  PaginationWrapper,
  EmptyMessage,
  LostPicture,
} from './style';

const lostImageSrc = 'https://media-exp1.licdn.com/dms/image/C4E03AQFQT2YVIoyH5A/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=5Mc8VRJBQ33FKq8K10JsFp3Za9TV7UjTdpW5yhjVL8c';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const notifyError = (msg) => toast.error(msg);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const itemsPerPage = 4;

  async function syncNavers() {
    try {
      setLoading(true);
      const res = await NaversService.getNavers();

      dispatch({
        type: 'SET_NAVERS',
        payload: res.data,
      });
    } catch (err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  function openRareNaverModal(uid) {
    return dispatch({ type: 'SET_MODAL_OPENED', component: RareNaver, props: { uid } });
  }

  async function revealTheSecret() {
    try {
      const data = {
        job_role: "Front-End",
        admission_date: "25/10/2020",
        birthdate: "11/08/1999",
        project: "Embraer, Mala & Cuia, Mit SP",
        name: "Italo Pereira",
        url: lostImageSrc
      };

      const res = await NaversService.createNaver(data);

      dispatch({
        type: 'ADD_NAVER',
        payload: res.data,
      });

      openRareNaverModal(res.data.id);

      dispatch({
        type: 'SET_RARE_NAVER_FOUND',
        payload: true,
      });

    } catch (err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    }
  }

  function verifyLocalStorage() {
    const rareNaverFound = localStorage.getItem('RARE_NAVER_FOUND');

    dispatch({
      type: 'SET_RARE_NAVER_FOUND',
      payload: rareNaverFound,
    });
  }

  useEffect(() => {
    syncNavers();
    verifyLocalStorage();
  }, []);

  return (
    <Page title="Home" description="Bem Vindo(a) ao Navedex!">
      <PageWrapper>
        <PageHeader>
          <h1 className="page-header__title">
            Navers
          </h1>

          <div className="page-header__button-wrapper">
            <Link to="/adicionar-naver">
              <Button>Adicionar Naver</Button>
            </Link>
          </div>
        </PageHeader>

        <NaversContainer>
          <CardGroup items={state.navers.slice(page*itemsPerPage-itemsPerPage, page*itemsPerPage)} loading={loading} />

          {state.navers.length > 4 && (
            <PaginationWrapper>
              <Pagination
                itemsCount={state.navers.length}
                itemsPerPage={itemsPerPage}
                onChange={(active) => {setPage(active)}}
                active={page}
              />
            </PaginationWrapper>
          )}

          {!state.navers.length && !loading && (
            <EmptyMessage>
              Nenhum Naver cadastrado!
              <span role="img" aria-label="rosto triste"> 😞</span>
            </EmptyMessage>
          )}
        </NaversContainer>
      </PageWrapper>
      {!state.rareNaverFound && (
        <LostPicture src={lostImageSrc} alt="lost" onClick={revealTheSecret} />
      )}
    </Page>
  )
}

export default Home;