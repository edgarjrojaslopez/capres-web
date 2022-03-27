import React from 'react';

const Card = (props) => {
  return (
    <form
      className=" px-4 w-4/5 md:w-1/3 flex justify-center items-center space-y-6 flex-col"
      onSubmit={submitForm}
    >
      {props.children}
    </form>
  );
};

export default Card;
