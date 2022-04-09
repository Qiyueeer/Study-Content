
import tweepy
from time import sleep
import random

import json
with open('test.json', 'r') as f:
    info = json.load(f)



CONSUMER_KEY = 'dPlqocUt62gH9NDBAooIe32tA'
CONSUMER_SECRET = 'IsxBnVUekmFbqtXmilpduaqdOPqVQLG4ttg7PzlnQ9v2EYGkYk'
ACCESS_KEY = '1494121365888286725-lqVSZoDFlJxhHbpTUF0BaOTuItqrzD'
ACCESS_SECRET = 'V8DbURuo4Xvx5o5l93KmFYZyxh9kZtQd5q0nolwa0fMtS'


auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)
screen_name = "QQQQQQBot_"



api.creat_friendship('TwitterAPI')

randomChoice = random.randrange(len(info))
print(info[randomChoice])
api.update_status(status=info[randomChoice])