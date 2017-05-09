# Messenger-bot

Build a nodejs bot in 10 minutes !

## Setting-up the environment

__The easiest method and gain time is to use the heroku web server.__
 
In first, Sign up to heroku on their website : https://www.heroku.com.
Then, download the CLI toolbelt of Heroku here : https://www.heroku.com

__Now, you can clone the project__

So now, type : 

```
npm install
```

Then, set up the Heroku env with : 

```
git init
git add --all
git commit -am "Inital commit"
heroku create
git push heroku master
```
These multiples commands, send the express app online thanks to heroku web server (commit/deploy).

In the project at the root, you got a Procfile, which look like this :

```
web node bot.js
```
That command tell to heroku what run, here our file __bot.js__ is used to launch our express web server

__Setting up Facebook app__

Now, let's go to : https://developers.facebook.com/apps/

1. Create a new app

2. Go to messenger tab, then setup webhook, a popin will appear, to ask a url of your app that heroku put online, so take the url of your web server from heroku and check all fields.
 Example : https://nameofapp.herokuapp.com/webhook/
 Don't forget to put the route /webhook/.
 
3. Now, go to the Generate token section in facebook app dashboard to get your access_token. You need to have a Facebook Page before generating the access_token.
  
4. So, you have your access_token, so you can subscribe to your page, it's mandatory to communicate with your bot, type in your terminal :

```
curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<ACCESS_TOKEN>"
```

Now, Both side can speak.
So, if you speak to the bot/page in messenger by typing the name of keys containing in __/utils/request.js__, the bot will answer with the value containing in the keys.

 ## Tips
 
 1. Each time, you do change in your app, you have to redeploy, there is a tiny script in bin/deploy.sh to deploy more quickly.
 
 2. Of course, it's a very simple bot, who can answer to key word.
 just contrib the javascript object __utils/request.js__
 
 3. In __/bodyJson/__ you have multiple examples of returned file of messenger, when your ask something to the bot.
 
 
## Author

Paul Rosset