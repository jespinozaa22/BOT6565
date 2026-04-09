# Nova Bridge

CRM omnicanal tipo SaaS enfocado en WhatsApp, con backend Node.js, frontend React y un bot comercial listo para automatizar atencion de clientes.

## Stack

- Frontend: React + Vite + TailwindCSS + Framer Motion + Zustand
- Backend: Node.js + Express + Socket.io + JWT + Mongoose
- IA: OpenAI
- WhatsApp: Baileys
- Infra: Docker Compose

## Estructura

- `apps/api`: API REST, sockets, MongoDB, autenticacion y modulo WhatsApp
- `apps/web`: interfaz SaaS premium tipo CRM
- `apps/bot`: bot de WhatsApp standalone para respuestas rapidas, captura de leads e IA

## Puesta en marcha

1. Copia `.env.example` a `.env`
2. Instala dependencias con `npm install`
3. Levanta MongoDB local o usa Docker
4. Ejecuta `npm run seed`
5. Ejecuta `npm run dev`
6. Para levantar solo el bot comercial usa `npm run dev:bot`

## Credenciales demo

- Email: `admin@novabridge.local`
- Password: `Admin123*`

## Servicios

- Frontend: `http://localhost:5173`
- API: `http://localhost:4000`
- Health: `http://localhost:4000/health`
- Bot QR portal: `http://localhost:3001`

## Bot de WhatsApp

- Flujo editable en `apps/bot/src/content/company-content.js`
- Configuracion comercial en `.env`
- Arranque local: `npm run dev:bot`
- Arranque productivo: `npm run start:bot`
- Los leads se guardan en `apps/bot/data/leads.db` (SQLite)
- La sesion de WhatsApp se persiste en `apps/bot/bot_sessions/`
- El QR local se genera como `apps/bot/bot.qr.png`

### Variables de entorno para el bot

- `OPENAI_API_KEY`: Clave de OpenAI para respuestas con IA
- `COMPANY_NAME`: Nombre de la empresa
- `COMPANY_WEBSITE`: Sitio web
- `COMPANY_AGENT_PHONE`: Teléfono del agente
- `COMPANY_HOURS`: Horario de atención
- `COMPANY_CITY`: Ciudad base
- `BOT_PORT`: Puerto del portal QR (default 3001)
- `BOT_SESSION_NAME`: Nombre de la sesión
- `BOT_SESSION_DIR`: Directorio de sesiones
- `BOT_QR_IMAGE`: Ruta del QR
- `BOT_PHONE_NUMBER`: Número de teléfono del bot
- `BOT_USE_PAIRING_CODE`: Usar código de emparejamiento (true/false)
- `BOT_DATA_DIR`: Directorio de datos
- `ALLOWED_PHONE_NUMBERS`: Lista de números permitidos separados por coma (ej. 51999999999,51988888888). Si se deja vacío, responde a todos los no agendados.

El bot responde solo a números no agendados en el teléfono, y opcionalmente limita a una lista blanca.

## Docker

Usa `docker compose up --build`

Si solo quieres el bot de WhatsApp, puedes ejecutar `docker compose up --build bot`

## Despliegue

Para un servidor o VPS:

1. Copia [.env.production.example](/C:/Users/frank/OneDrive/Documentos/New project/.env.production.example) a `.env.production`
2. Ajusta dominio, claves y datos de empresa
3. Ejecuta `docker compose -f docker-compose.prod.yml up -d --build`
4. Abre `http://IP_DEL_SERVIDOR:3001` para escanear el QR del bot

Archivos utiles para produccion:

- [docker-compose.prod.yml](/C:/Users/frank/OneDrive/Documentos/New project/docker-compose.prod.yml)
- [ecosystem.config.cjs](/C:/Users/frank/OneDrive/Documentos/New project/ecosystem.config.cjs)
- [apps/bot/Dockerfile](/C:/Users/frank/OneDrive/Documentos/New project/apps/bot/Dockerfile)

Si prefieres PM2 en vez de Docker:

1. Ejecuta `npm install`
2. Configura `.env.production`
3. Ejecuta `pm2 start ecosystem.config.cjs`
