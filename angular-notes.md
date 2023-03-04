## Introduction :

- Anngular is a JS framework to built client side applications using HTML, CSS, JS

## SPA :
- An SPA is an app that dosen't need to reload the page during its use and works within a browser.
- Eg: Gmali, FB
- Advantages : No page reloading gives good user experience, speed

## Angular CLI :

- It is a command line interface used to Develop, Scaffold, Build and Maintain Angular apps.

# Setup & Installation :

- Official [Angular CLI](https://angular.io/cli) website.
- To install CLI Run : **npm install -g @angular/cli**
- Check if angular CLI is installed or not - **ng v**
- To access Angular CLI we have to use 'ng' which is a short form that comes from 'Angular'.
- To create a new app - **ng new project_name**
- Run app :  **ng serve -o**

## Angular Component :

- A component is a combination of data, HTML template and logic.
- As a good practice,  create all components inside 'app' folder.

## Creating a component :

- Create a new folder inside 'app' folder.
- Create '.ts' file with component's name.
- Import "Component" module 
- Create a TS class with component's name.
- Create Component decorator above class and define the selector and template in it.
- Then export the class to access it in main  app component
```javascript
import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    template: '<h1>Navbar Component</h1>'
})

export class NavbarComponent{

}
```
- While importing in app component i.e in 'app.module.ts' file, don't use '.ts' extension as angular already knows it.
- Then inside @NgModule decorator, include our component in 'declarations' array.
```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
- Then goto 'app.component.html' file and write the selector of your component as a Tag in it so it can render. eg: <app-navbar></app-navbar>
```html
<h1>Angular app</h1>

<app-navbar></app-navbar>
```

- Adding CSS to navbar component by using style property :

```javascript
import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    template: '<h1>Navbar Component</h1>',
    styles: ['h1{color:red}']
})

export class NavbarComponent{

}
```
- We can use **backticks** to write multiple lines of HTML/CSS code in '.ts' file.

## Better Approach to Create a Component :

- We will create separate files for HTML, CSS and Logic for a component and then link them up.
- Now we can write our code into individual files.
- While passing URL in logic file we have to change the name of property 'template' to 'templateUrl' and 'styles' to 'styleUrls' :

```javascript
import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{

}
```

## Creating component through CLI :

- Run cmd : **ng g c component_name** OR **ng generate component component_name**
- The required files will be auto generated and the component will be automatically linked to Main component's declarations in 'app.module.ts'



