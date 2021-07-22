export class Email{
  id:number;
  status:number;
  time:Date;
  senderId:number;
  receiverId:number;
  constructor(){
    this.id=1;
    this.status=1;
    this.time=new Date(1478708162000);
    this.senderId=1;
    this.receiverId=1;
  }
}
