import { useState } from 'react';

import { ageAndGroups, competences, person } from './data';
import { calculatePersonValues } from './calculatePersonValues';
import CompetenceGrid from './CompetenceGrid';
import { getPersonGroup } from './getPersonGroup';

const Page = () => {
  const [selectedAge, setSelectedAge] = useState('ALL');
  const groups = ageAndGroups.filter(s => (selectedAge === 'ALL' ? true : s.name === selectedAge));
  const { topicsAndCompetences } = calculatePersonValues(person, competences, ageAndGroups, selectedAge);
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        Name: {person.name} | age: {person.age} | group: {getPersonGroup(person)?.name}
      </div>
      Filters:
      <div style={{ display: 'flex', gap: '10px' }}>
        <select
          value={selectedAge}
          onChange={e => {
            setSelectedAge(e.target.value);
          }}
        >
          <option value="ALL">ALL</option>
          {ageAndGroups.map(s => (
            <option key={s.name} value={s.name}>
              {s.name} | ages: {s.ages.join(', ')}
            </option>
          ))}
        </select>
      </div>
      <CompetenceGrid topicsAndCompetences={topicsAndCompetences} groups={groups} />
    </div>
  );
};

export default Page;
