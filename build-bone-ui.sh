#!/bin/bash

cd bone-ui/icon && npm run build

Parallel=("alert  avatar  badge  button  card  checkbox  close-button  dot  hooks  icons  input  radio  spinner  tag drawer arrow modal animate tooltip")


build_package(){
  cd "../"$1
  npm run build
}


for p in ${Parallel[@]}
do
   build_package $p
done
