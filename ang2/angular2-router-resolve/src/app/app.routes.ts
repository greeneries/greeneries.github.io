import { Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDataComponent } from './contact-data/contact-data.component';

import { ContactResolveGuardService } from './guard/contact-resolve-guard.service';

// contact/:id
// contact/위치보유자
// 위치 보유자 위치에 어떠한 문자열이 있다면 그 문자열을 id=문자열 형태로 처리합니다.
// contact/10 ==> id=10
// contact/x ==> id=x
export const AppRoutes: Routes = [
  {
    path: '', component: ContactListComponent
  },
  { path: 'contact/:id', component: ContactDetailComponent },
  {
    path: 'info/:id', component: ContactInfoComponent,
    // ContactInfoComponent 컴포넌트를 처리하기 전에
    // infoService를 로직을 기동하고 그 결과를 yyy 결과 형태로
    // ContactInfoComponent에 전달합니다.
    resolve: {
      yyy: 'infoService'
    }
  },
  {
    path: 'data/:id', component: ContactDataComponent,
    resolve: {
      contact: ContactResolveGuardService
    }
  },
];
