# manos-libres

Traductor open-source de texto a Lengua de Señas Venezolana (LSV) usando avatar 3D.

## Características

- Next.js (App Router) + TypeScript
- Diccionario básico de señas (lsv-dictionary.json)
- Animaciones 3D (formato .glb) para cada seña
- Input de texto: el avatar reproduce las señas en orden
- Despliegue gratuito en GitHub Pages

## Instalación local

```powershell
# Instala dependencias
npm install

# Corre en modo desarrollo
npm run dev
```

## Exportar y desplegar en GitHub Pages

```powershell
# Exporta el sitio estático
npm run build

# Despliega a GitHub Pages (requiere gh-pages)
npm run deploy
```

## Estructura del proyecto

- `/app` — Rutas y componentes principales (App Router)
- `/components` — Componentes reutilizables (ej. AvatarViewer)
- `/data/lsv-dictionary.json` — Diccionario texto → seña
- `/animations` — Archivos .glb de animaciones
- `/public` — Archivos públicos

## Licencia

- Código: MIT
- Animaciones/datos: CC BY-SA 4.0

## Cómo contribuir

Lee `CONTRIBUTING.md` y abre un issue o pull request.

---

Proyecto impulsado por la comunidad para la accesibilidad y la inclusión.
