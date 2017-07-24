import {Component} from 'angular2/core';

@Component({
		selector:'my-info',
		templateUrl:'views/info.component.html'


	})

export class AppInfo{
	name:string;
	age:string;
	jobs:any;
	constructor(){
		this.name="jamal";
		this.age="21";
			this.jobs=[
			{title:"front-end",place:"tank"},
			{title:"back-end",place:"zinc"},
			{title:"full stack software engineer",place:"home"}];

	}
}