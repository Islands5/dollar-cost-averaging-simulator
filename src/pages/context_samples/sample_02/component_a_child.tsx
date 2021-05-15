import React, { FC, useContext } from 'react';

import { Sample02Context } from '../../../contexts/sample02_context';

export const ComponentAChild: FC = () => {
  const { countConsumer, dispatchConsumer } = useContext(Sample02Context)
  return (
    <React.Fragment>
      <h1>ComponentAChildですよ</h1>
      <div>{countConsumer}</div>
      <button onClick={() => dispatchConsumer({type: 'A'}) }>ボタンです</button>
      <button onClick={() => dispatchConsumer({type: 'B'}) }>ボタンです</button>
      <button onClick={() => dispatchConsumer({type: 'C'}) }>ボタンです</button>
    </React.Fragment>
  )
}