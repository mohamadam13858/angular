import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

type Mohamads = {
  id: number,
  name: string
}



@Component({
  selector: 'app-mohamad',
  standalone: false,
  templateUrl: './mohamad.component.html',
  styleUrl: './mohamad.component.css'
})



export class MohamadComponent implements OnInit {


  SelectedId: number | null = null

  mohamads: Mohamads[] = [
    { id: 1, name: 'angular' },
    { id: 2, name: 'nodejs' },
    { id: 3, name: 'mongoDB' },
    { id: 4, name: 'Rust' },
    { id: 5, name: 'bootstrap' },
  ]
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  onSelect(id: number) {
    this.router.navigate(['/mohamad', id])
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!)
      this.SelectedId = id
    })

  }


  isSelected(id: number): boolean {
    return this.SelectedId === id
  }

}
