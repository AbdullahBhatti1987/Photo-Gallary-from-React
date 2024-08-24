import React from 'react';
import { Dropdown } from 'flowbite-react';


const DropDownList = ({ text, className, arr }) => {
  return (
    <Dropdown label={text} className={className} inline>
      {arr.map((item, index) => (
        <Dropdown.Item key={index}>
          {item}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default DropDownList;
