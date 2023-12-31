import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, tragetUnits: string): any {
    console.log(value);
    if (!value) {
      return '';
    }
    switch (tragetUnits){
      case 'km':
        return value*1.60943;
      case 'm':
        return value*1.60943*1000;
      case 'cm':
        return value*1.60943*1000*1000;
      default:
        throw new Error('Target unit not supported');
    };
    return value*1.60943;
  }

}
