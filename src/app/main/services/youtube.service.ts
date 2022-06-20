import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';
import { YoutubeVideo, YoutubeResponse } from '@main/models/youtube';

@Injectable()
export class YoutubeService {
  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) {}

  getVideos(query: string): Observable<YoutubeVideo[]> {
    return this.http
      .get<{ data: YoutubeResponse }>(
        `${this.apiUrl}/youtube/videos?query=${query}`
      )
      .pipe(pluck('data', 'items'));
  }
}
