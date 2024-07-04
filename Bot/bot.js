import TelegramBot from "node-telegram-bot-api";
const token = '6861321194:AAEd50vm-3cJKS4oajzMkHM21yQG7IeXf0E';
const bot = new TelegramBot(token , { polling : true});
const startMessage = `
سلام به ربات تلگرامی آکادمی روح بخش خوش آمدید
در اینجا میتوانید خیلی راحت کلاس هارا خریداری کنید، و فایل کلاس هارا دریافت کنید، برای راهنمایی بیشتر میتوانید از گزینه راهنمایی کمک بگیرید`;
const siteAddress = 'https://0dc9-2a01-4f8-1c1b-1214-00-1.ngrok-free.app';
bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    if(msg.text == '/start'){
        console.log(msg);
        bot.sendMessage(chatId , 'first project');
        bot.sendMessage(chatId , startMessage, {
            reply_markup : {
                inline_keyboard : [
                    [
                        {
                            text : 'فروشگاه ما',
                            
                            web_app : {
                                url : siteAddress,
                            }
                        }
                    ]
                ]
            }
        });
    }
    if(msg?.web_app_data?.data){
        console.log(msg?.web_app_data?.data);
        try{
            const data = JSON.parse(msg?.web_app_data?.data);
            bot.sendMessage(chatId , 'hello world');
        }catch(e){
            console.log(e);
        }
    }
});
