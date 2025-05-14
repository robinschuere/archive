type CompetenceGridProps = {
  groups: any;
  topicsAndCompetences: any;
}
const CompetenceGrid = ({ groups, topicsAndCompetences}: CompetenceGridProps) => {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Competences</th>
          {groups.map(group => (
            <th key={group.name}>{group.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {topicsAndCompetences.map(({ topic, competences }) => (
          <>
            <tr>
              <td>
                <strong>{topic}</strong>
              </td>
            </tr>
            {competences.map(({ name, gridValues }) => (
              <tr key={name}>
                <td style={{ paddingLeft: '10px' }}>{name}</td>
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
                              <input type="checkbox" checked={s.completed} />
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
