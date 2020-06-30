export interface Pagination {
  items: []
  meta: PaginationMeta
}

export interface PaginationMeta {
  currentPage: number
  itemCount: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
