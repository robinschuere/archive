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
    { topic: 'Ball-handling', name: 'Dribble with dominant hand', at: { age: 6, parts: [1] } },
    { topic: 'Ball-handling', name: 'Dribble with non-dominant hand', at: { age: 7, parts: [1] } },
  ],
};

export const competences: Competence[] = [
  {
    topic: 'Ball-handling',
    name: 'Dribble with dominant hand',
    at: {
      ages: [6],
      parts: [[1, 2, 3]],
    },
  },
  {
    topic: 'Ball-handling',
    name: 'Dribble with non-dominant hand',
    at: {
      ages: [7],
      parts: [[1, 2, 3]],
    },
  },
  {
    topic: 'Shooting',
    name: 'Throw at goal',
    at: {
      ages: [7],
      parts: [[1, 2, 3]],
    },
  },
];
