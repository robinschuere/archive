import { useState } from 'react';
import { customStyle } from './constants';

const Day = ({
    active,
    year,
    day,
    month,
    toggleDay,
    daysOfNoWork,
  }: {
    active: boolean;
    year: number;
    day: number;
    month: number;
    toggleDay: (dayMonth: string) => void;
    daysOfNoWork: number[];
  }) => {
    const date = new Date(year, month, day, 12);

    // Since we drop dates like the 31 of februari, we will not draw anything when we surpass the given month. Neat XD
    if (date.getMonth() !== month) return <div />;

    // Not every day is a workday. We can drop the weekends and extra days
    if (daysOfNoWork.includes(date.getDay()) {
      return <Holiday color="gray" />;
    }

    // Official holidays are also absent.
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
        onClick={() => toggleDay(`${day}|${month}`)}
      ></div>
    );
  };
