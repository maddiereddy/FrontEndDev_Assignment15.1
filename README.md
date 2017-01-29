# FrontEndDev_Assignment15.1
### Assignment 15.1 of the AcadGild Front End Web Dev Course

● Create a service: configService which should make API url based on type of API url
 you want. Here you have to create for following:  
    ○ University  
    ○ Company  
 and set end-points and put your base url in your app-config.json
 
<u><b>Notes:
 1. Angular CLI is used to create app. So, use `ng serve` to run on localhost:4200
 2. Created an interface class AppConfig which stores the base url and the endpoints  
 3. This is then registered in the provider list in the app.module ngModule  
   so that it is available anywhere (service or component)
 4. Next, the interface is injected into the constructor of the service and used  
   to fetch data for the relevant components