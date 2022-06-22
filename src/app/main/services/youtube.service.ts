import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { YoutubeResponse } from '@main/models/youtube';
import { combineLatest, map, Observable } from 'rxjs';

@Injectable()
export class YoutubeService {
  private readonly lyricsApiUrl = 'https://api.lyrics.ovh/v1';

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  getVideoLyrics(query: string) {
    const [title, artist] = query.split(' ');
    return combineLatest([
      this.getVideo(query),
      this.getLyrics(artist, title),
    ]).pipe(
      map(([videoResponse, lyrics]) => {
        return {
          video: videoResponse.items[0],
          lyrics,
        };
      })
    );
  }

  private getVideo(query: string): Observable<YoutubeResponse> {
    return this.http.get<YoutubeResponse>(
      `${this.apiUrl}/youtube/videos?query=${query}`
    );
  }

  private getLyrics(artist: string, title: string): Observable<string> {
    return this.http.get<string>(`${this.lyricsApiUrl}/${artist}/${title}`);
  }
}
