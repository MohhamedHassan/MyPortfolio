import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    {
      name: 'HTML',
      icon: 'fab fa-html5',
    },
    {
      name: 'CSS',
      icon: 'fab fa-css3-alt',
    },
    {
      name: 'SCSS',
      icon: 'fab fa-sass',
    },
    {
      name: 'Bootstrap',
      icon: 'fab fa-bootstrap',
    },
    {
      name: 'JAVASCRIPT/<br>TYPESCRIPT',
      icon: 'fab fa-js-square',
    },
    {
      name: 'ANGULAR +2',
      icon: 'fab fa-angular',
    },
    // {
    //   name:'JQUERY',
    //   icon:'fas fa-code'
    // },
    {
      name: 'GIT/GITHUB',
      icon: 'fab fa-github',
    },
  ];
}
