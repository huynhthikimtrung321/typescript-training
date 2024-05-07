export type FilterParam = {
  name?: string;
  status?: string;
  category?: string;
};

export interface SortParam {
  sortBy?: string;
  order?: 'asc' | 'desc';
}
