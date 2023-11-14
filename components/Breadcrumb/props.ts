export interface BreadcrumbProps {
    breadCrumbs: {
        label: string;
        url: string;
    }[];
    className?: string;
    separator?: string;
}
