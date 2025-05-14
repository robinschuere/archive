type GroupCompetencePreference = {
  ages: number[];
  parts: number[][];
};

type PersonCompetencePreference = {
  age: number;
  agePart: number;
};

type Competence<T> = {
  topic: string;
  name: string;
  at: T;
};

type PersonCompetence = {
  name: string;
  age: 6;
  competences: Competence<PersonCompetencePreference>[];
};

type AgeAndGroup = {
  ages: number[];
  name: string;
};

type DefinedAgeCompetence = {
  age: number;
  groupName: string;
  agePart: number;
};

type CompetenceCellValue = {
  groupName: string;
  age: number;
  agePart: number;
  color: string;
  completed: boolean;
  isDisabled: boolean;
};

type TableTopic = {
  topic: string;
  competences: {
    name: string;
    gridValues: CompetenceCellValue[];
  }[];
};
