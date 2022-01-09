export default interface SortFields {
  field: string;
  order: 'asc' | 'desc';
  [key: string]: any;
}
