API4Jokes.git

API 4 Jokes project used as part of APIs Made Easy workshop

Installing this project:

  - 1. clone repo
  - 2. Change directory to api4jokes and install package dependencies: npm install
  
Running this project:

  - 1. Change directory to api4jokes
  - 2. Run the app JS: node app
    
    By default the application will run on port 3000. Set system variable PORT to a different value if needed.

  - 3. Open a browser and go to: http://IP_ADDRESS:PORT, e.g. http://localhost:3000
  This should open the Swagger UI for the APIs for Jokes project. 
  
    Note: All the APIs are functional by default out of the box, except for the one that sends SMS messages, for obvious reasons. However the API that sends SMS messages can be easily re-configured if you have a Twilio account. For more information on how to send SMS message swith Twilio go to: https://www.twilio.com/docs/api/messaging/send-messages
    
Running the associated HTML5 app:

  Once the NodeJS service is running, apart from the Swagger UI, I also leave a small HTML5 application that interacts with the running REST APIs. In order to acces that:
  
  - 1.  Open a new browser window
  - 2. Go to: http:IP_ADDRESS:PORT/ws  For example: http://localhost:3000/ws
  
  Note: Same as with the Swagger UI, the HTML5 page is fully functional, it gets random jokes and translate them, as this does not incurr into external fees, but it will not send SMS messages. However if you enable your API with your own Twilio account, then it will fully work.
  
  For more information, go to: THIS_BLOG

  Any question, feel free to contatc me directly via https://www.linkedin.com/in/citurria/
  
Enjoy!


