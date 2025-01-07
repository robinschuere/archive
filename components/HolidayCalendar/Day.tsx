import { useState } from 'react';
import { customStyle } from './constants';

const Day = ({
    year,
    day,
    month,
    addDay,
    removeDay,
    dayNoWork,
  }: {
    year: number;
    day: number;
    month: number;
    addDay: () => void;
    removeDay: () => void;
    dayNoWork: number;
  }) => {
    const date = new Date(year, month, day, 12);
    const [active, setActive] = useState(false);

    if (date.getMonth() !== month) return <div />;

    if (date.getDay() === dayNoWork) {
      return <Holiday color="pink" />;
    }

    if (date.getDay() === 0 || date.getDay() === 6) {
      return <Holiday color="gray" />;
    }
    if (
      holidays.find((dayMonth) => {
        return dayMonth === `${day}|${month}`;
      })
    ) {
      return <Holiday color="red" />;
    }
    return (
      <div
        style={{
          ...customStyle,
          'background-color': active ? 'green' : 'white',
        }}
        onClick={() => {
          setActive(!active);
          if (active) {
            removeDay();
          } else {
            addDay();
          }
        }}
      ></div>
    );
  };
