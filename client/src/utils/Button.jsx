import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cls } from './utils';

const classes = {
  base: 'focus:outline-none rounded-md transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-4 py-2',
    large: 'px-8 py-3 text-lg',
  },
  width: {
    full: 'w-full',
    half: 'w-1/2',
    third: 'w-1/3',
  },
  font_size: {
    small: 'text-sm',
    normal: 'text-base',
    large: 'text-lg',
    xl: 'text-xl',
  },
  font_weight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  variant: {
    primary:
      'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
  },
};

export const Button = forwardRef(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'normal',
      width = 'full',
      font_size = 'normal',
      font_weight = 'normal',
      pill,
      disabled = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.width[width]}
                ${classes.font_size[font_size]}
                ${classes.font_weight[font_weight]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
      {...props}
    >
      {children}
    </button>
  )
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.oneOf(['submit', 'button']),
  className: PropTypes.string,
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  width: PropTypes.oneOf(['full', 'half', 'third']),
  font_size: PropTypes.oneOf(['small', 'normal', 'large', 'xl']),
  font_weight: PropTypes.oneOf([
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
  ]),
};

export default Button;
