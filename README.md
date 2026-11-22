# SOCCER FC — protótipo 3D

## O que já funciona
- Campo 3D, jogadores e bola em Three.js.
- Controles touch: joystick, passe, chute, corrida e reiniciar.
- Modo treino local contra um adversário simples.
- Estrutura inicial de salas online via WebSocket (movimento/posição dos jogadores).

## Rodar no computador
1. Instale Node.js 18 ou superior.
2. Abra o terminal nesta pasta.
3. Rode `npm install`
4. Rode `npm start`
5. Abra `http://localhost:3000` no navegador.

## Testar no celular na mesma rede Wi-Fi
Descubra o IP local do computador e abra `http://IP-DO-COMPUTADOR:3000` no celular.

## Online pela internet
Para amigos de outras redes jogarem, publique esta pasta em um serviço de hospedagem que aceite Node.js e WebSocket. Use HTTPS/WSS. Compartilhe o endereço público.
O modo online deste protótipo sincroniza posições, mas ainda não é um multiplayer competitivo completo: falta sincronização autoritativa da bola, colisões, autenticação, reconexão, matchmaking e proteção contra trapaças.

## Observações
O jogo carrega Three.js de um CDN, então precisa de internet para abrir o campo 3D.
