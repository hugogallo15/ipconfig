import { Routes } from '@angular/router';

import {
  CameraViewerComponent,
} from './components/camera-viewer/camera-viewer.component';
import { authResolver } from './resolvers/auth.resolver';

export const routes: Routes = [
  {
    path: '',
    component: CameraViewerComponent,
    resolve: {
      userSessionId: authResolver,
    },
  },
];
