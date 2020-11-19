import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss'],
})
export class ComponentBComponent implements OnInit {
  @Input() display: number | null = null;
  constructor() {}

  ngOnInit(): void {}
}
