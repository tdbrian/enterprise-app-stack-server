import { Component, OnInit } from '@angular/core';

export enum FooterStatues {
  'primary'
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  status = FooterStatues.primary;
  statusTypes = FooterStatues;
  visible = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.visible = true;
    }, 2000);
  }

}
