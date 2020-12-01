import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultingServicesListComponent } from './consulting-services-list/consulting-services-list.component';
import { ConsultingServicesDetailComponent } from './consulting-services-detail/consulting-services-detail.component';


const routes: Routes = [
  { path: '', component: ConsultingServicesListComponent },
  { path: ':id', component: ConsultingServicesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultingServicesRoutingModule { }
