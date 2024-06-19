import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  stepsList: any [] = [
    {stepName: 'Basic Details', isComplete: false},
    {stepName: 'Skills', isComplete: false},
    {stepName: 'Experience', isComplete: false}

  ];

  activeStep: any = this.stepsList[0];

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
    ErpEmployeeSkills: [],
    ErmEmpExperience: []
  }

  empSkillsObj: any = {
    "empSkillId": 0,
    "empId": 0,
    "skill": "string",
    "totalYearExp": 0,
    "lastVersionUsed": "string"
  }

  empExpObj: any = {
    "empExpId": 0,
      "empId": 0,
      "companyName": "string",
      "startDate": "2024-06-19T15:12:45.937Z",
      "endDate": "2024-06-19T15:12:45.937Z",
      "designation": "string",
      "projectsWorkedOn": "string"
  }


  setActiveStep(activeStep: any) {
    this.activeStep = activeStep;
  }
   

}
