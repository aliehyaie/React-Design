import type { FC, PropsWithChildren } from 'react';

type ISwitch = FC<PropsWithChildren<{ expression?: unknown }>>;

type ICase = FC<PropsWithChildren<{ value?: unknown }>>;

export type { ISwitch, ICase };
