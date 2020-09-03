import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AppContext from '@context/appContext';
import NaversService from '@api/services/navers';

import { getErrorMessageByRequest } from '@modules/errors';

import Page from '@components/templates/Page';
import CardGroup from '@components/templates/CardGroup';
import Button from '@components/molecules/Button';
import Pagination from '@components/molecules/Pagination';

import { 
  PageWrapper,
  PageHeader,
  NaversContainer,
  PaginationWrapper,
} from './style';

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
      console.log(err);
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    syncNavers();
  }, []);

  return (
    <Page title="Home" description="Bem Vindo(a) ao Navedex!">
      <PageWrapper>
        <PageHeader>
          <h1 className="page-header__title">
            Navers
          </h1>

          <div className="page-header__button-wrapper">
            <Button>Adicionar Naver</Button>
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

        </NaversContainer>
      </PageWrapper>
    </Page>
  )
}

export default Home;