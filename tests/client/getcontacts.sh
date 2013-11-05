curl -X POST --data-ascii @credentials.json http://744978159dbed60a98228e60063b959c0c84239d.cloudapp-preprod.appcelerator.com/api/1.0/msDynamicsCrm1.0/login --header "Content-Type:application/json" --dump-header headers
curl -X POST -o response1.json --compressed --data-ascii @query.json http://744978159dbed60a98228e60063b959c0c84239d.cloudapp-preprod.appcelerator.com/api/1.0/msDynamicsCrm1.0/get-details --header "Content-Type:application/json" --header "Accept-Encoding: gzip" -L -b headers --dump-header headers1
curl -X POST -o response2.json --compressed --data-ascii @query2.json http://744978159dbed60a98228e60063b959c0c84239d.cloudapp-preprod.appcelerator.com/api/1.0/msDynamicsCrm1.0/get-details --header "Content-Type:application/json" --header "Accept-Encoding: gzip" -L -b headers --dump-header headers2
ls -la response1.json
ls -la response2.json
