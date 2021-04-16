import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleAccordion(event) {
    const element = event.currentTarget;
    const panel = element.nextElementSibling;
    const chev = element.querySelector('.chevron');
    element.classList.toggle('is-expanded');
    element.classList.toggle('is-selected');
    chev.classList.toggle('active');

    if (panel.style.height === 'auto') {
      panel.style.height = 0;
      panel.classList.remove('is-expanded');
      console.log(panel);
    } else {
      panel.style.height = 'auto';
      panel.classList.add('is-expanded');
    }
  }

}
