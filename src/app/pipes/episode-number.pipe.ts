import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodeNumber'
})
export class EpisodeNumberPipe implements PipeTransform {

  transform(episode: number): any {
   let temp = '';
   if (episode < 10) {
      temp = '0' + episode.toString();
    } else {
      temp = episode.toString();
    }

   return temp;
  }

}
