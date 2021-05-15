import React, { FC } from 'react';

import { ComponentA } from './component_a';
import { Sample01Context } from '../../../contexts/sample01_context'

export const ContextSample01Page: FC = () => {
  return (
    <Sample01Context.Provider value={ 'this is context sample'}>
      <ComponentA />
    </Sample01Context.Provider>
  )
}