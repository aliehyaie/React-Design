import SelectBox from 'react-select';
import Label from '../Label';
import Error from '../Error';
import type { SelectProps } from './props';

const Select = ({
    label,
    error,
    errorMessage,
    required,
    className,
    labelClassName,
    ...props
}: SelectProps) => {
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
                classNames={{
                    control: state => `shadow-none text-sm rounded-xl p-1
                    w-full transition-all duration-200 hover:border-grey-7
                    ${state.isFocused && !error ? '!border-text' : ''}
                     ${error ? 'border-error' : 'border-grey-6'}`,
                    option: state => {
                        return `
                         text-text text-sm
                        ${state.isSelected ? 'bg-transparent' : ''}
                         hover:bg-grey-6 transition-all duration-200`;
                    },
                    placeholder: defaultStyles =>
                        `${defaultStyles} text-grey-8`,
                    indicatorSeparator: () => 'hidden',
                }}
            />
            {error && errorMessage && <Error errorMessage={errorMessage} />}
        </div>
    );
};

export default Select;
