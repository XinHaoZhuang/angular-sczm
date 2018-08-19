import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { detailComponent } from './detail/detail.component';
const appRoutes: Routes = [
{ path: 'detail/quickstart', component: detailComponent },
{ path: 'detail/tutorial', component: detailComponent },
{ path: 'detail/toh-pt1', component: detailComponent },
{ path: 'detail/toh-pt2', component: detailComponent },
{ path: 'detail/toh-pt3', component: detailComponent },
{ path: 'detail/toh-pt4', component: detailComponent },
{ path: 'detail/toh-pt5', component: detailComponent },
{ path: 'detail/toh-pt6', component: detailComponent },
{ path: 'detail/architecture', component: detailComponent },
{ path: 'detail/displaying-data', component: detailComponent },
{ path: 'detail/template-syntax', component: detailComponent },
{ path: 'detail/lifecycle-hooks', component: detailComponent },
{ path: 'detail/component-interaction', component: detailComponent },
{ path: 'detail/component-styles', component: detailComponent },
{ path: 'detail/dynamic-component-loader', component: detailComponent },
{ path: 'detail/attribute-directives', component: detailComponent },
{ path: 'detail/structural-directives', component: detailComponent },
{ path: 'detail/pipes', component: detailComponent },
{ path: 'detail/animations', component: detailComponent },
{ path: 'detail/user-input', component: detailComponent },
{ path: 'detail/forms', component: detailComponent },
{ path: 'detail/form-validation', component: detailComponent },
{ path: 'detail/reactive-forms', component: detailComponent },
{ path: 'detail/dynamic-form', component: detailComponent },
{ path: 'detail/bootstrapping', component: detailComponent },
{ path: 'detail/ngmodule', component: detailComponent },
{ path: 'detail/ngmodule-faq', component: detailComponent },
{ path: 'detail/dependency-injection', component: detailComponent },
{ path: 'detail/hierarchical-dependency-injection', component: detailComponent },
{ path: 'detail/dependency-injection-in-action', component: detailComponent },
{ path: 'detail/http', component: detailComponent },
{ path: 'detail/router', component: detailComponent },
{ path: 'detail/testing', component: detailComponent },
{ path: 'detail/cheatsheet', component: detailComponent },
{ path: 'detail/i18n', component: detailComponent },
{ path: 'detail/language-service', component: detailComponent },
{ path: 'detail/security', component: detailComponent },
{ path: 'detail/setup', component: detailComponent },
{ path: 'detail/setup-systemjs-anatomy', component: detailComponent },
{ path: 'detail/browser-support', component: detailComponent },
{ path: 'detail/npm-packages', component: detailComponent },
{ path: 'detail/typescript-configuration', component: detailComponent },
{ path: 'detail/aot-compiler', component: detailComponent },
{ path: 'detail/metadata', component: detailComponent },
{ path: 'detail/deployment', component: detailComponent },
{ path: 'detail/upgrade', component: detailComponent },
{ path: 'detail/ajs-quick-reference', component: detailComponent },
{ path: 'detail/visual-studio-2015', component: detailComponent },
{ path: 'detail/styleguide', component: detailComponent },
{ path: 'detail/glossary', component: detailComponent },
{ path: 'detail/api', component: detailComponent }
];
@NgModule({
imports: [
RouterModule.forRoot(appRoutes)
],
exports: [
RouterModule
]
})
export class AppRoutesModule { }
