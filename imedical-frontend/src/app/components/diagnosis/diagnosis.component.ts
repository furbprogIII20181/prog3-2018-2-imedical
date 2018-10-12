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
  loaded = false;
  currentUser = {};
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getToken().subscribe(data => {
      this.symptoms = this.homeService.getSelectedSymptoms();
      this.homeService
        .getDiagnosis(data, this.symptoms)
        .subscribe(diagnosis => {
          this.diagnosis = diagnosis;
          console.log(diagnosis);
          this.loaded = true;
        });
    });
  }
}
