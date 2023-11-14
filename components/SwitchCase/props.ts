import type { FC, PropsWithChildren } from 'react';

type SwitchProps = FC<PropsWithChildren<{ expression?: unknown }>>;

type CaseProps = FC<PropsWithChildren<{ value?: unknown }>>;

export type { SwitchProps, CaseProps};
