#!/bin/bash

#init args
localApi=$1
thisSite=$2
instagramClientID=$3
instagramSecrit=$4

#Check if next.config is available if not Create config
FILE=next.config.js
if test -f "$FILE"; then
    echo "$FILE exist $localApi is nice $2 is not"
else
    echo "module.exports = {
	serverRuntimeConfig: {
		// Will only be available on the server side
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		localApi: '$localApi',
		thisSite: '$thisSite',
		instagramClientID: '$instagramClientID',
		instagramSecrit: '$instagramSecrit'
	}
};" >> next.config.js
fi

#Check if app has been build if not build App
npm run build

#Run App
npm start