import { createContext, Dispatch, Reducer } from 'react';

interface actionType {
  type: string
}

// ここはtypes以下
interface Sample02ContextValue {
  countConsumer: number,
  dispatchConsumer: Dispatch<actionType>
}

export const Sample02Context = createContext<Sample02ContextValue>(null)