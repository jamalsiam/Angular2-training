export class classTest {
  msg:string= "test class classTest from file classtest.ts"


  constructor(msg:string){
  	this.msg=msg;
  }
  getMsg(){
  	return this.msg; 
  }
  setMsg(msg:string){
  	this.msg=msg;
  }

}
