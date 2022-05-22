import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  agents?: Observable<string>;
  agentName?: string;

  studentList = ['A', 'B', 'C', 'D'];
  students: Observable<string[]> = of(this.studentList);
  studentNames: Observable<string> = of('Angular');
  studentObj = {
    id: 13,
    name: 'Angular',
  };
  student$: Observable<{ id: number; name: string }> = of(this.studentObj);

  ordersArr = ['Electronics', 'Mobile'];
  orders$: Observable<string> = from(this.ordersArr);
  orderName?: string;

  @ViewChild('validateBtn')
  validateBtn?: ElementRef;
  @ViewChild('getLink')
  getLinkData?: ElementRef;

  constructor() {}

  ngOnInit(): void {
    /** 1. Observable */
    // this.agents = new Observable(function (observer) {
    //   try {
    //     observer.next('Ayush');
    //     setInterval(() => {
    //       observer.next('Yadav');
    //     }, 6000);
    //     setInterval(() => {
    //       observer.next('RxJS');
    //     }, 8000);
    //   } catch (err) {
    //     observer.error(err);
    //   }
    // });
    // this.agents.subscribe((data) => {
    //   this.agentName = data;
    // });
    /** 2. of operator */
    // this.students.subscribe((data) => {
    //   console.log(data);
    // });
    // this.studentNames.subscribe((data) => {
    //   console.log(data);
    // });
    // this.student$.subscribe((data) => {
    //   console.log(data);
    // });
    /** 3. from operator */
    // this.orders$.subscribe((data) => {
    //   setInterval(() => {
    //     this.orderName = data;
    //   }, 3000);
    // });
    /** 4. fromEvent operator */
    /** 5. interval operator*/
    // this.orders$.subscribe((data) => {
    //   const seqNum$ = interval(2000);
    //   seqNum$.subscribe((num) => {
    //     if (num < 5) {
    //       console.log(data + num);
    //     }
    //   });
    // });
    /** 6. debounceTime operator */
    
  }

  rxJsEventObservable() {
    const btnObservable$ = fromEvent(this.validateBtn?.nativeElement, 'click');
    btnObservable$.subscribe((data) => {
      console.log(data);
    });
  }
  getEventObservable() {
    const linkObservable$ = fromEvent(
      this.getLinkData?.nativeElement,
      'mouseover'
    );
    linkObservable$.subscribe((data) => {
      console.log(data);
    });
  }
}
