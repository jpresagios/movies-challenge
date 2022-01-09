import axios from './axiosClient';
import Movie from '../interfaces/movie';
import SearchFields from '../interfaces/searchFields';
import SortFields from '../interfaces/sortFields';

const fetchMovies = async (
  searchFields: SearchFields,
  sortFields: SortFields,
): Promise<Movie[]> => {
  const { type, year } = searchFields;
  const { field, order } = sortFields;

  let url = `/movies?_sort=${field}&_order=${order}`;

  const additionalFilter = [{ fieldFilter: 'programType', valueFilter: type }, { field: 'releaseYear', value: year }];

  for (let i = 0; i < additionalFilter.length; i += 1) {
    const { fieldFilter, valueFilter } = additionalFilter[i];

    if (valueFilter) {
      url += `&${fieldFilter}=${valueFilter}`;
    }
  }

  const { data } = await axios.get(url);
  return data;
};

export default fetchMovies;
