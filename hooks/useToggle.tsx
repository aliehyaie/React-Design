import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

const UseToggle = (
    defaultValue?: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
    const [value, setValue] = useState(!!defaultValue);

    const toggle = useCallback(() => setValue(x => !x), []);

    return [value, toggle, setValue];
};

export default UseToggle;
