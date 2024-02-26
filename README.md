# SimpleToDo
![Capture](https://github.com/spinxi/SimpleToDo/assets/50767516/8aea3b85-5be5-4b2e-aa04-5c0ee69f2c61)

## Code structure

We have this structure
<pre>
src
│
├── favicon.ico
├── index.html
├── main.server.ts
├── main.ts
├── styles.css
│
├── app
│ ├── app.component.css
│ ├── app.component.html
│ ├── app.component.spec.ts
│ ├── app.component.ts
│ ├── app.config.server.ts
│ ├── app.config.ts
│ └── app.routes.ts
│
├── assets
│ ├── css
│ │ ├── button.css
│ │ ├── firago-fonts.css
│ │ ├── fontawesome-all.css
│ │ ├── form.css
│ │ ├── root.css
│ │ ├── shadow.css
│ │ ├── svg.css
│ │ ├── table.css
│ │ └── toast.css
│ └── fonts
│ ├── firago
│ │ ├── FiraGO-Regular.woff
│ │ └── FiraGO-Regular.woff2
│ └── fontawesome
│ ├── fa-brands-400.ttf
│ ├── fa-brands-400.woff2
│ ├── fa-regular-400.ttf
│ ├── fa-regular-400.woff2
│ ├── fa-solid-900.ttf
│ ├── fa-solid-900.woff2
│ ├── fa-v4compatibility.ttf
│ └── fa-v4compatibility.woff2
│
├── components
│ ├── addition
│ │ ├── addition.component.css
│ │ ├── addition.component.html
│ │ ├── addition.component.spec.ts
│ │ └── addition.component.ts
│ ├── empty
│ │ ├── empty.component.css
│ │ ├── empty.component.html
│ │ ├── empty.component.spec.ts
│ │ └── empty.component.ts
│ ├── header
│ │ ├── header.component.css
│ │ ├── header.component.html
│ │ ├── header.component.spec.ts
│ │ └── header.component.ts
│ └── list
│ ├── list.component.css
│ ├── list.component.html
│ ├── list.component.spec.ts
│ └── list.component.ts
│
├── environments
│ ├── environment.development.ts
│ └── environment.ts
│
├── interfaces
│ └── Task.ts
│
└── todoApiService
├── api-service.service.spec.ts
└── api-service.service.ts

</pre>
## Functionalities
In /components/list we do fetching data and deleting
In /components/addition we do posting and editing

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

