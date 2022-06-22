import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';
import { YoutubeResponse, VideoLyrics } from '@main/models/youtube';

@Injectable()
export class YoutubeService {
  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) {}

  getVideos(query: string) {
    return this.http
      .get(
        `${this.apiUrl}/youtube/videos?query=${query}`
      );
  }
}
