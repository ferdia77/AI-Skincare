import React from 'react'
import classNames from 'classnames';

const Diamond = ({
    size = 'w-[350px] j-[350px]',
    dotted = true,
    borderColourClass ='border-black',
    className = '',
    ...rest
}) => {
     return (
    <div className={classNames(
        size,
        'border',
        dotted ? 'border-dotted' : 'border-solid',
        borderColourClass,
        'rotate-45',
        className
    )}
    {...rest}
    />
  );
};

export default Diamond;
