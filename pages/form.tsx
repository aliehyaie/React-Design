// This page is being used to show how you can use input collection with React Hook Form
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Input from '../components/Inputs/Input/Input';
import Button from '../components/Button/Button';
import { mobileRegex } from '../utils/validations/regex/regex';
import {
    invalidFormatMessage,
    requiredMessage,
} from '../utils/validations/messages/messages';
import Select from '../components/Inputs/Select/Select';
import Checkbox from '../components/Inputs/Checkbox/Checkbox';
import Radio from '../components/Inputs/Radio/Radio';
import Switch from '../components/Inputs/Switch/Switch';
import Range from '../components/Inputs/Range/Range';
import Calendar from '../components/Inputs/Calendar/Calendar';

interface IFormValues {
    fullName: string;
    date: string;
    mobile: string;
    foods: { label: string; value: number } | null;
    needFood: boolean;
    gender: string;
    isVegan: boolean;
    price: [number, number];
}

const Form = () => {
    const { handleSubmit, control, watch, formState } = useForm<IFormValues>({
        defaultValues: {
            fullName: '',
            date: '',
            mobile: '',
            foods: null,
            needFood: false,
            gender: 'male',
            isVegan: false,
            price: [0, 200000],
        },
    });

    const onSubmit: SubmitHandler<IFormValues> = data => {
        alert(JSON.stringify(data));
    };

    return (
        <main className='mx-auto flex h-screen w-screen flex-col items-center justify-center'>
            <form
                className='flex w-[500px] flex-col gap-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    control={control}
                    name='fullName'
                    render={({ field: { onChange } }) => (
                        <Input
                            required
                            placeholder='نام و نام خانوادگی'
                            label='نام و نام خانوادگی'
                            onChange={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='date'
                    rules={{
                        required: requiredMessage('تاریخ حرکت'),
                    }}
                    render={({ field: { onChange } }) => (
                        <Calendar
                            required
                            placeholder='تاریخ حرکت'
                            label='تاریخ حرکت'
                            onChange={onChange}
                            error={!!formState.errors.date}
                            errorMessage={formState.errors.mobile?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='mobile'
                    rules={{
                        required: requiredMessage('موبایل'),
                        pattern: {
                            value: mobileRegex,
                            message: invalidFormatMessage('موبایل'),
                        },
                    }}
                    render={({ field: { onChange } }) => (
                        <Input
                            required
                            placeholder='موبایل'
                            label='موبایل'
                            onChange={onChange}
                            error={!!formState.errors.mobile}
                            errorMessage={formState.errors.mobile?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='foods'
                    render={({ field: { onChange } }) => (
                        <Select
                            instanceId='foods'
                            label='غذا'
                            placeholder='انتخاب غذا'
                            options={[
                                {
                                    label: 'Pizza',
                                    value: 0,
                                },
                                {
                                    label: 'Burger',
                                    value: 1,
                                },
                                {
                                    label: 'Pasta',
                                    value: 2,
                                },
                            ]}
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='needFood'
                    render={({ field: { onChange } }) => (
                        <Checkbox label='غذا میخواهم' onChange={onChange} />
                    )}
                />

                <div className='flex gap-4'>
                    <Controller
                        control={control}
                        name='gender'
                        render={({ field: { onChange } }) => (
                            <Radio
                                checked={watch('gender') === 'male'}
                                label='مرد'
                                value='male'
                                id='male'
                                onChange={onChange}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='gender'
                        render={({ field: { onChange } }) => (
                            <Radio
                                checked={watch('gender') === 'female'}
                                label='زن'
                                value='female'
                                id='female'
                                onChange={onChange}
                            />
                        )}
                    />
                </div>
                <Controller
                    control={control}
                    name='isVegan'
                    render={({ field: { onChange } }) => (
                        <Switch label='گیاه خوار هستم' onChange={onChange} />
                    )}
                />
                <Controller
                    control={control}
                    name='price'
                    render={({ field: { onChange } }) => (
                        <Range
                            label='قیمت'
                            isSingle={false}
                            value={
                                formState.defaultValues?.price as [
                                    number,
                                    number
                                ]
                            }
                            max={20000}
                            step={100}
                            onChange={onChange}
                        />
                    )}
                />
                <Button label='تایید' type='submit' />
            </form>
        </main>
    );
};

export default Form;
