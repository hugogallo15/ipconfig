import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { environment } from '../environments/environment';
import { User_Session_Post_Body } from '../models/orchid.models';
import { AuthService } from '../services/auth.service';
import { OrchidService } from '../services/orchid.service';

export const authResolver: ResolveFn<string> = async (route, state) => {
  const authService = inject(AuthService);
  const orchidService = inject(OrchidService);

  const auth: User_Session_Post_Body = {
    username: environment.username,
    password: environment.password,
  };
  const userSessionId = await orchidService.createUserSession(auth);

  authService.setUserSessionId(userSessionId);

  return userSessionId;
};
