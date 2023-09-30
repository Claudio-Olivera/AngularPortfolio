import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

import { LayoutsModule } from '../layouts/layouts.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../components/components.module";

@NgModule({
    declarations: [
        AboutComponent,
        ProjectsComponent,
    ],
    exports: [
        AboutComponent,
        ProjectsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        LayoutsModule,
        ComponentsModule
    ]
})

export class PagesModule { }
