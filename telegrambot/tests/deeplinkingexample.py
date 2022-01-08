from telegram import Update, ForceReply
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext



updater = Updater(token='5025677593:AAFicK5ytDJvu59Zx2IT7BlKTHUf9BPzigM', use_context=True)  #  Instead of placing bot token in code, we will use environment variable
def start(update: Update, context: CallbackContext):  # Receives the initial message to "authenticate user" and link their Telegram account to the Heart2Heart Account
    payload = update.message.text.split(' ')[1]  # Extracts the use hash value from the deep linking
    User_Name = UserNameExtractor(payload)  # This function performs a lookup for User's name from the Firebase to get their name based on hash passed through deeplink
    context.bot.send_message(chat_id=update.effective_chat.id, text="Hi "+User_Name+"! Welcome to Heart2Heart Telegram platform! We have linked your Telegram account to your official Heart2Heart Account")


def UserNameExtractor(payload): # A very bad example of the name extraction process based on hash from firebase
    if payload == '69420':
        return 'Ojas'


dispatcher = updater.dispatcher
dispatcher.add_handler(CommandHandler("start", start))
updater.start_polling()
