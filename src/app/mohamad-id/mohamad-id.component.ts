import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-mohamad-id',
  standalone: false,
  templateUrl: './mohamad-id.component.html',
  styleUrl: './mohamad-id.component.css'
})
export class MohamadIdComponent implements OnInit {


  constructor(private Activerouter: ActivatedRoute, private route: Router) {

  }

  public MohamadId: number = 0

  ngOnInit(): void {
    // let id = parseInt(this.router.snapshot.paramMap.get('id')!)
    // this.MohamadId = id
    this.Activerouter.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!)
      this.MohamadId = id
    })

  }

  goNext() {
    let nextId = this.MohamadId + 1
    // this.route.navigate(['/mohamad', nextId])
    this.route.navigate(['./', { id: nextId }], { relativeTo: this.Activerouter })


  }

  goPrevious() {
    let previousId = this.MohamadId - 1
    // this.route.navigate(['/mohamad', previousId])
    this.route.navigate(['./', { id: previousId }], { relativeTo: this.Activerouter })
    

  }

  goBack() {
    // this.route.navigate(['/mohamad', {id:this.MohamadId}])
    this.route.navigate(['../', { id: this.MohamadId }], { relativeTo: this.Activerouter })
  }



}
