import { Component, OnInit } from '@angular/core';
import { LikegraficaComponent } from '../likegrafica/likegrafica.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent  {
  selected: Date = new Date();
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    let dia= this.selected.getDate().toString();
    let mes= (this.selected.getMonth()+1).toString();
    let anio= this.selected.getFullYear().toString();
    let fecha1= anio+ "-" + mes +"-"+ dia;
    localStorage.setItem("p_fecha",fecha1);
    console.log(fecha1);
    // console.log(this.selected);
    const dialogRef = this.dialog.open(LikegraficaComponent, {

      width: '400px',
      height: '400px',
      data: { selectedDate: this.selected }
      

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Ventana emergente cerrada');
    });
  }

 
  }

  


