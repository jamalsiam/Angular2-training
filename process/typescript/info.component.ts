import {Component} from 'angular2/core';
import {SkillInfo} from './skill.component';

@Component({
		selector:'my-info',
		templateUrl:'views/info.component.html',
		directives:[SkillInfo]


	})

export class AppInfo{
	name:string;
	age:string;
	jobs:any;
	skills:string[];
	clickAge(){
		this.age="30 year"
	}
	addJob(newTitle:string,newplace:string){
		this.jobs.push({title:newTitle,place:newplace});
	}
	constructor(){
		this.name="jamal";
		this.age="21";
			this.jobs=[
			{title:"front-end",place:"tank"},
			{title:"back-end",place:"zinc"},
			{title:"full stack software engineer",place:"home"}];

		this.skills=["node.js","angular.js","angular2","Full Stack Software engineering"]

	}
}