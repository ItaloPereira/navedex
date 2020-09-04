import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { Link, useHistory, useParams } from 'react-router-dom';

import AppContext from '@context/appContext';
import NaversService from '@api/services/navers';

import { getErrorMessageByRequest } from '@modules/errors';
import patterns from '@modules/patterns';

import InfoModal from '@components/templates/Modals/InfoModal';

import Page from '@components/templates/Page';
import Button from '@components/molecules/Button';
import Icon from '@components/atoms/Icon';
import Input from '@components/molecules/Input';

import { PageWrapper, PageHeader, Form } from './style';

const Naver = () => {
  const { uid } = useParams();
  const history = useHistory();
  const { handleSubmit, control, errors } = useForm();

  const notifyError = (msg) => toast.error(msg);
  const { dispatch } = useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const [naver, setNaver] = useState({});

  const title = uid
    ? 'Editar Naver'
    : 'Adicionar Naver';

  const description = uid
    ? 'Altere os campos para editar o Naver!'
    : 'Insira os dados para criar um novo Naver!';

  const headerText = uid
    ? 'Editar Naver'
    : 'Adicionar Naver';

  const modalMessage = uid
    ? 'Naver atualizado'
    : 'Naver criado';

  const modalDescription = uid
    ? 'Naver atualizado com sucesso!'
    : 'Naver criado com sucesso!';

  // SYNC
  async function syncNaver() {
    try {
      const res = await NaversService.getNaver(uid);
      setNaver(res.data);
    } catch(err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    }
  }

  // CREATE & EDIT
  async function onSubmit(data) {
    setLoading(true);
    
    try {
      if (uid) {
        await NaversService.updateNaver(data, uid);
      } else {
        await NaversService.createNaver(data);
      }

      dispatch({
        type: 'SET_MODAL_OPENED',
        component: InfoModal,
        props: { title: modalMessage, text: modalDescription },
      });

      history.push('/');
    } catch(err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (uid) syncNaver();
  }, []);

  if (uid && !naver.id) return null;

  return (
    <Page title={title} description={description}>
      <PageWrapper>
        <div className="page-container">
          <PageHeader>
            <Link to="/">
              <div className="page-header__icon-wrapper">
                <Icon name="chevron-left" />
              </div>
            </Link>
            <h2 className="page-header__title">{headerText}</h2>
          </PageHeader>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>

          {/* LINE 1 */}

          <div className="form__line">
            <div className="form__col">
              <Input 
                label="Nome"
                placeholder="Nome"
                name="name"
                defaultValue={naver.name || ""}
                control={control}
                rules={{
                  required: true,
                }}
                error={errors.name}
              />
            </div>
            
            <div className="form__col">
              <Input 
                label="Cargo"
                placeholder="Cargo"
                name="job_role"
                defaultValue={naver.job_role || ""}
                control={control}
                rules={{
                  required: true,
                }}
                error={errors.job_role}
              />
            </div>
          </div>

          {/* LINE 2 */}

          <div className="form__line">
            <div className="form__col">
              <Input 
                label="Aniversário"
                placeholder="Aniversário"
                name="birthdate"
                defaultValue={moment.utc(naver.birthdate).format('DD/MM/YYYY') || ""}
                mask="99/99/9999"
                control={control}
                rules={{
                  pattern: patterns.date,
                  required: true,
                }}
                error={errors.birthdate}
              />
            </div>
            
            <div className="form__col">
              <Input 
                label="Data de admissão"
                placeholder="Data de admissão"
                name="admission_date"
                defaultValue={moment.utc(naver.admission_date).format('DD/MM/YYYY') || ""}
                mask="99/99/9999"
                control={control}
                rules={{
                  pattern: patterns.date,
                  required: true,
                }}
                error={errors.admission_date}
              />
            </div>
          </div>

          {/* LINE 3 */}

          <div className="form__line">
            <div className="form__col">
              <Input 
                label="Projetos que participou"
                placeholder="Projetos que participou"
                name="project"
                defaultValue={naver.project || ""}
                control={control}
                rules={{
                  required: true,
                }}
                error={errors.project}
              />
            </div>
            
            <div className="form__col">
              <Input 
                label="URL da foto do Naver"
                placeholder="URL da foto do Naver"
                name="url"
                defaultValue={naver.url || ""}
                control={control}
                rules={{
                  required: true,
                }}
                error={errors.url}
              />
            </div>
          </div>
          <div className="form__button-wraper">
            <Button htmlType="submit" loading={loading} disabled={loading}>Salvar</Button>
          </div>
        </Form>
      </PageWrapper>
    </Page>
  )
}

export default Naver;