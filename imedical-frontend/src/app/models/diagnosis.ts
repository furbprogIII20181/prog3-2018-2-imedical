export class Diagnosis {
  public Issue: {
    ID: number;
    Accuracy: number;
    Name: string;
    ProfName: string;
    Description: string;
    DescriptionShort: string;
    MedicalCondition: string;
    PossibleSymptoms: string;
    TreatmentDescription: string;
  };
  public Specialisation: {
    ID: number;
    Name: string;
  };
}
