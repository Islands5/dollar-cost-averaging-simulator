import React, { FC } from 'react';

import { ComponentAChild } from './component_a_child';

export const ComponentA: FC = () => {
  return (
    <React.Fragment>
      <h1>ComponentAですよ</h1>
      <ComponentAChild />
    </React.Fragment>
  )
}