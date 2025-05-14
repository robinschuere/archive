type GroupCompetencePreference = {
  ages: number[];
  ageParts: number[][];
};

type PersonCompetencePreference = {
  age: number;
  agePart: number;
};

type Competence<T> = T & {
  topic: string;
  name: string;
};

type PersonCompetence = {
  name: string;
  age: number;
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
  completed: boolean;
  competences: {
    name: string;
    gridValues: CompetenceCellValue[];
    completed: boolean;
  }[];
};
