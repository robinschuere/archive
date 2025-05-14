import { useState } from 'react';

import { agePartsDescription } from './constants';

type CompetenceGridProps = {
  groups: AgeAndGroup[];
  topicsAndCompetences: TableTopic[];
};

const CompetenceGrid = ({ groups, topicsAndCompetences }: CompetenceGridProps) => {
  const [collapsedValues, setCollapsedValues] = useState<string[]>([]);
  return (
    <table width="100%">
      <thead>
        <tr>
          <th style={{ textAlign: 'left', minWidth: '200px' }}>Competences</th>
          {groups.map(group => (
            <th key={group.name}>{group.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {topicsAndCompetences.map(({ topic, competences }) => (
          <>
            <tr>
              <td style={{ paddingLeft: '10px' }}>
                <strong>{topic}</strong>{' '}
                <button
                  type="button"
                  onClick={() =>
                    setCollapsedValues(prev => {
                      if (prev.includes(topic)) {
                        return prev.filter(s => s !== topic);
                      }
                      return [...prev, topic];
                    })
                  }
                >
                  {collapsedValues.includes(topic) ? '+' : '-'}
                </button>
              </td>
            </tr>
            {!collapsedValues.includes(topic) &&
              competences.map(({ name, gridValues }) => (
                <tr key={name}>
                  <td
                    style={{
                      paddingLeft: '20px',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      maxWidth: '200px',
                    }}
                    title={name}
                  >
                    {name}
                  </td>
                  {groups.map(group => (
                    <td key={group.name}>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {gridValues
                          .filter(s => s.groupName === group.name)
                          .map(s => (
                            <td key={`${s.groupName}${s.age}${s.agePart}`} style={{ backgroundColor: s.color }}>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '30px',
                                  height: '30px',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={s.completed}
                                  disabled={s.isDisabled}
                                  title={agePartsDescription[s.agePart]}
                                />
                              </div>
                            </td>
                          ))}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
          </>
        ))}
      </tbody>
    </table>
  );
};
export default CompetenceGrid;
