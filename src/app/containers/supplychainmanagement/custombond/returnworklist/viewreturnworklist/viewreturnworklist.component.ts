import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReturnWorklistService } from '@app/services/wholesale/return-worklist.service';

@Component({
  selector: 'app-viewreturnworklist',
  templateUrl: './viewreturnworklist.component.html',
  styleUrls: ['./viewreturnworklist.component.scss']
})
export class ViewreturnworklistComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private returnlist: ReturnWorklistService
  ) { }

  ngOnInit() {
    
  }
 
}
