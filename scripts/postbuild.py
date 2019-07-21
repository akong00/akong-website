import shutil
import os
from subprocess import call
from datetime import datetime

#MOVE BUILD TO CORRECT REPO
source = 'build/'
destination = '../akong00.github.io'
back2source = '../akong-website'

items = os.listdir(source)

for i in items:
    shutil.copy(source + i, destination)

shutil.rmtree(source)

print('moved items in build folder to: ', source)
#END

call('cd ' + destination, shell = True)

#PUSH TO GITHUB
commit_message = "build date: " + str(datetime.today())
call('git add .', shell = True)
call('git commit -m "'+ commit_message +'"', shell = True)
call('git push', shell = True)

print('pushed to Github on: ', datetime.today())
#END

call('cd ' + back2source, shell = True)