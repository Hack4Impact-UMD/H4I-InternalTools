import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { firebaseConfig } from '../config/firebase';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export enum Status {
  SUBMITTED = 0,
  UNDER_REVIEW = 1,
  INTERVIEW = 2,
  REJECTED = 3,
  ACCEPTED = 4,
  CONFIRMED = 5,
  DECLINED = 6
}

//return type
export interface ApplicationStatus {
  status: Status;
  dateReceived: string;
  applicationUrl: string;
}

export async function getApplicationStatus(applicationId: string): Promise<ApplicationStatus> {
    try {
      const applicationRef = doc(db, 'applications', applicationId); //references application in firebase
      const applicationSnap = await getDoc(applicationRef); //gets document
  
      //no application
      if (!applicationSnap.exists()) {
        throw new Error('Application not found'); 
      }
  
      const data = applicationSnap.data();
      return {
        status: data.status,
        dateReceived: data.dateReceived.toDate().toLocaleDateString(),
        applicationUrl: data.applicationUrl
      };
    } catch (error) {
      console.error('Error fetching application status:', error);
      throw error;
    }
}

export async function setApplicationStatus(applicationId: string, newStatus: Status): Promise<void> {
  try {
      const applicationRef = doc(db, 'applications', applicationId); //references application in firebase
      const applicationSnap = await getDoc(applicationRef); //gets document
  
      //no application
      if (!applicationSnap.exists()) {
        throw new Error('Application not found'); 
      }

      //updating the status
      await updateDoc(applicationRef, {
          status: newStatus,
          lastUpdated: new Date()
      });
      
  } catch (error) {
      console.error('Error updating application status:', error);
      throw error;
  }
}


