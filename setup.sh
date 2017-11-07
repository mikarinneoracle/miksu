#/bin/sh

scp create.sh opc@140.86.1.64:~
scp reload.sh opc@140.86.1.64:~
ssh -A opc@140.86.1.64 sh create.sh

