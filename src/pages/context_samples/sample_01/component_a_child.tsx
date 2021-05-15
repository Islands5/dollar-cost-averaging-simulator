import React, { FC, useContext } from 'react';

import { Sample01Context } from '../../../contexts/sample01_context';

export const ComponentAChild: FC = () => {
  const sample_context_value = useContext(Sample01Context)

  return (
    <React.Fragment>
      <h1>ComponentAChildですよ</h1>
      <div>{ sample_context_value }</div>
    </React.Fragment>
  )
}