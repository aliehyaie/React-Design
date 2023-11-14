export interface BadgeProps {
    type?: 'circular' | 'normal';
    isAbsolute?: boolean;
    position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
    value?: string;
    severity?: 'warning' | 'info' | 'success' | 'error';
    className?: string;
}
