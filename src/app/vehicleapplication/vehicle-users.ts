export class VehicleUsers {
    firstName: string;
    lastName: string;
    email: string;
    userName:String ;
    password:string;
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}