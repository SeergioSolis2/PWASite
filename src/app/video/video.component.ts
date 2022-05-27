
import { Component, OnInit } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { DomseguroPipe } from '../domseguro.pipe';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  title = 'pipesAngular';
  video='9kYZQijOvlQ';
  constructor() { }

  ngOnInit(): void {
    
  }

}


