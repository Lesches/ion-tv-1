import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodeNumber'
})
export class EpisodeNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
