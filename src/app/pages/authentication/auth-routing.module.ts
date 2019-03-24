import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NormallayoutComponent } from './../../shared/components/normallayout/normallayout.component'

const routes: Routes = [
    {
        path: '',
        component: NormallayoutComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }

        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
    constructor() {

    }
}