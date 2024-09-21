import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let returnName:string= 'Hello'+' '+'World!';
    return returnName;
  }
}
