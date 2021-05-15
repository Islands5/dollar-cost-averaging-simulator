import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

export const UserShowPage: FC = () => {
  const params = useParams<{ userId:string }>()

  return (
    <React.Fragment>
      <div>{ `UserShow: ${params.userId}` }</div>
      <div><Link to="/users">ユーザー一覧</Link></div>
      <div><Link to="/">トップ</Link></div>
    </React.Fragment>
  )
}