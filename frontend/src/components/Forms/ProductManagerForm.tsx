import { useState } from "react";
import { handleFieldChange } from "../../HandleChangeFunctions/handleChanges";
import {
  FormProps,
  ProductManagerData,
} from "../../interfaces/FormData/formDataInterfaces";

import Radiobox from "../FormComponents/Radiobox";
import TextAnswer from "../FormComponents/TextAnswer";

const ProductManagerForm: React.FC<FormProps<ProductManagerData>> = ({
  onFormDataChange,
}) => {
  const [productManagerData, setProductManagerData] = useState({
    whyPM: "",
    ledAndDelegate: "",
    offTrack: "",
    unmotivatedTeam: "",
    failedDeadline: "",
    scenario: "",
    useNotion: "",
  });

  //   const handleFieldChange = (field: keyof ProductManagerData, value: string) => {
  //     setProductManagerData((prevData) => {
  //       const updatedData = { ...prevData, [field]: value };
  //       onFormDataChange(updatedData);
  //       return updatedData;
  //     });
  //   };

  return (
    <div>
      <div>
        <strong>PM Responsibilies</strong> add later
      </div>

      <TextAnswer
        heading="Why do you want to become a PM at Hack4Impact-UMD and why are you a strong fit for this role?"
        subHeading="Please limit your response to 500 words."
        value={productManagerData.whyPM}
        onChange={(value) =>
          handleFieldChange(setProductManagerData, onFormDataChange, "whyPM", value)
        }
        // onChange={(value) => handleFieldChange("whyPM", value)}
        placeholder="Long answer text"
        required
      />

      <TextAnswer
        heading="Tell us about a time you led a team and how you delegated work amongst your team?"
        subHeading="Please limit your response to 500 words."
        value={productManagerData.ledAndDelegate}
        onChange={(value) =>
          handleFieldChange(
            setProductManagerData,
            onFormDataChange,
            "ledAndDelegate",
            value
          )
        }
        placeholder="Long answer text"
        required
      />

      <TextAnswer
        heading="How do you recognize that a project is off-track and what would you do to address it?"
        value={productManagerData.offTrack}
        onChange={(value) =>
          handleFieldChange(
            setProductManagerData,
            onFormDataChange,
            "offTrack",
            value
          )
        }
        placeholder="Long answer text"
        required
      />

      <TextAnswer
        heading="How do you manage unmotivated team members or team members who are not working to their full potential?"
        subHeading="Please limit your response to a short paragraph (250 words)."
        value={productManagerData.unmotivatedTeam}
        onChange={(value) =>
          handleFieldChange(
            setProductManagerData,
            onFormDataChange,
            "unmotivatedTeam",
            value
          )
        }
        placeholder="Long answer text"
        required
      />

      <TextAnswer
        heading="Tell us about a time you couldn't meet a goal or deadline and how you dealt with/learned from it."
        value={productManagerData.failedDeadline}
        onChange={(value) =>
          handleFieldChange(
            setProductManagerData,
            onFormDataChange,
            "failedDeadline",
            value
          )
        }
        placeholder="Long answer text"
        required
      />

      <TextAnswer
        heading="Respond to the following scenario: 2 weeks out from the project deadline, the client reaches out and proposes several new features that were not previously discussed, how do you handle this situation?"
        value={productManagerData.scenario}
        onChange={(value) =>
          handleFieldChange(
            setProductManagerData,
            onFormDataChange,
            "scenario",
            value
          )
        }
        placeholder="Long answer text"
        required
      />

      <Radiobox
        heading="Are you familiar with using Notion"
        options={["Yes", "No"]}
        value={productManagerData.useNotion}
        onChange={(value) =>
          handleFieldChange(
            setProductManagerData,
            onFormDataChange,
            "useNotion",
            value
          )
        }
        choiceName="notion"
        required
        other
      />
    </div>
  );
};
export default ProductManagerForm;
