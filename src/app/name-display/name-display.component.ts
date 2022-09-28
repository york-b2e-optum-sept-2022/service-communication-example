import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TestService} from "../test.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit, OnDestroy {

  @Input() name!: string;
  sub: Subscription;

  constructor(private testService: TestService) {
    this.sub =  this.testService.$name.subscribe((newName: string) => {
      this.name = newName;
    });

    console.log(this.sub)
  }

  ngOnDestroy() {
    this.sub.unsubscribe()

  }

  ngOnInit(): void {
  }

  onClick() {
    this.testService.setName('scott');
  }

  onClick2() {
    this.sub.unsubscribe()
    console.log(this.sub)
  }

}
