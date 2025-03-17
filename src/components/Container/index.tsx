import React, { ReactNode } from 'react';
import { ContainerWrapper } from './styles';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Container({ children, className, fullWidth = false }: ContainerProps) {
  return (
    <ContainerWrapper className={className} fullWidth={fullWidth}>
      {children}
    </ContainerWrapper>
  );
}
