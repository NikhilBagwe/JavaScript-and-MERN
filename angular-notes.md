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

## OnInit Interface and Life Cycle hook :

# Data Binding :

- Render data written in logic file to frontend i.e HTML view.
- For that we have to create an JS scope in post.component.html file.
- Angular provides us with **String Interpolation syntax** : {{}}
- We can write any valid JS code inside it and pull data from .ts file to .html
- 
### post.component.ts
```js
export class PostComponent {
  title : string = "List of Posts"
}
```

### post.component.html
```html
<h1>{{title}}</h1>
```

# Sharing Data between Components :

## Sharing data from Parent to Child : **@Input Decorator**

- Write your variable inside Parent component's class

### Parent Component TS
```js
export class AppComponent {
  title = 'AngIntro';
  parentMesssage : string = "Message coming from Parent component"
}
```
- Pass that variable inside Child component tag in below syntax
### Parent Component HTML
```html
<h1>Angular app</h1>

<app-navbar></app-navbar>
<app-post [fromParent] = 'parentMesssage'></app-post>
```

### Then in Child component's TS use @Input decorator :
```js
export class PostComponent implements OnInit {
  title : string = "List of Posts"
  @Input() fromParent : string = ''

  constructor(){}
  ngOnInit(): void {
    
  }
}
```
### Child component's HTML :

```html
<h1>{{title}}</h1>

<h3>{{fromParent}}</h3>
```

## Sharing data from Child to Parent : **@ViewChild & @Output Decorator**

## @ViewChild Decorator :

- Create variable in Child Component's class :

### Child Component TS :
```js
export class PostComponent implements OnInit {
  title : string = "List of Posts"
  @Input() fromParent : string = ''
  message:string = 'From Post component'

  childMessage : string = 'From child component'

  constructor(){}
  ngOnInit(): void {
    
  }
}
```
- Access variable in Parent component 
- We have to use AfterViewInit lifecycle hook to view child data as when we load the app component our child component is undefined

### Parent component TS :
```js
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMesssage : string = "Message coming from Parent component 2"
  message:string = '';

  @ViewChild(PostComponent) childComp;
  
  constructor(){
    
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage
  }
}
```

### Parent component HTML :

```html
<h1>Angular app</h1>

<h3>{{message}}</h3>

<app-navbar></app-navbar>
<app-post [fromParent] = 'parentMesssage'></app-post>
```

## @Output decorator and Event emitter :

- This is an Ideal approach when we want to share data changes that occur on things like button clicks, form enteries and other user events.
- Create the variable that is to be passed and import Output and Event emitter.
- then init the Output decorator with event emitter.

### Child component TS :

```js
export class PostComponent implements OnInit {
  title : string = "List of Posts"
  
  message:string = 'From Post component'

  childMessage : string = 'From child component'

  outputChildMessage : string = 'Message from child component via Output'

  @Input() fromParent : string = ''

  @Output() messageEvent = new EventEmitter<string>()

  constructor(){}
  ngOnInit(): void {
    
  }
}
```
- Now add a Button to frontend of Child component and add a click event on it which will emit message.

### Child component TS :

```js
export class PostComponent implements OnInit {
  title : string = "List of Posts"
  
  message:string = 'From Post component'

  childMessage : string = 'From child component'

  outputChildMessage : string = 'Message from child component via Output'

  @Input() fromParent : string = ''

  @Output() messageEvent = new EventEmitter<string>()

  constructor(){}
  ngOnInit(): void {
    
  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage)
  }
}
```

### Child component HMTL :

```html
<h1>{{title}}</h1>

<h3>{{fromParent}}</h3>

<app-post-list [fromPost] = 'message'></app-post-list>

<button (click) = 'sendMessage()'>Click</button>
```

- Adding a new method to be called on Click of button.
### Parent component TS :

```js
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMesssage : string = "Message coming from Parent component 2"
  message:string = '';

  @ViewChild(PostComponent) childComp;
  
  constructor(){
    
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage
  }

  receiveMessage($event){
    console.log($event);
    
  }
}
```


### Parent component HMTL :

```html
<h1>Angular app</h1>

<h3>{{message}}</h3>

<app-navbar></app-navbar>
<app-post [fromParent] = 'parentMesssage' (messageEvent) = 'receiveMessage($event)'></app-post>
```

- Now click the button and message will be displayed in Console.















