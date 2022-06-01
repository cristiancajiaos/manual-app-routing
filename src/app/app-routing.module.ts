import { BazComponent } from './baz/baz.component';
import { BarComponent } from './bar/bar.component';
import { FooComponent } from './foo/foo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'foo', component: FooComponent },
  { path: 'bar', component: BarComponent },
  { path: 'baz', component: BazComponent },
  { path: '**', redirectTo: '/foo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
