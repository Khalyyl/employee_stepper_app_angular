import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  designationList: any [] = [];
  rolesList: any [] = [];
  stepsList: any [] = [
    {stepName: 'Basic Details', isComplete: false},
    {stepName: 'Skills', isComplete: false},
    {stepName: 'Experience', isComplete: false}

  ];

  activeStep: any = this.stepsList[0];

  stepperCompletionValue: number = 8;

  employeeObj: any = {
    "roleId": 0,
    "empId": 0,
    "empCode": "",
    "empName": "",
    "empEmailId": "",
    "empDesignationId": 0,
    "empContactNo": "",
    "empAltContactNo": "",
    "empPersonalEmailId": "",
    "empExpTotalYear": 0,
    "empExpTotalMonth": 0,
    "empCity": "",
    "empState": "",
    "empPinCode": "",
    "empAddress": "",
    "empPerCity": "",
    "empPerState": "",
    "empPerPinCode": "",
    "empPerAddress": "",
    "password": "",
     erpEmployeeSkills: [],
     ermEmpExperience: []
  }

  empSkillsObj: any = {
    "empSkillId": 0,
    "empId": 0,
    "skill": "string",
    "totalYearExp": 0,
    "lastVersionUsed": "string"
  }



  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
      this.loadDesignations();
      this.loadroles()
  }


  setActiveStep(activeStep: any) {
    this.activeStep = activeStep;
  }

  gotostep2() {
    const currentStep = this.stepsList.find((step) => step.stepName == this.activeStep.stepName);
    currentStep.isComplete = true;
    this.activeStep = this.stepsList[1];
    this.stepperCompletionValue = 50;
  }
  gotostep3() {
    const currentStep = this.stepsList.find((step) => step.stepName == this.activeStep.stepName);
    currentStep.isComplete = true;
    this.activeStep = this.stepsList[2];
    this.stepperCompletionValue = 100;
  }

  addSkills() {
    const skillObj =  {
    "empSkillId": 0,
    "empId": 0,
    "skill": "",
    "totalYearExp": 0,
    "lastVersionUsed": ""
    };

  this.employeeObj.erpEmployeeSkills.unshift(skillObj);
  }

  addExp() {
    const expObj =  {
      "empExpId": 0,
      "empId": 0,
      "companyName": "",
      "startDate": "2024-06-19T15:12:45.937Z",
      "endDate": "2024-06-19T15:12:45.937Z",
      "designation": "",
      "projectsWorkedOn": ""
      
    }

    this.employeeObj.ermEmpExperience.unshift(expObj);
  }


  loadDesignations() {
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllDesignation").subscribe((res:any) => {
      this.designationList = res.data;
    })
  }

  loadroles() {
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles").subscribe((res:any) => {
      this.rolesList = res.data;
    })
  }

  saveEmployee() {
    debugger;
    this.http.post('https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee', this.employeeObj).subscribe({
      next: (res) => {
        alert('Employee Saved Successfully');
      },
      error: (error) => {
        console.error('Error saving the employee:', error);
        // Display a more detailed error message if the server provides it
        const serverErrorMessage = error.error?.message || 'Unknown error';
        alert(`Failed to save the employee. Error: ${serverErrorMessage}`);
      }
    });
}

   

}
