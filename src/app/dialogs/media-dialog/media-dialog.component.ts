import { Component, OnInit } from '@angular/core';
import { Media } from '../../data/internal/media'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service';
import { SettingType, Settings } from '../../data/internal/setting'


@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.scss'],
})
export class MediaDialogComponent implements OnInit {

  public medias: Media[];

  constructor(
    private settingService: SettingService,
    public dialogRef: MatDialogRef<MediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.medias = data.medias;
    }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


}
