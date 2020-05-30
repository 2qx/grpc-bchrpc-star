#!/bin/bash

wget https://raw.githubusercontent.com/gcash/bchd/master/bchrpc/bchrpc.proto -O pb/bchrpc.proto
while read TARGET; do
  protoc -I=pb bchrpc.proto --${TARGET}_out=${TARGET}
done <star.txt

