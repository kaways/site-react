#!/usr/bin/env bash


function checkProcess()
{
    local process_pid = pm2 pid $(SITE_PROCESS_NAME)

    if [ $process_pid -eq 0 ]
    then
        npm install -y pm2 -g

        pm2 start npm --name "$(SITE_PROCESS_NAME)" -- start

        echo '.. PM2 instalado'
        echo ".. processo adicionado com o nome de : $(SITE_PROCESS_NAME)"
    else
        echo '.. PN2 ja instalado anteriormente'
        echo '.. nada foi feito ... '
    fi
}

checkProcess