System.register(['angular2/core', './skill.component', './classtest', './classTwo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, skill_component_1, classtest_1, classTwo_1;
    var AppInfo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (skill_component_1_1) {
                skill_component_1 = skill_component_1_1;
            },
            function (classtest_1_1) {
                classtest_1 = classtest_1_1;
            },
            function (classTwo_1_1) {
                classTwo_1 = classTwo_1_1;
            }],
        execute: function() {
            AppInfo = (function () {
                // addJob(newTitle:string,newplace:string){
                // 	this.jobs.push({title:newTitle,place:newplace});
                // }
                function AppInfo() {
                    var c = new classtest_1.classTest("30");
                    this.name = "jamal";
                    this.age = c.getMsg();
                    this.jobs = [
                        { title: "front-end", place: "tank" },
                        { title: "back-end", place: "zinc" },
                        { title: "full stack software engineer", place: "home" }];
                    this.skills = [new classTwo_1.classTwo("A", "node.js"), new classTwo_1.classTwo("B", "agular.js"), new classTwo_1.classTwo("C", "angular2"), new classTwo_1.classTwo("D", "bla bla bla")];
                }
                AppInfo.prototype.clickAge = function () {
                    this.age = "30 year";
                };
                AppInfo = __decorate([
                    core_1.Component({
                        selector: 'my-info',
                        templateUrl: 'views/info.component.html',
                        directives: [skill_component_1.SkillInfo],
                        styleUrls: ['css/infoStyle.css', 'css/secondStyle.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppInfo);
                return AppInfo;
            }());
            exports_1("AppInfo", AppInfo);
        }
    }
});

//# sourceMappingURL=info.component.js.map
