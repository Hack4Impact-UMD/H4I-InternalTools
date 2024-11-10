// Questions for the Product Manager application
export interface ProductManagerData {
  whyPM: string;
  ledAndDelegate: string;
  offTrack: string;
  unmotivatedTeam: string;
  failedDeadline: string;
  scenario: string;
  useNotion: string;
  testFile: File;
  testCB: string[];
}

// Questions for the BootCamp application
export interface BootCampData {
  interest: string;
  newSkill: string;
  challengePersist: string;
}

//Questions for the Engineer app
export interface EngineerData {
  whyEngineer: string;
  engineerFit: string;
  gitExperience: string;
  codeExperience: string;
  mistakeExperience: string;
  sprintExperience: string;
  technicalSubmission: string;
  comments: string;
}

//Questions for the Tech Lead app
export interface TechLeadData {
  whyTechLead: string;
  techLeadFit: string;
  gitExperience: string;
  codeExperience: string;
  projectExperience: string;
  technicalSubmission: string;
  comments: string;
}


// All forms will need to import this interface to update the state in the
// parent.
export interface FormProps<T extends object> {
  onFormDataChange: (
    field: keyof T,
    value: T[keyof T],
    otherUnchecked?: boolean
  ) => void;
  sectionFormData: T;
}
