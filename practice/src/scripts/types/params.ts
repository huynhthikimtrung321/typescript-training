export type FilterParam = {
  sortBy: string;
  name?: string;
  status?: string;
  category?: string;
};

export interface SortParam {
  sortBy?: string;
  order?: 'asc' | 'desc';
}
