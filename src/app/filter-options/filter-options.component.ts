import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs'
import { UniversityService } from 'src/Services/university.service';
@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent implements OnInit, OnDestroy {
  filterForm:FormGroup = new FormGroup({})
  constructor(
    private universityService: UniversityService,
    private fb: FormBuilder,
  ) { }
  private _optionsSubscription: Subscription = new Subscription()
  @Output() optionsSelected = new EventEmitter<any[]>();

  selectedOptions: any = [];
  countryOptions: [] = []
  disicplinesOptions: any = [];
  degreesOptions: any = [];
  tuitionFeesOptions: any = [];
  partnershipTypeOptions: any = [];
  saudiMinistryOptions: any = [];

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      countriesFormArray:  this.fb.array([]),
      disciplineFormArray:  this.fb.array([...this.disicplinesOptions]),
      degreeFormArray:  this.fb.array([...this.degreesOptions]),
      tuitionFeeFormArray:  this.fb.array([...this.tuitionFeesOptions]),
      partnerTypeFormArray:  this.fb.array([...this.partnershipTypeOptions]),
      saudiMinistryFormArray:  this.fb.array([...this.saudiMinistryOptions]),
    })
    this.loadFilterOptions();
    console.log(this.filterForm.get('countriesFormArray'));
    
  }

  loadFilterOptions(): void {
    this._optionsSubscription = this.universityService.getFilterOptions().subscribe(options => {
      const { countries,disciplines,degrees,tuitionFee,partnershipType,saudiarabianMinistryOfEducation}:any = options
      this.countryOptions = countries;
      this.disicplinesOptions = disciplines;
      this.degreesOptions = degrees;
      this.tuitionFeesOptions = tuitionFee;
      this.partnershipTypeOptions = partnershipType;
      this.saudiMinistryOptions = saudiarabianMinistryOfEducation;
      const countryArr = this.filterForm.get('countriesFormArray') as FormArray
      countries.forEach((item:any) => {
        countryArr.push(new FormControl(item))
      })
      const disciplineArr = this.filterForm.get('disciplineFormArray') as FormArray
      disciplines.forEach((item:any) => {
        disciplineArr.push(new FormControl(item))
      })
      const degreeArr = this.filterForm.get('degreeFormArray') as FormArray
      degrees.forEach((item:any) => {
        degreeArr.push(new FormControl(item))
      })
      const tuitionFeeArr = this.filterForm.get('tuitionFeeFormArray') as FormArray
      tuitionFee.forEach((item:any) => {
        tuitionFeeArr.push(new FormControl(item))
      })
      const partnerArr = this.filterForm.get('partnerTypeFormArray') as FormArray
      partnershipType.forEach((item:any) => {
        partnerArr.push(new FormControl(item))
      })
      const saudiArr = this.filterForm.get('saudiMinistryFormArray') as FormArray
      saudiarabianMinistryOfEducation.forEach((item:any) => {
        saudiArr.push(new FormControl(item))
      })
    });
  }

  getCountryFormControls(){
    return (this.filterForm.get('countriesFormArray') as FormArray).controls 
  }
  getDisciplineFormControls(){
    return (this.filterForm.get('disciplineFormArray') as FormArray).controls 
  }
  getDegreeFormControls(){
    return (this.filterForm.get('degreeFormArray') as FormArray).controls 
  }
  getTuitionFeeFormControls(){
    return (this.filterForm.get('tuitionFeeFormArray') as FormArray).controls 
  }
  getPartnerTypeFormControls(){
    return (this.filterForm.get('partnerTypeFormArray') as FormArray).controls 
  }
  getSaudiMinisterFormControls(){
    return (this.filterForm.get('saudiMinistryFormArray') as FormArray).controls 
  }

  onOptionSelection(): void {
    this.optionsSelected.emit(this.selectedOptions);
  }

  ngOnDestroy(): void {
    if (this._optionsSubscription) {
      this._optionsSubscription.unsubscribe();
    }
  }
}
