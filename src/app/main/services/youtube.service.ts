import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { YoutubeVideo, YoutubeResponse } from '../models/youtube';

@Injectable()
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable<YoutubeVideo[]> {
    return this.http
      .get<{ data: YoutubeResponse }>(
        `${environment.API_URL}/youtube/videos?query=${query}`
      )
      .pipe(pluck('data', 'items'));
  }
}
