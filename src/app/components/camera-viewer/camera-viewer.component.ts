import {
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  interval,
  startWith,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';

import { OrchidService } from '../../services/orchid.service';

@Component({
  selector: 'app-camera-viewer',
  imports: [],
  templateUrl: './camera-viewer.component.html',
  styleUrl: './camera-viewer.component.scss',
})
export class CameraViewerComponent implements OnInit, OnDestroy {
  private orchidService = inject(OrchidService);
  private destroy$ = new Subject<void>();
  private intervalInMS = 5000;

  imageSrcMap = new Map<number, { imageSrc: string; name: string }>();

  async ngOnInit(): Promise<void> {
    // Get all the cameras for this user
    const camerasList = await this.orchidService.getAllCameras();

    for (const camera of camerasList) {
      //exit the loop if primaryStream id doesn't exist
      if (!camera.primaryStream?.id) continue;
      
      interval(this.intervalInMS)
        .pipe(
          //kick off immediately
          startWith(0),
          switchMap(() =>
            //Get the frame using the primaryStream Id
            this.orchidService
              .getPrimaryStreamFrame(camera.primaryStream.id)
              //get the return ready for the new map()
              .then((blob) => ({
                id: camera.primaryStream.id,
                frame: blob,
                name: camera.name,
              }))
          ),
          takeUntil(this.destroy$)
        )
        .subscribe(({ id, frame, name }) => {
          if (!frame) return;

          const mapExists = this.imageSrcMap.get(id);
          //revoke to not have any memory leaks
          if (mapExists?.imageSrc) {
            URL.revokeObjectURL(mapExists.imageSrc);
          }
          
          this.imageSrcMap.set(id, {
            imageSrc: URL.createObjectURL(frame),
            name,
          });
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    //revoke to not have any memory leaks
    this.imageSrcMap.forEach(({ imageSrc }) => URL.revokeObjectURL(imageSrc));
    this.imageSrcMap.clear();
  }
}
