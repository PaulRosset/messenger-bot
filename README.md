# Messenger-bot

Build a nodejs bot in 10 minutes !

## Setting-up the environment

__The easiest method and gain time is to use the heroku web server.__
 
In first, Sign up to heroku on their website : https://www.heroku.com.

Then, download the CLI toolbelt of Heroku here : https://toolbelt.heroku.com

Test it inside your terminal with :
```
$ heroku
```

__Now, you can clone the project__

Type in your terminal : 

```
$ git clone https://github.com/PaulRosset/messenger-bot.git
$ cd messenger-bot
$ npm install
```

Then, set up the Heroku env :

In first, connect your Heroku account with :

```
$ heroku login
``` 

And now :

```
$ git init
$ git add --all
$ git commit -am "Initial commit"
$ heroku create
$ git push heroku master
```
These multiples commands, send the express app online thanks to heroku web server (commit/deploy).

In the project at the root, you got a Procfile, which look like this :

```
web node bot.js
```
This command tell to heroku to run your __bot.js__ which is used to launch our express web server

__Setting up Facebook app__

Now, go to : https://developers.facebook.com/apps/

1. Create a new app

2. Go to messenger tab, then setup a webhook, a popin will appear to ask :
   - The url of your web app that heroku deployed online, don't forget to specify the route 'webhook', which is the route that facebook will use to 'curl' to connect both sides (Facebook and Heroku sides).
 	
 	    Example : https://nameofherokuapp.herokuapp.com/webhook/
 	
   - The second parameter, important to specify is the token verification, fill with anything. This will be used by facebook's curl to verify the authenticity of the app's owner. 
 	
 	    Example : 
```
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === '<TOKEN_U_CHOOSE>') {
            res.send(req.query['hub.challenge'])
        }
       res.send('Invalid Token')
     });
```
   - Finally, check all fields, then, you are done with facebook configuration.

3. Now, go to the Generate token section in facebook app dashboard to get your access_token. A bot is in fact a Facebook Page, there you have to create a page, before generating the access_token.
  
4. So, you have your access_token, you have to subscribe to your page, it's mandatory to communicate with your bot, then type in your terminal :

```
$ curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<ACCESS_TOKEN>"
```

Now, Both sides can speak.

You can go to the page of the bot and then speak to the bot thanks to messenger by typing the name of keys containing in __/utils/request.js__, the bot will answer with the value containing in the keys.

But, your bot isn't doing much things ...

 ## Go further

 To go further, meet me to [Messanger Bot Advanced](https://github.com/PaulRosset/messanger-bot-advanced.git)
 
 We will implement __Wit.ai__ an API to understand natural language but also integrate the __Strategies Pattern__. 

 ## Tips
 
 1. Each time, you do change in your app, you have to redeploy, there is a tiny script in bin/deploy.sh to deploy quickly.
 
 2. In __/bodyJson/__ you have multiple examples of returned file from messenger's json, when your ask something to the bot.
 
## Author

Paul Rosset

## License

MIT
