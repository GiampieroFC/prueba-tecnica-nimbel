# Prueba Técnica de la empresa Nimbel

Este proyecto es una aplicación desarrollada con **React**, **Vite** y **TypeScript** que permite gestionar personajes mediante una interfaz simple y organizada. La aplicación utiliza **TailwindCSS** para los estilos y varios hooks y utilidades personalizadas para la lógica de gestión de personajes.

## Requisitos

Para ejecutar este proyecto, necesitarás tener instalado en tu máquina:

- **Node.js** (versión 18 o superior) o **Bun**
- **pnpm**, **npm**, **bun** o **yarn** como gestor de paquetes

## Instalación

Sigue los pasos a continuación para clonar el repositorio y levantar la aplicación en tu máquina local:

### 1. Clonar este repositorio

```bash
git clone https://github.com/GiampieroFC/prueba-tecnica-nimbel.git
```

### 2. Navegar al directorio del proyecto

```bash
cd prueba-tecnica-nimbel
```

### 3. Instalar las dependencias

Si usas **npm**, ejecuta:

```bash
npm install
```

Si prefieres **yarn**, ejecuta:

```bash
yarn install
```

Si prefieres **pnpm**, ejecuta:

```bash
pnpm install
```

### 4. Levantar el servidor local

Una vez instaladas las dependencias, puedes iniciar la aplicación ejecutando:

Para **npm**:

```bash
npm run dev
```

Para **yarn**:

```bash
yarn dev
```

Para **pnpm**:

```bash
pnpm dev
```

Esto abrirá la aplicación en tu navegador predeterminado. Por defecto, estará disponible en `http://localhost:5173`.

## Estructura del Proyecto

```bash
root
├── public/
├── src/                   # Código fuente de la aplicación
│   ├── components/        # Componentes reutilizables
│   ├── data/              # Gestión de datos
│   ├── hooks/             # Hooks personalizados
│   ├── utils/             # Funciones utilitarias
│   ├── App.tsx            # Componente principal de la aplicación
│   ├── index.css          # Estilos globales
│   ├── main.tsx           # Punto de entrada principal
│   └── vite-env.d.ts      # Tipos de Vite
├── index.html             # Página HTML principal
├── package.json           # Dependencias y scripts del proyecto
├── postcss.config.js      # Configuración de PostCSS
├── README.md              # Documentación del proyecto
├── tailwind.config.js     # Configuración de TailwindCSS
└── vite.config.ts         # Configuración de Vite
```
## Scripts Disponibles

En este proyecto puedes ejecutar los siguientes scripts con el gestor de paquetes que uses, pondré el ejemplo con pnpm:

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Genera la versión de producción del proyecto.
- `pnpm lint`: Revisa el código en busca de errores con ESLint.
- `pnpm preview`: Previsualiza la aplicación en su versión de producción después de haber ejecutado el comando `build`.


## Dependencias

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para aplicaciones web modernas.
- **TailwindCSS**: Utilizado para estilizar la interfaz de forma eficiente.
- **TypeScript**: Tipado estático para una mayor robustez en el desarrollo.

## Notas

- Recuerda que la aplicación utiliza `localStorage` para persistir temporalmente los cambios en el navegador.

## Contribuciones

Si encuentras algún bug o deseas mejorar alguna parte del proyecto, ¡no dudes en abrir un issue o enviar un pull request!
