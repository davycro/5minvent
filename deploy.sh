#!/bin/sh
#

npm run build && aws s3 sync build/ s3://5minvent.com
