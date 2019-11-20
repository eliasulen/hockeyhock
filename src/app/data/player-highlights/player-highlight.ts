import { Media } from '../media/media'

export interface PlayerHighlight {
  mediaPlaybackId: number, //tags.type == mediaplaybackid : tags.value
  gameId: number, //tags.type == gameId : tags.value
  blurb: string, //blurb
  date: string, //display_timestamp
  statsEventId: number //tags.type == statsEventId : tags.value,

  media: Media //Fetch on second call after retrieving mediaPlaybackId
}

