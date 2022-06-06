import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.scss'],
  animations: [
    trigger('collapsePanelContent', [
      state(
          'hidden',
          style({
              height: '0',
              padding: '0',
              overflow: 'hidden',
          })
      ),
      state(
          'visible',
          style({
              height: '*',
          })
      ),
      transition('hidden <=> visible', [
          style({ overflow: 'hidden' }),
          animate('{{transitionParams}}'),
      ]),
      transition('void => *',animate(0)),
  ])
  ]
})
export class CollapsePanelComponent {

  @Input() headerText: string = '';
  @Input() collapsed: boolean = false;

  animating = false;
  transitionOptions: string = '400ms cubic-bezier(0.86, 0, 0.07, 1)';

  constructor() { }

  toggle(event: any){
    if (this.animating) {
      return;
    }
    this.animating = true;
    if (this.collapsed){
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }
    event.preventDefault();
  }

  onToggleDone(){
    this.animating = false;
  }

}
