import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import {
  inject,
  Injectable,
} from '@angular/core';

import {
  firstValueFrom,
  map,
} from 'rxjs';

import {
  SessionResource,
  User_Session_Post_Body,
} from '../models/orchid.models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrchidService {
  private httpClient = inject(HttpClient);
  private authService = inject(AuthService);

  private server = 'https://orchid.ipconfigure.com';
  private baseUrl = 'service';

  /**
  * Creates a new user session with the Orchid Recorder system.
  *
  * Sends a POST request with the given user credentials to generate a session.
  * Returns the session ID on success.
  *
  * @param payload - An object containing the `username` and `password` required to authenticate.
  * @returns A promise that resolves to the session ID string.
  */
  async createUserSession(payload: User_Session_Post_Body): Promise<string> {
    const url = `${this.server}/${this.baseUrl}/sessions/user`;

    const response$ = this.httpClient
      .post<SessionResource>(url, payload)
      .pipe(map((response) => response.id));
    const response = await firstValueFrom(response$);

    return response;
  }

  /**
  * Retrieves a list of all available cameras from the Orchid Recorder API.
  * Due to time constrainst, I skipped typescripting this due to the complexity. Is there a simpler way to create these types directly from the service?
  *
  * Requires a valid session ID (provided via `Authorization` header).
  * Returns an array of camera objects.
  *
  * @returns A promise that resolves to an array of cameras.
  */
  async getAllCameras(): Promise<any[]> {
    const url = `${this.server}/${this.baseUrl}/cameras`;

    const candidate$ = this.httpClient
      .get<any>(url, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authService.userSessionId()}`,
          'Content-Type': 'application/json',
        }),
      })
      .pipe(map((response) => response.cameras));

    const response = await firstValueFrom(candidate$);

    return response;
  }

  /**
  * Retrieves a single frame (image) from a camera's primary stream.
  *
  * Requires a valid session ID and a valid stream ID.
  * The response is a Blob representing a JPEG image.
  *
  * @param streamId - The ID of the primary video stream.
  * @returns A promise that resolves to a Blob containing the image data url.
  */
  async getPrimaryStreamFrame(streamId: string): Promise<Blob> {
    const url = `${this.server}/${this.baseUrl}/streams/${streamId}/frame`;

    const candidate$ = this.httpClient.get<Promise<Blob>>(url, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.userSessionId()}`,
        Accept: 'image/jpeg',
      }),
      responseType: 'blob' as any,
    });

    const response = await firstValueFrom(candidate$);

    return response;
  }
}
