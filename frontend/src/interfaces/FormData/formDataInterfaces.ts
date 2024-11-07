// Question for the Product Manager application
export interface ProductManagerData {
  whyPM: string;
  ledAndDelegate: string;
  offTrack: string;
  unmotivatedTeam: string;
  failedDeadline: string;
  scenario: string;
  useNotion: string;
}

// Questions for the BootCamp application
export interface BootCampData {
  interest: string;
  newSkill: string;
  challengePersist: string;
}

// All forms will need to import this interface to update the state in the
// parent.
export interface FormProps<T> {
  onFormDataChange: (data: T) => void;
}
