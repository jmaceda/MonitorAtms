import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
    id: number;

    constructor( private router : ActivatedRoute ) { }

    ngOnInit() {
        this.router.params.subscribe( params => {
            this.id = params['id'].toString();
        });
    }
}
