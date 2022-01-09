import React from 'react';

import {
  TableSortLabel,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { moviesSelector, setSortField } from '../../../state/slices/moviesSlice';

export default function MovieSort() {
  const { sortFields } = useSelector(moviesSelector);
  const dispatch = useDispatch();

  const onRequestSortYear = () => {
    const filterBaseOnYear = sortFields.order === 'asc' ? 'desc' : 'asc';

    dispatch(
      setSortField({
        field: 'releaseYear',
        order: sortFields.field === 'releaseYear' ? filterBaseOnYear : 'desc',
      }),
    );
  };

  const onRequestSortTitle = () => {
    const filterBaseOnTitle = sortFields.order === 'asc' ? 'desc' : 'asc';
    dispatch(
      setSortField({
        field: 'title',
        order: sortFields.field === 'title' ? filterBaseOnTitle : 'desc',
      }),
    );
  };

  return (
    <>
      <TableSortLabel
        style={{ marginRight: '6px' }}
        active={sortFields.field === 'releaseYear'}
        direction={sortFields.field === 'releaseYear' ? sortFields.order : 'desc'}
        onClick={onRequestSortYear}
      >
        Year
      </TableSortLabel>

      <TableSortLabel
        active={sortFields.field === 'title'}
        direction={sortFields.field === 'title' ? sortFields.order : 'desc'}
        onClick={onRequestSortTitle}
      >
        Title
      </TableSortLabel>
    </>
  );
}
