import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkTableModule } from '@angular/cdk/table';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CdkTableModule,
        CommonModule,
        DragDropModule,
        // FlexLayoutModule,
        FormsModule,
        LayoutModule,
        ReactiveFormsModule,
    ],

    declarations: [],
    exports: [
        CdkTableModule,
        OverlayModule,
        CommonModule,
        DragDropModule,
        // FlexLayoutModule,
        FormsModule,
        LayoutModule,
        ReactiveFormsModule,
    ],
    entryComponents: [],
    providers: [CurrencyPipe, DatePipe]
})
export class VendorModule { }
