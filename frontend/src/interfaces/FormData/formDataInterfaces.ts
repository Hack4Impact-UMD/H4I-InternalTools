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
