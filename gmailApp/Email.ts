export class Email{
  Id:number;
  Status:number;
  Time:Date;
  SenderId:number;
  ReceiverId:number;
  constructor(){
    this.Id=1;
    this.Status=1;
    this.Time=new Date(1478708162000);
    this.SenderId=1;
    this.ReceiverId=1;
  }
}
