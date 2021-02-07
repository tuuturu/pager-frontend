#!/bin/sh

### Inject env vars
TARGET_PATH=/usr/share/nginx/html/index.html
VARS=$(env | grep VITE_)

CONTENT="env={"

for var in ${VARS}
do
	CONTENT=${CONTENT}$(echo ${var} | awk -F'=' '{ printf $1; printf ":\""; printf $2; printf "\","; next }1' -)
done

sed -i '/<head>/ s~<head>~<head>\n    <script>'"$CONTENT"'}</script>~' ${TARGET_PATH}

### Enable history mode
NGINX_CONFIG_PATH=/etc/nginx/conf.d/default.conf
awk '/index.html/ { print "\ttry_files $uri $uri/ /index.html;"; next }1' ${NGINX_CONFIG_PATH} > ${NGINX_CONFIG_PATH}.new
mv ${NGINX_CONFIG_PATH}.new ${NGINX_CONFIG_PATH}

nginx -g 'daemon off;'
