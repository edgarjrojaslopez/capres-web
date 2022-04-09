import React from 'react';
import { useParams } from 'react-router-dom';

const UserView = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default UserView;
