# App1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Dev notes

### Git flow
https://nvie.com/img/git-model@2x.png

### Versioning
https://semver.org/

### Commit convention
https://www.conventionalcommits.org/en/v1.0.0-beta.4/


========================
Quick setup guideline:

New test of quick project build up with command line for an application
that needs to authenticate and load data.
It is intended to provide a routing navigation on the main app.component.
From the menu we have 3 links:
- mainContainer
- loginContainer
- homeContainer (in SecuredModule) containing the dataComponent
We need a state with auth and data sub-states. Auth is used by a gard to allow the routing to the securedModule

ng new app1 ( y scss)
cd app1
code .
git checkout -b develop

ng g component main --changeDetection=OnPush --module=app.module.ts
ng g component login --changeDetection=OnPush --module=app.module.ts

ng g module secured --module=app.module.ts --routing=true
ng g component secured/home-container --changeDetection=OnPush --module=secured/secured.module.ts
ng g component secured/data --changeDetection=OnPush --module=secured/secured.module.ts

git add .
git commit -m 'created basic structure with Angular CLI'

# clean all placeholders
( Let only <h1>Welcome to {{ title }}!</h1>
<router-outlet></router-outlet>)
git add .
git commit -m 'text: removed placeholders'

# set readme info
(remove Code scaffolding and Further help replace with following:
"
## Dev notes

### Git flow
https://nvie.com/img/git-model@2x.png

### Versioning
https://semver.org/

### Commit convention
https://www.conventionalcommits.org/en/v1.0.0-beta.4/
")
git add .
git commit -m 'docs(readme): basic info set'

# create CHANGELOG.md
(Add: 
"
# CHANGELOG

<a name="0.1"></a>
# 0.1(2019-07-09)

### Features

* add CHANGELOG.md
")
git add .
git commit -m 'docs(changelog): creation'

# version 0.1 in package.json
git add .
git commit -m 'docs(version): set version to 0.1 in package.json'

# add navigation
"
<div class="content-wrapper">
  <div class="menu">
    <ng-container *ngFor="let navItem of navigation">
      <button mat-button [routerLink]="navItem.link" routerLinkActive="active" class="menu-item">{{ navItem.label }}</button>
    </ng-container>
  </div>

  <div class="main-content">
    <router-outlet></router-outlet>
  </div>
</div>
"
and:
"
  navigation = [
    { link: './', label: 'Welcome' },
    { link: './login', label: 'Login' },
    { link: './home/', label: 'Home' }
  ];
"

add routes:
"
export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home', 
    loadChildren: () => import('./secured/secured.module').then(mod => mod.SecuredModule)
  }
];
"
git add .
git commit -m 'feat(routing): added menu and base routing'


# minimum style

css:
"
  .active {
    color: white;
    background-color: fuchsia;
  }

  .menu-item {
    margin: 0px 5px 0px 5px;

    &:first-child {
      margin: 0px 5px 0px 0px;
    }
    &:last-child {
      margin: 0px 0px 0px 5px;
    }
  }

  // Defaults for top blocs
  .content-wrapper {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
  }
  .menu {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
  }  
  .main-content {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
  }
"

in styles.scss:
"
body {
  font-family: Roboto,"Helvetica Neue",sans-serif;
}
"
git add .
git commit -m 'style: basics for font and menu'

# Module routing
"
export const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  }
];
"
git add .
git commit -m 'feat(routing): secured module'



# Install NgRx packages:

npm install @ngrx/store --save
npm install @ngrx/store-devtools
npm install @ngrx/effects
npm install @ngrx/router-store
npm install @ngrx/entity



# Schematics:

npm install @ngrx/schematics --save-dev

set default schematics in config
ng config cli.defaultCollection @ngrx/schematics



# Initial store setup:
ng generate store AppState --root --module app.module.ts

In app.module.ts, add to imports (need "import { StoreRouterConnectingModule } from '@ngrx/router-store';"):

    StoreRouterConnectingModule.forRoot({stateKey:'router'}),

In the root reducer's (empty) ActionReducerMap, add the entry:

  router: routerReducer

Set the store freeze:
npm i --save-dev ngrx-store-freeze

In the root reducer, update the metaReducers as following ( need "import { storeFreeze } from 'ngrx-store-freeze';"):
export const metaReducers: MetaReducer<State>[] =
  !environment.production ? [storeFreeze] : [];


Initial effects setup:
ng generate effect App --root --module app.module.ts






# Unsafe section to be confirmed

Can do:
ng generate feature secured/secured -m secured/secured.module.ts --api true


But, making the first Entity:
ng generate entity secured/Data --flat false --module secured.module.ts --reducers data.reducer.ts
-> This create actions, reducer and a model. Actions are more complete, so it is better to generate that to have more boiler plate code and then add effects ( I guess) than a feature 

Needed to merge duplicated actions and reducers and correct spelling, a remove duplicated state, but entities are a plus. 





# Services




# Material design










# changelog update

# version 1.0

# merge to master and tag 1.0

===================================