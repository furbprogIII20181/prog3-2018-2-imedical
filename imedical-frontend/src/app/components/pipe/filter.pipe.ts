import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'symptomSearch' })
export class SymptomFilterPipe implements PipeTransform {
  public transform(symptoms: any[], searchText: any): any {
    if (!searchText || !symptoms) {
      return symptoms;
    }
    return symptoms.filter(
      symptom =>
        symptom.Name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
  }
}
