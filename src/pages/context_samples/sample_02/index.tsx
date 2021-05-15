import React, { FC, useReducer } from 'react';

import { ComponentA } from './component_a';
import { Sample02Context } from '../../../contexts/sample02_context'

import { SampleReducer } from '../../../reducers/sample_reducer'

const initialState: number = 0

export const ContextSample02Page: FC = () => {
  const [count, dispatch] = useReducer(SampleReducer, initialState)

  return (
    <Sample02Context.Provider value={ { countConsumer: count, dispatchConsumer: dispatch } }>
      <h3>ルートのコンポーネントで表示してるcount</h3>
      <div>{ count }</div>
      <ComponentA />
    </Sample02Context.Provider>
  )
}