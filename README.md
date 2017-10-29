# Server Rendering Web Apps

Naar aanleiding van dit onderstaande onderwerp ben ik deze repo gaan uitwerken. 

[Micro frontends—a microservice approach to front-end web development](https://medium.com/@tomsoderlund/micro-frontends-a-microservice-approach-to-front-end-web-development-f325ebdadc16)

In deze repo werk ik oplossing nummer 2 uit zoals beschreven in het artikel

```
2. Multiple single-page apps that live at different URLs. The apps use NPM/Bower components for shared functionality.
```

### Oplossing stacks
1) [Node/Express routing](https://expressjs.com/en/guide/routing.html)
2) [Node/Express template engine](https://expressjs.com/en/guide/using-template-engines.html)
3) React Web App for client
4) Angular Web App for client

#### Indeling
![Indeling voorbeeld](https://i.snag.gy/RktnI7.jpg)

Met Node/Express framework kun je http url routering regelen via bijv. `app.get('/app1'), app.get('/app2')`. De bedoeling is dat voor elke url een (gebuild and optimized) stand alone webapp wordt geladen. 

Elke webapp heeft zijn eigen template met daarin de juiste HTML en verwijzing naar het gebuilde javacript bestand. 
![Views template for each webapp](https://i.snag.gy/EyOarq.jpg)

Bijv. voor Angular App
**angular-app.jade**
```
extends layout

block content
  app-root
  script(type='text/javascript', src='javascripts/angular-app/inline.bundle.js')
  script(type='text/javascript', src='javascripts/angular-app/polyfills.bundle.js')
  script(type='text/javascript', src='javascripts/angular-app/styles.bundle.js')
  script(type='text/javascript', src='javascripts/angular-app/vendor.bundle.js')
  script(type='text/javascript', src='javascripts/angular-app/main.bundle.js')
  
```
De truc zit hem in dat je ervoor moet zorgen dat de build bestanden van een specifieke webapp naar de juiste publieke folder van de Express Server wordt verplaatst. 

`"build:watch-express-server": "ng build --watch --output-path ../../public/javascripts/angular-app",`

Hierdoor kun je de Expresss draaien als 1 grote app die zorgt voor de juiste routeringen en template rendering.



#### Build Angular App in watch mode
In de root folder
```
cd WEBAPPS/angular-app
npm install
npm run build:watch-express-server
```

#### Build React App in watch mode
In de root folder
```
cd WEBAPPS/react-app
npm install
npm run build:watch-express-server
```

#### Express Webserver opstarten
In de root folder
```
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000)





