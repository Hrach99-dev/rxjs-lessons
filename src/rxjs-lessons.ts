import {Observable} from "rxjs";

const search$ = new Observable(observer => {
  const search: HTMLElement = document.getElementById('search')!;

  search.addEventListener('input', event => {
    console.log(1);
    observer.next(event)
  })
});

search$.subscribe(value => console.log(value));









