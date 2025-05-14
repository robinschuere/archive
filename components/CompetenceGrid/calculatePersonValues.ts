import { PersonCompetence, Competence, AgeAndGroup } from './types';
import { partsPerAge } from './constants';

export const calculatePersonValues = (person: PersonCompetence, competences: Competence[], groups: AgeAndGroup[]) => {
  const definedAges: DefinedAgeCompetence[] = [];
  groups.forEach(group => {
    group.ages.forEach(age => {
      for (let index = 0; index < partsPerAge; index++) {
        const agePart = index + 1;
        definedAges.push({
          age,
          groupName: group.name,
          agePart,
        });
      }
    });
  });
  const topicsAndCompetences: TableTopic[] = [];
  competences.forEach(({ topic, name, at }) => {
    let isCompletedByPerson = false;
    const gridValues = definedAges.map(({ age, groupName, agePart }) => {
      if (
        person.competences.find(
          s => s.name === name && s.topic === topic && s.at.age === age && s.at.parts[0] === agePart
        )
      ) {
        isCompletedByPerson = true;
      }
      if (at.ages.includes(age)) {
        return {
          groupName,
          age,
          agePart,
          color: 'green',
          completed: isCompletedByPerson,
        };
      }
      let color = 'purple';
      if (at.ages[0] >= age) {
        color = 'yellow';
      }
      if (at.ages[at.ages.length - 1] + 1 <= age) {
        color = 'orange';
      }
      if (at.ages[at.ages.length - 1] + 2 <= age) {
        color = 'red';
      }
      return {
        groupName,
        age,
        agePart,
        color,
        completed: isCompletedByPerson,
      };
    });
    const index = topicsAndCompetences.findIndex(s => s.topic === topic);
    if (index > -1) {
      topicsAndCompetences[index].competences.push({ name, gridValues });
    } else {
      topicsAndCompetences.push({
        topic,
        competences: [{ name, gridValues }],
      });
    }
  });

  return { topicsAndCompetences };
};
