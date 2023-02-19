import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { NewTransactionModalComponent } from '../new-transaction-modal/new-transaction-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogRef = this.dialog.open( NewTransactionModalComponent ,{
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('teste')
    })
  }

}
