import React from 'react';

const TextField = (props) => {
  return (
    <div className="mt-6">
      <label htmlFor={props.type} className="block mb-2 text-sm font-medium ">
        {props.label}
      </label>
      <input
        type={props.type}
        className={`${props.class} bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-blue-500 focus:ring-blue-500 hover:border-blue-500 block w-full p-2.5`}
        id={props.name}
        name={props.name}
        required
        placeholder={`Ingrese su ${props.label}`}
      />
    </div>
  );
};

export default TextField;
