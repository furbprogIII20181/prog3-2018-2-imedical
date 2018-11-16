import { Router } from '@angular/router';
import { Issue } from './../../models/issue';
import { Diagnosis } from './../../models/diagnosis';
import { HomeService } from './../../containers/home/home.service';
import { OnInit, Component } from '@angular/core';
import { Symptom } from '../../models/symptom';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  diagnosis: Diagnosis[];
  symptoms: number[];
  gender: string;
  birthYear: string;
  issues: Issue[];
  loaded = false;
  currentUser = {};
  constructor(
    private homeService: HomeService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.homeService.getToken().subscribe(data => {
      const token = data;
      this.symptoms = this.homeService.getSelectedSymptoms();
      this.gender = this.homeService.getGender();
      this.birthYear = this.homeService.getBirthYear();
      this.homeService
        .getDiagnosis(token, this.symptoms, this.gender, this.birthYear)
        .subscribe(
          diagnosis => {
            if (Array.isArray(diagnosis) && !diagnosis.length) {
              this.snackBar.open(
                'None diagnosis were found for the inputed symptoms, try inputing less symptoms',
                'OK!',
                {
                  duration: 10000
                }
              );
              this.router.navigate(['/symptoms']);
            }
            this.diagnosis = diagnosis;
            diagnosis.forEach((diagnose, i) => {
              if (diagnose.Issue.Accuracy > 5) {
                this.homeService
                  .getIssue(token, diagnose.Issue.ID)
                  .subscribe(issue => {
                    diagnose.Issue.DescriptionShort = issue.DescriptionShort;
                    diagnose.Issue.MedicalCondition = issue.MedicalCondition;
                    diagnose.Issue.TreatmentDescription =
                      issue.TreatmentDescription;
                    diagnose.Issue.Description = issue.Description;
                    this.loaded = true;
                  });
              }
            });
          },
          err => {
            this.snackBar.open(
              'None diagnosis were found for the inputed symptoms, try inputing less symptoms',
              'OK!',
              {
                duration: 10000
              }
            );
            this.router.navigate(['/symptoms']);
          }
        );
    });
  }
}
