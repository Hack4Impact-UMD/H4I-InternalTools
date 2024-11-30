import {
  BootCampData,
  FormProps,
} from "../../interfaces/FormData/formDataInterfaces";

import TextAnswer from "../FormComponents/TextAnswer";
import { useFormPersistence } from '../../hooks/useFormPersistence';

const STORAGE_KEY = 'product_manager_form_data';

// Consider the question of interest in applying for porject teams
const BootCampForm: React.FC<FormProps<BootCampData>> = ({
  onFormDataChange,
  sectionFormData,
}) => {

  useFormPersistence(
    STORAGE_KEY,
    { ...sectionFormData, testFile: null },
    (savedData) => {
      Object.entries(savedData).forEach(([key, value]) => {
        if (value && key !== 'testFile') {
          onFormDataChange(key as keyof BootCampData, value);
        }
      });
    }
  );

  return (
    <div className="form-body">
      <div className="form-heading">
        <strong>Bootcamp Questions</strong>
      </div>

      <div className="form-questions">
        <p>Bootcamp Responsibilities:</p>
        <p className="form-responsibilities-list">
          - responsible for implementation of all technological aspects of product<br />
          - attend team meetings<br />
          - complete assigned tasks by the given deadline<br />
          - update Tech Lead and PM with any relevant issues<br />
        </p>
        <TextAnswer
          heading="Tell us why you are interested in joining the bootcamp."
          subHeading="Please limit your response to a short paragrah (250 words)."
          value={sectionFormData.interest}
          onChange={(value) => onFormDataChange("interest", value)}
          placeholder="Long answer text"
          required
        />

        <TextAnswer
          heading="Tell us about a time you had to learn a new skill to accomplish a task."
          value={sectionFormData.newSkill}
          onChange={(value) => onFormDataChange("newSkill", value)}
          placeholder="Long answer text"
          required
        />

        <TextAnswer
          heading="Describe a time when you had to persist through a significant challenge. How did you approach it and what did you learn from that experience?"
          value={sectionFormData.challengePersist}
          onChange={(value) => onFormDataChange("challengePersist", value)}
          placeholder="Long answer text"
          required
        />
      </div>
    </div>
  );
};

export default BootCampForm;
