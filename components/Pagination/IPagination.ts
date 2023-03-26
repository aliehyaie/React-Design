export interface IPagination {
    onPageChange: (currentPage: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize?: number;
    className?: string;
}
