# 🎓 Univite — Universidad con IA

Plataforma de cursos con videos generados por IA. Built with React + Vite.

---

## 🚀 Instalación

```bash
# 1. Entra a la carpeta
cd univite

# 2. Instala dependencias
npm install

# 3. Corre en local
npm run dev
```

Abre http://localhost:5173

---

## ✏️ Cómo agregar contenido

Todo el contenido vive en **un solo archivo**:

```
src/data/courses.js
```

### Agregar un curso

```js
{
  id: 'historia',           // URL: /curso/historia
  emoji: '🏛️',
  tag: 'Historia',
  title: 'Historia de México',
  desc: 'Descripción breve del curso.',
  color: '#fa6d9a',
  modules: [ ... ]
}
```

### Agregar un módulo

```js
{
  id: 'mod-1',
  title: 'México Prehispánico',
  lessons: [ ... ]
}
```

### Agregar una lección

```js
{
  id: 'les-1-1',
  title: 'Los Olmecas',
  duration: '10:30',
  // Pega aquí el ID de YouTube (lo que va después de ?v= en la URL)
  videoId: 'XXXXXXXXX',
}
```

### Cómo obtener el videoId de YouTube

URL del video: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
videoId: `dQw4w9WgXcQ`

---

## 🌐 Deploy en Netlify (recomendado)

```bash
# 1. Build del proyecto
npm run build

# 2. Entra a netlify.com/drop
# 3. Arrastra la carpeta /dist que se generó
# ¡Listo! Te da una URL pública
```

### Deploy en Vercel

```bash
npm install -g vercel
vercel
```

---

## 📁 Estructura

```
univite/
├── src/
│   ├── data/
│   │   └── courses.js      ← ✅ EDITA AQUÍ
│   ├── pages/
│   │   ├── Home.jsx        ← Página principal con grid de cursos
│   │   ├── CoursePage.jsx  ← Lista de módulos y lecciones
│   │   └── LessonPage.jsx  ← Reproductor de video + sidebar
│   ├── components/
│   │   └── Navbar.jsx
│   ├── App.jsx             ← Rutas
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```
