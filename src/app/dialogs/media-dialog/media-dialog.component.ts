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

  sourceSettings: string[] = []

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

    getSource()
    {
      return this.settingService.get(SettingType.source);
    }

    setSource(value: any)
    {
      this.settingService.save(SettingType.source, value);
    }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.sourceSettings = Object.keys(Settings.source).map(x => Settings.source[x])
  }

  public updateSources(value: string)
  {
   this.showHls = value == Settings.source.m3u8;
   this.showEmbed = false;
   this.showMp4 = value == Settings.source.mp4;
  }

}
