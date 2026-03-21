# ReactViz.dev (LazyReact)

This repo contains a full-stack interactive React learning platform:

- **Frontend**: React + Vite (`LazyReact/frontend`)
- **Backend**: Java Spring Boot (Maven) (`LazyReact/backend`)

## Run the frontend (React)

PowerShell on Windows may block `npm.ps1` / `npx.ps1`. The easiest workaround is to run npm through `cmd`.

Open a terminal in `LazyReact/frontend` and run:

```powershell
cd C:\Users\Hp\Desktop\LazyReact\LazyReact\frontend
cmd /c npm install
cmd /c npm run dev
```

Then open `http://localhost:5173`.

## Run the backend (Spring Boot)

You need:

- Java 17+
- Maven (`mvn`) installed and available in PATH
- PostgreSQL running with a database named `reactviz`

Update DB credentials in `backend/src/main/resources/application.yml`, then:

```powershell
cd C:\Users\Hp\Desktop\LazyReact\LazyReact\backend
mvn spring-boot:run
```

Swagger UI (when backend is running): `http://localhost:8080/swagger-ui.html`