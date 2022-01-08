#  Deeplinking Telegram Bot:

The objective of deeplinking is to link a H2H user's telegram account to their H2H account. The user will have to make an account on H2H website and will be given the option 
to link their Telegram account with the click of a button with the followling URL:
```
https://t.me/<H2HBotUserName>?start=<PAYLOAD>
```

The ```PAYLOAD``` could potentially be the hash of the users account ID in the H2H platform. The moment the user click on the button, Telgram application should open up and the 
```PAYLOAD``` could be sent Telegram Bot. Since every Telegram account has a unique ```user_id```, we could link the ```user_id``` of the Telegram account with H2H account user ID via ```PAYLOAD```.


  ![Alt text](https://cdn.discordapp.com/attachments/910194991614287968/929296739041673266/index.jpg)
              
After the user has been identified, their name could be obtained directly from Firebase to give them an introductory message as shown above.
              
An example for the above deeplinking Telegram bot can be found here: https://github.com/bettersg/heart2heart/blob/main/telegrambot/tests/deeplinkingexample.py
