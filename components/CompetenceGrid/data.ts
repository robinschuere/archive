import type {
  AgeAndGroup,
  PersonCompetence,
  Competence,
  GroupCompetencePreference,
} from "./types";

export const ageAndGroups: AgeAndGroup[] = [
  { ages: [6, 7], name: 'U08' },
  { ages: [8, 9], name: 'U10' },
  { ages: [10, 11], name: 'U12' },
  { ages: [12, 13], name: 'U14' },
  { ages: [14, 15], name: 'U16' },
  { ages: [16, 17], name: 'U18' },
  { ages: [18, 19, 20], name: 'U21' },
];

export const person: PersonCompetence = {
  name: 'Robin Schuerewegen',
  age: 6,
  competences: [
    { topic: 'Ball-handling', name: 'Dribble with dominant hand', age: 6, agePart: 1 },
    { topic: 'Ball-handling', name: 'Dribble with non-dominant hand', age: 7, agePart: 1 },
  ],
};

export const competences: Competence[] = [
  {
    topic: 'Ball-handling',
    name: 'Dribble with dominant hand',
    ages: [6],
    ageParts: [[1, 2, 3]],
  },
  {
    topic: 'Ball-handling',
    name: 'Dribble with non-dominant hand',
    ages: [7],
    ageParts: [[1, 2, 3]],
  },
  {
    topic: 'Shooting',
    name: 'Throw at goal',
    ages: [7],
    ageParts: [[1, 2, 3]],
  },
];
