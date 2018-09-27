import { Component } from '@angular/core';

import { DataShareService } from './share/data-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module-test';

  constructor(private dataShareService: DataShareService){
    this.title = this.dataShareService.getTitle();
  }

}
