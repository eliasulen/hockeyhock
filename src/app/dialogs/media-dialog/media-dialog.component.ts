import { Component, OnInit } from '@angular/core';
import { Media } from '../../data/internal/media'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service';
import { SettingType, Settings } from '../../data/internal/setting'

@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.scss']
})
export class MediaDialogComponent implements OnInit {

  public media: Media;

  public showHls : boolean;
  public showMp4 : boolean;
  public showEmbed : false;

  constructor(
    private settingService: SettingService,
    public dialogRef: MatDialogRef<MediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.media = data.media;
      this.updateSources(this.settingService.get(SettingType.source));
    }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  public updateSources(value: string)
  {
   this.showHls = value == Settings.source.m3u8;
   this.showEmbed = false;
   this.showMp4 = value == Settings.source.mp4;
  }

}
