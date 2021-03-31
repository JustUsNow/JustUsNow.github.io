from vk_bot import VkBot
import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType
from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['POST'])
def response():
    return 'eaeb887b'

if __name__=='__main__':
    app.run()

# API-ключ созданный ранее
token = "b6fef6432be4df1b92cfc27cb3e88666d00d2229a272fe41a05fba202517575e260c1707539fbe8dbc175"

# Авторизуемся как сообщество
vk = vk_api.VkApi(token=token)

# Работа с сообщениями
longpoll = VkLongPoll(vk)

print("Server started")
for event in longpoll.listen():
    if event.type == VkEventType.MESSAGE_NEW:
        if event.to_me:
        
            print('New message:')
            print(f'For me by: {event.user_id}', end='')
            
            bot = VkBot(event.user_id)
            write_msg(event.user_id, bot.new_message(event.text))
            
            print('Text: ', event.text)
        
