import {Routes, RouterModule} from '@angular/router';
import {QuestionnaireComponent} from './questionnaire.component';
import {AboutComponent} from './about.component';
import {UserComponent} from './user.component';
import {LoginComponent} from './login.component';
import {UserService} from './user.service';
import {OrganogramComponent} from './organogram.component';
// Until useAsDefault: true has returned
import {NotFoundComponent} from './notfound.component';

const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'user', component: UserComponent},
    {path: 'login', component: LoginComponent},
    {path: 'questionnaire/:type', component: QuestionnaireComponent},
    {path: 'organogram', component: OrganogramComponent},
    // Until useAsDefault: true has returned
    {path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
