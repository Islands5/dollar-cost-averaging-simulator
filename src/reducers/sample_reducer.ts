import { Reducer } from "react"

// TODO: contexts/sample02_contextと同じ記述
interface actionType {
  type: string
}

export const SampleReducer: Reducer<number, actionType> = (currentState: number, action: actionType): number => {
  switch(action.type) {
    case 'A':
      return currentState + 1
    case 'B':
      return currentState + 2
    case 'C':
      return currentState + 3
    default:
      throw 'no type'
  }
}