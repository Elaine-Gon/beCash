import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-new-transaction-modal',
  templateUrl: './new-transaction-modal.component.html',
  styleUrls: ['./new-transaction-modal.component.scss']
})

export class NewTransactionModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewTransactionModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close()
  }

}
