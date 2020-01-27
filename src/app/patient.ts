
export class Patient {
    username : String ;
    email : String ;
    password : String ;
    age : number ;
    area : String ;
    city : String ;
    state : String ;
    
    constructor (username:String,email:String,password:String,age:number,area:String,city:String,state:String){
        this.username = username;
        this.email = email ;
        this.password = password ;
        this.age = age ;
        this.area = area;
        this.city = city;
        this.state = state;
    }
}
