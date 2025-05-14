import { ageAndGroups } from './data';

export const getPersonGroup = (person: PersonCompetence) => {
  return ageAndGroups.find(s => s.ages.includes(person.age));
};
