export type FilterParam = {
  name?: string;
  status?: string;
  category?: string;
};

export type SortParam = {
  sortBy?: string;
  order?: 'asc' | 'desc';
};
