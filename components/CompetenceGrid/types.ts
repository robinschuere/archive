type Competence = {
  topic: string;
  name: string;
  at: { ages: number[]; parts: [number[]] };
};

type PersonCompetence = {
  name: string;
  age: 6;
  competences: Competence[];
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
};

type TableTopic = {
  topic: string;
  competences: {
    name: string;
    gridValues: CompetenceCellValue[];
  }[];
};
