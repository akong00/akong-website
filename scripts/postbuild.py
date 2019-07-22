import shutil
import os
import sys
from subprocess import call
from datetime import datetime

#MOVE BUILD TO CORRECT REPO
source = 'build/'
destination = '../akong00.github.io/'
back2source = '../akong-website/'

items = os.listdir(source)

for i in items:
    try:
        shutil.copy(source + i, destination)
    except:
        try:
            shutil.copytree(source + i, destination + i)
        except:
            try:
                os.chdir(destination)
                shutil.rmtree(destination + i)
                os.chdir(back2source)
                shutil.copytree(source + i, destination + i)
            except:
                print('error with path:', destination)
                sys.exit()

shutil.rmtree(source)

print('moved items in build folder to: ', source)
#END

try:
    os.chdir(destination)
except:
    print('error with path:', destination)
    sys.exit()

#PUSH TO GITHUB
commit_message = "build date: " + str(datetime.today())
call('git add .', shell = True)
call('git commit -m "'+ commit_message +'"', shell = True)
call('git push', shell = True)

print('pushed to Github on: ', datetime.today())
#END

try:
    os.chdir(back2source)
except:
    print('error with path:', back2source)
    sys.exit()