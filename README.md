docker build server/. -t monsterborg-controller-server
docker tag monsterborg-controller-server ffaerber/monsterborg-controller-server
docker push ffaerber/monsterborg-controller-server
