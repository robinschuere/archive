import * from 'react';
import { customStyle } from './constants';

const Holiday = ({ color } : { color: 'red' | 'pink' | 'gray') => {
   return (
      <div
        style={{
          ...customStyle,
          'background-color': color,
        }}
      ></div>
    );
}  
