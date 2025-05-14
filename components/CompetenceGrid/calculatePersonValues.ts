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
    let preferredAge = 0;
    let preferredAgePart = 0;
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
        preferredAge = preferredAge || age;
        preferredAgePart = preferredAgePart || agePart;
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
      topicsAndCompetences[index].competences.push({
        name,
        gridValues,
        completed: isCompletedByPerson,
        preferredAge,
        preferredAgePart,
      });
      topicsAndCompetences[index].competences.sort(
        (a, b) => a.preferredAge - b.preferredAge || a.preferredAgePart - b.preferredAgePart
      );
      topicsAndCompetences[index].completed = topicsAndCompetences[index].competences.every(s => s.completed);
    } else {
      topicsAndCompetences.push({
        topic,
        competences: [{ name, gridValues, completed: isCompletedByPerson, preferredAge, preferredAgePart }],
        completed: isCompletedByPerson,
      });
    }
  });

  if (selectedGroup !== ALL) {
    const group = groups.find(s => s.name === selectedGroup);
    if (!group) {
      return { topicsAndCompetences };
    }
    const filteredTopicsAndCompetences = topicsAndCompetences
      .filter(s => !s.completed)
      .map(topicAndCompetences => {
        return {
          ...topicAndCompetences,
          competences: topicAndCompetences.competences.filter(s => {
            // we do not show completed tracks!
            if (s.completed) {
              return false;
            }
            // tracks that are not completed yet (and shouldn't at a given age are not displayed)
            if (!s.completed && Math.min(...group.ages) < s.preferredAge) {
              return false;
            }
            return true;
          }),
        };
      });

    return { topicsAndCompetences: filteredTopicsAndCompetences };
  }

  return { topicsAndCompetences };
};
