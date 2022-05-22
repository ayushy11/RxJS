import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  debounceTime,
  elementAt,
  first,
  from,
  last,
  Observable,
  take,
  takeLast,
  takeWhile,
  filter,
  distinct,
  skip,
  count,
  max,
  min,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  categories: string[] = [
    'TV',
    'Mobiles',
    'Chargers',
    'Electronics',
    'TV',
    'Chargers',
    'TV',
    'Headphones',
  ];
  category$: Observable<string> = from(this.categories);

  ranks: number[] = [11, 56, 98, 256, 152, 7, 8, 99, 5, 54, 112, 12];
  rank$: Observable<number> = from(this.ranks);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
    });

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(
        // take(5),
        // takeWhile((v) => this.checkCondition(v)),
        // debounceTime(2000),
        filter((v) => this.checkCharCount(v))
      )
      .subscribe((data) => {
        console.log(data);

        this.category$
          .pipe(
            // takeLast(2)
            // first(),
            // last(),
            // elementAt(3),
            distinct(),
            // skip(2),
            count()
          )
          .subscribe((val) => {
            console.log(val);
          });

        this.rank$.pipe(
          filter((v) => this.filterValue(v)),
          // max(),
          min()
          ).subscribe((data) => console.log(data));
      });
  }

  readValue() {}

  filterValue(v: number){
    return v<50 ? true : false
  }

  checkCharCount(value: string) {
    return value.length < 10 ? true : false;
  }

  checkCondition(value: string): boolean {
    return value.length > 5 ? false : true;
  }
}
