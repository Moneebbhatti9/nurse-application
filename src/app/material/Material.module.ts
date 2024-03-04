import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [MatCardModule, MatDialogModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
