import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Day from './Day';
import { maxAmountOfDays, months } from './constants';

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [daysOfNoWork, setDaysOfNoWork] = useState([0,6]);
  const [daysTaken, setDaysTaken] = useState<string[]>([]);

  const toggleDay = (dayMonth: string) => {
    setDaysTaken((prev) => {
      if (prev.includes(dayMonth)) {
        return prev.filter(s => s !== dayMonth);
      } else {
        return [...prev, dayMonth];
      }
    });
  };

  const toggleDaysOfNoWork = (day: string) => {
    const value = parseInt(day, 10);
    setDaysOfNoWork((prev) => {
      if (prev.includes(value)) {
        return prev.filter(s => s !== value);
      } else {
        return [...prev, value];
      }
    });
  }

  const handleDaysTakenChange = (e) => {
    const regex = /[\d\|\,]/g;
    // we only match on the numeric values, the pipe symbol and the comma symbol. ie. 1|0 which represents the first of januari.
    const found = e.target.value.match(regex).join('');
    setDaysTaken(normalized.split(','));
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
                    daysNoWork={daysOfNoWork}
                    toggleDay={toggleDay}
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
        <Row class="text-center">Holidays taken: {daysTaken.length}</Row>
        <Row><textarea value={daysTaken} onChange={handleDaysTakenChange} /></Row>
        <Row>
          <div style={{ ...customStyle, 'background-color': 'gray' }}></div>
          Weekend days | not working days
        </Row>
        <Row>
          <div style={{ ...customStyle, 'background-color': 'red' }}></div>
          known official holidays
        </Row>
        <Row>
          <div style={{ ...customStyle, 'background-color': 'green' }}></div>
          Selected holidays
        </Row>
        <Row>
          <select
            multiple
            value={daysOfNoWork}
            onChange={(e) => {
              toggleDaysOfNoWork(e.target.value);
            }}
          >
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

export default Calendar
