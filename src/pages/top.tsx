import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const TopPage: FC = () => {
  return (
    <React.Fragment>
      <div>TopPage</div>
      <div><Link to="/users">ユーザー一覧</Link></div>
      <h3>階層が深くなるコンポーネント</h3>
      <div><Link to="/context_samples/01">useContextを使ってみる例</Link></div>
      <div><Link to="/context_samples/02">useContextとuseReducerを組み合わせる</Link></div>
    </React.Fragment>
  )
}