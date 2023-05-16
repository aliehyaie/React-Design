import SelectBox from 'react-select';
import React from 'react';
import { ISelect } from './ISelect';
import Label from '../Label/Label';
import Error from '../Error/Error';

const Select = ({
    label,
    error,
    errorMessage,
    required,
    className,
    labelClassName,
    ...props
}: ISelect) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <Label
                    label={label}
                    error={error}
                    required={required}
                    labelClassName={labelClassName}
                />
            )}
            <SelectBox
                {...props}
                options={props.options}
                placeholder={props.placeholder || ''}
                theme={theme => ({ ...theme })}
                styles={{
                    control: defaultStyles => ({
                        ...defaultStyles,
                        '&:hover': {
                            borderColor: '#677887',
                        },
                        width: '100%',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        borderColor: error ? '#DC362E' : '#F2F3F5',
                        boxShadow: 'none',
                        fontSize: '0.875rem',
                        borderRadius: '0.75rem',
                        padding: '0.25rem',
                    }),
                    option: (defaultStyles, state) => ({
                        ...defaultStyles,
                        '&:hover': {
                            backgroundColor: '#F2F3F5',
                        },
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        backgroundColor: state.isSelected ? 'transparent' : '',
                        color: '#041320',
                        fontSize: '0.875rem',
                    }),
                    placeholder: defaultStyles => ({
                        ...defaultStyles,
                        color: '#9BA9B3',
                    }),
                    indicatorSeparator: () => ({ display: 'none' }),
                    ...props.styles,
                }}
            />
            {error && errorMessage && <Error errorMessage={errorMessage} />}
        </div>
    );
};

export default Select;
