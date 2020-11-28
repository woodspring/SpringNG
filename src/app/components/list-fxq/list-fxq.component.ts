import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SpringfxqService } from '../../services/springfxq.service';
import { FxqDetailComponent } from '../fxq-detail/fxq-detail.component';
import { FXQuote } from '../../FXQuote';
import { FXSpot } from '../../FXSpot';

@Component({
  selector: 'app-list-fxq',
  templateUrl: './list-fxq.component.html',
  styleUrls: ['./list-fxq.component.css']
})
export class ListFxqComponent implements OnInit {
  fxqoutList?: Observable<FXQuote[]>;

  constructor(private springfxqService: SpringfxqService, private router: Router) {}

  ngOnInit(): void {
     this.reloadData();
  }

  reloadData() {
    this.fxqoutList = this.springfxqService.getAll();
  }

  fxqDetails( id: number) {
    this.router.navigate(['detail', id]);
  }

}
