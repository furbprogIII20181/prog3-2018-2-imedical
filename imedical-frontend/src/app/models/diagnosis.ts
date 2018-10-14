export class Diagnosis {
  public Issue: {
    ID: number;
    Accuracy: number;
    Name: string;
    ProfName: string;
    Description: string;
    DescriptionShort: string;
    MedicalCondition: string;
    PossibleSymptoms;
    TreatmentDescription;
  };
  public Specialisation: {
    ID: number;
    Name: string;
  };
}
