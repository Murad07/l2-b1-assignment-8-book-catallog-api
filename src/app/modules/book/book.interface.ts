export type GetBooksParams = {
  page?: number;
  size?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  search?: string;
};

export type GetBooksCat = {
  id: string;
  page?: number;
  size?: number;
};
