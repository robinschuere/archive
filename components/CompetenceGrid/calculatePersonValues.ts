import { ALL, partsPerAge } from './constants';

export const calculatePersonValues = (
  person: PersonCompetence,
  competences: Competence<GroupCompetencePreference>[],
  groups: AgeAndGroup[],
  selectedGroup?: string
) => {
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
  competences.forEach(({ topic, name, ages, ageParts }) => {
    let isCompletedByPerson = false;
    const gridValues = definedAges.map(({ age, groupName, agePart }) => {
      let isCompletedNow = false;
      if (
        person.competences.find(s => s.name === name && s.topic === topic && s.age === age && s.agePart === agePart)
      ) {
        isCompletedNow = true;
        isCompletedByPerson = true;
      }
      const ageIndex = ages.findIndex(s => s === age);
      if (ageIndex > -1 && ageParts[ageIndex].includes(agePart)) {
        return {
          groupName,
          age,
          agePart,
          color: 'green',
          completed: isCompletedByPerson,
          isDisabled: isCompletedByPerson && !isCompletedNow,
        };
      }
      let color = 'white';

      if (ages[ages.length - 1] + 1 <= age) {
        color = 'yellow';
      }
      if (ages[ages.length - 1] + 2 <= age) {
        color = 'orange';
      }
      if (ages[ages.length - 1] + 3 <= age) {
        color = 'red';
      }
      return {
        groupName,
        age,
        agePart,
        color,
        completed: isCompletedByPerson,
        isDisabled: !!isCompletedByPerson,
      };
    });
    const index = topicsAndCompetences.findIndex(s => s.topic === topic);
    if (index > -1) {
      topicsAndCompetences[index].competences.push({ name, gridValues, completed: isCompletedByPerson });
      topicsAndCompetences[index].completed = topicsAndCompetences[index].competences.every(s => s.completed);
    } else {
      topicsAndCompetences.push({
        topic,
        competences: [{ name, gridValues, completed: isCompletedByPerson }],
        completed: isCompletedByPerson,
      });
    }
  });

  if (selectedGroup !== ALL) {
    const filteredTopicsAndCompetences = topicsAndCompetences
      .filter(s => !s.completed)
      .map(topicAndCompetences => {
        return {
          ...topicAndCompetences,
          competences: topicAndCompetences.competences.filter(s => !s.completed),
        };
      });

    return { topicsAndCompetences: filteredTopicsAndCompetences };
  }

  return { topicsAndCompetences };
};
