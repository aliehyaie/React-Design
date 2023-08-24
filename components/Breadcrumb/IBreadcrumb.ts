export interface BreadcrumbsProps {
    breadCrumbs: {
        label: string;
        url: string;
    }[];
    className?: string;
    separator?: string;
}
