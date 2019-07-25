export class booking {
 // bookingId: number;
    firstname: string;
    lastname: string;
    contactNo: string;
    vehicleNo:string;
    vehicleType:string ;
    date:string;
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}