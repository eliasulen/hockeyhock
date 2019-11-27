import { trigger, style, animate, transition } from '@angular/animations';

export const FadeAnimation = 
    [
        trigger('fade', [ 
          transition('void => *', [
            style({ opacity: 0 }), 
            animate(600, style({opacity: 1}))
          ]) 
        ])
      ]
