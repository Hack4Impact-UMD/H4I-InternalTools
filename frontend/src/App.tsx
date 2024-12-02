// App.tsx
import "./App.css";
import { AuthProvider, useAuth } from "./components/test-auth/authhandle"; // Adjust the path as needed
import BootCampForm from "./components/Forms/BootCampForm"; // add form components
import GeneralInfoForm from "./components/Forms/GeneralInfoForm";
import SideBar from "./components/NavBar/SideBar";
import SignIn from "./components/test-auth/SignIn"; // signincomponent from other team
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { GeneralInfoData, BootCampData } from "./interfaces/FormData/formDataInterfaces"; // Import interfaces

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const [formComplete, setFormComplete] = useState<boolean>(false);

  // declaring the intial states for all our forms, we will have to update this
  // and send it to the database eventually
  const [generalInfoData, setGeneralInfoData] = useState<GeneralInfoData>({
    email: '',
    name: '',
    preferredName: '',
    year: '',
    major: '',
    minor: '',
    csClasses: [],
    csTopics: [],
    skills: '',
    resume: new File([], ''), 
    whyH4I: '',
    differences: '',
    awareness: '',
    commitments: '',
    involvement: '',
    initiative: '',
    giveBack: ''
  });

  const [formData, setFormData] = useState<BootCampData>({
    interest: '',
    newSkill: '',
    challengePersist: ''
  });

  // some filler code producted by copilot.
  // its most likely use in the future is for updating our stored form data.
  const handleFormDataChange = (field: keyof BootCampData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleGeneralInfoChange = (field: keyof GeneralInfoData, value: string | string[] | File) => {
    setGeneralInfoData((prevData) => ({ ...prevData, [field]: value }));
  };

  // what is put onto the screen!
  return (
    <div className="app-container d-flex">
      {isAuthenticated ? (
        <>
          <SideBar />
          <div className="content-container">
            <Routes>
              <Route
                path="/General-Information"
                element={
                  <GeneralInfoForm
                    sectionFormData={generalInfoData}
                    onFormDataChange={handleGeneralInfoChange}
                  />
                }
              />
              <Route
                path="/Bootcamp"
                element={
                  <BootCampForm
                    sectionFormData={formData}
                    onFormDataChange={handleFormDataChange}
                    // formComplete={formComplete}
                    // setFormComplete={setFormComplete}
                  />
                }
              />
            </Routes>
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;