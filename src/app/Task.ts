export class Task{
    UserName: string;
    LastName: string;
    ID: string;
    EmpArr = []

    constructor(UserName, LastName, ID){
        this.UserName = UserName;
        this.LastName = LastName;
        this.ID = ID;
    }
}