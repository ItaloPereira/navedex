import React from 'react'; 
import PropTypes from 'prop-types';

import Card from '@components/organisms/Card';

import { Container } from './style';

const CardGroup = ({ items, loading }) => {
  const finalItems = items.length > 4 ? items.splice(0, 4) : items;

  function loader() {
    const code = [];
    for (let i=0; i<4; i+=1) {
      code.push(
        <div className="loading-item" key={i}>
          <div className="loading-item__img" />

          <div className="loading-item__line w60" />
          <div className="loading-item__line w80" />
          <div className="loading-item__line w40" />
        </div>
      );
    }

    return code;
  }

  return (
    <Container>
      {finalItems.map(item => (
        <Card
          key={item.id}
          name={item.name}
          role={item.job_role}
          imgSrc={item.url}
        />
      ))}

      {loading && loader()}
    </Container>
  );
};

CardGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    job_role: PropTypes.string,
    url: PropTypes.string,
  })),
  loading: PropTypes.bool,
};

CardGroup.defaultProps = {
  items: [],
  loading: false,
};

export default CardGroup;
