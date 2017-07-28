import {Component} from 'angular2/core';
import {SkillInfo} from './skill.component';
import {classTest} from './classtest';
import {classTwo} from './classTwo';

@Component({
		selector:'my-info',
		templateUrl:'views/info.component.html',
		directives:[SkillInfo],
		styleUrls:['css/infoStyle.css','css/secondStyle.css']


	})

export class AppInfo{
	name:string;
	age:string;
	jobs:any;
	skills:classTwo;
	clickAge(){
		this.age="30 year"
	}
	// addJob(newTitle:string,newplace:string){
	// 	this.jobs.push({title:newTitle,place:newplace});
	// }
	constructor(){
		var c =new classTest("30");
		this.name="jamal";
		this.age=c.getMsg()
			this.jobs=[
			{title:"front-end",place:"tank"},
			{title:"back-end",place:"zinc"},
			{title:"full stack software engineer",place:"home"}];

		this.skills=[new classTwo("A","node.js"),new classTwo("B","agular.js"),new classTwo("C","angular2"),new classTwo("D","bla bla bla")]

	}
}