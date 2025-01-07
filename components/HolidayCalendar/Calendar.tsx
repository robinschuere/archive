import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Day from './Day.tsx';

const HolidayCalendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [dayOfNoWork, setDayOfNoWork] = useState(-1);
  const [daysTaken, setDaysTaken] = useState(0);
  const maxAmountOfDays = 31;
  const months = [
    'januari',
    'februari',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  const addDay = () => {
    setDaysTaken((prev) => prev + 1);
  }
  
  const removeDay = () => {
    setDaysTaken((prev) => prev - 1);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>#</td>
            {[...Array(maxAmountOfDays)].map((_v, index) => (
              <td>{index + 1}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(months.length)].map((_v, month) => (
            <tr>
              <td>{months[month]}</td>
              {[...Array(maxAmountOfDays)].map((_v, day) => (
                <td>
                  <Day
                    dayNoWork={dayOfNoWork}
                    addDay={addDay}
                    removeDay={removeDay}
                    year={year}
                    month={month}
                    day={day + 1}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ height: '50px' }} />
      <Container>
        <Row class="text-center">Holidays taken: {daysTaken}</Row>
        <Row>
          <div style={{ ...customStyle, 'background-color': 'gray' }}></div>
          Weekend days
        </Row>
        <Row>
          <div style={{ ...customStyle, 'background-color': 'red' }}></div>
          known official holidays
        </Row>
        <Row>
          <div style={{ ...customStyle, 'background-color': 'pink' }}></div>I do
          not work on this day
        </Row>
        <Row>
          <div style={{ ...customStyle, 'background-color': 'green' }}></div>
          Selected holidays
        </Row>
        <Row>
          <select
            value={dayOfNoWork}
            onChange={(e) => {
              console.log(e.target.value);
              setDayOfNoWork(e.target.value);
            }}
          >
            <option value={-1}>No day</option>
            <option value={1}>Monday</option>
            <option value={2}>Tuesday</option>
            <option value={3}>Wednesday</option>
            <option value={4}>Thursday</option>
            <option value={5}>Friday</option>
            <option value={6}>Saturday</option>
            <option value={0}>Sunday</option>
          </select>
        </Row>
      </Container>
    </div>
  );
};

export default MyHolidayCalendar
