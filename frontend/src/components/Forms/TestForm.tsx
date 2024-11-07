import React, { useState } from "react";
import {
  BootCampData,
  ProductManagerData,
} from "../../interfaces/FormData/formDataInterfaces";

import BootCampForm from "./BootCampForm";
import ProductManagerForm from "./ProductManagerForm";

// This interface maps each form section to its specific datatype which allows
// TS to infer the correct type of data based on formSection.
interface FormDataMap {
  bootCampData: BootCampData;
  productManagerData: ProductManagerData;
  // Add more formData types (engineer, sourcing, etc.) when nec
}

type FormSection = keyof FormDataMap;

const TestForm = () => {
  const [formData, setFormData] = useState({
    bootCampData: {} as BootCampData,
    productManagerData: {} as ProductManagerData,
  });

  // 'Section' tells TS which FormData type to match data to.
  const handleFormDataChange = <Section extends FormSection>(
    formSection: Section,
    data: FormDataMap[Section]
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [formSection]: data,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <BootCampForm
        onFormDataChange={(data) => handleFormDataChange("bootCampData", data)}
      />
      <ProductManagerForm
        onFormDataChange={(data) => handleFormDataChange("productManagerData", data)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestForm;
