import { Issue } from './../../models/issue';
import { Diagnosis } from './../../models/diagnosis';
import { HomeService } from './../../containers/home/home.service';
import { OnInit, Component } from '@angular/core';
import { Symptom } from '../../models/symptom';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  diagnosis: Diagnosis[];
  symptoms: Symptom[];
  issues: Issue[];
  loaded = false;
  currentUser = {};
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getToken().subscribe(data => {
      const token = data;
      this.symptoms = this.homeService.getSelectedSymptoms();
      this.homeService
        .getDiagnosis(token, this.symptoms)
        .subscribe(diagnosis => {
          this.diagnosis = diagnosis;
          console.log(diagnosis);
          diagnosis.forEach((diagnosis, i) => {
            if (diagnosis.Issue.Accuracy > 5) {
              this.homeService
                .getIssue(token, diagnosis.Issue.ID)
                .subscribe(issue => {
                  diagnosis.Issue.DescriptionShort = issue.DescriptionShort;
                  diagnosis.Issue.MedicalCondition = issue.MedicalCondition;
                  diagnosis.Issue.TreatmentDescription =
                    issue.TreatmentDescription;
                  diagnosis.Issue.Description = issue.Description;
                  this.loaded = true;
                  localStorage.setItem('diagnosis', JSON.stringify(diagnosis));
                });
            }
          });
        });
    });
  }
}
