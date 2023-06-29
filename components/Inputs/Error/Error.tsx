import React, { FC } from 'react';
import Text from '../../Text/Text';
import { IInputs } from '../IInputs';

const Error: FC<Required<Pick<IInputs, 'errorMessage'>>> = ({
    errorMessage,
}) => (
    <Text variant='p' className='text-xs text-error'>
        {errorMessage}
    </Text>
);

export default Error;
