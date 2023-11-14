import Text from '../../Text';
import type { FC } from 'react';
import type { InputsProps } from '../props';

const Error: FC<Required<Pick<InputsProps, 'errorMessage'>>> = ({
    errorMessage,
}) => (
    <Text variant='p' className='text-xs text-error'>
        {errorMessage}
    </Text>
);

export default Error;
