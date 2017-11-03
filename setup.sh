#/bin/sh

scp create.sh opc@140.86.1.231:~
scp reload.sh opc@140.86.1.231:~
ssh opc@140.86.1.231 sh create.sh

