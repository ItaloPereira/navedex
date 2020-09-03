import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/Icon';
import { Container } from './style';

const Pagination = ({ itemsCount, itemsPerPage, active, onChange }) => {
  const pageCount = Math.ceil(itemsCount / itemsPerPage);

  function getPages() {
    const code = [];

    for(let i=1; i<=pageCount; i+=1) {
      code.push(
        <span
          key={i}
          className={`pagination__page ${i === active && 'active'}`}
          onClick={() => onChange(i)}
          role="button"
          tabIndex={i}
          onKeyDown={() => {}}
        >
          {i}
        </span>
      )
    }

    return code;
  }
  return (
    <Container pageCount={pageCount} active={active}>
      <div
        className="pagination__chevron-wrapper chevron-left"
        onClick={() => onChange(active-1)}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <Icon name="chevron-left" />
      </div>

      {getPages()}

      <div
        className="pagination__chevron-wrapper chevron-right"
        onClick={() => onChange(active+1)}
        role="button"
        tabIndex={pageCount+1}
        onKeyDown={() => {}}
      >
        <Icon name="chevron-left" />
      </div>
    </Container>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
}

export default Pagination;
