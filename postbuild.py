import shutil
import os
from subprocess import call
from datetime import datetime

#MOVE BUILD TO CORRECT REPO
source = '~/Github/akong-website/build'
destination = '~/Github/akong00.github.io'

items = os.listdir(source)

for i in items:
    shutil.move(source+i, destination)

print('moved items in build folder to: ', source)
#END

#PUSH TO GITHUB
commit_message = "build date: " + str(datetime.today())
call('git add .', shell = True)
call('git commit -m "'+ commit_message +'"', shell = True)
call('git push', shell = True)

print('pushed to Github')
#END
