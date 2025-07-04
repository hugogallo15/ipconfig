import {
  Injectable,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _userSessionId = signal<string | null>(null);

  readonly userSessionId = this._userSessionId.asReadonly();

  // Setter method
  setUserSessionId(id: string) {
    this._userSessionId.set(id);
  }

  // Clear session
  clearUserSessionId() {
    this._userSessionId.set(null);
  }
}
