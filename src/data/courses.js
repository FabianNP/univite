// ╔══════════════════════════════════════════════════════════════════╗
// ║                    DATOS DE UNIVITE                              ║
// ║  Aquí configuras todo: cursos, módulos, lecciones y nav.        ║
// ╚══════════════════════════════════════════════════════════════════╝

// ── ENLACES DEL MENÚ PRINCIPAL ────────────────────────────────────
// Agrega aquí los enlaces extra que quieres en la barra de navegación.
export const NAV_LINKS = [
  // { label: 'Blog',     href: 'https://tu-blog.com',   external: true },
  // { label: 'Recursos', href: '/recursos',              external: false },
]

// ── CURSOS ────────────────────────────────────────────────────────
// Cada curso tiene módulos, y cada módulo tiene lecciones con video.
// Los videoId son IDs de YouTube (la parte después de ?v= en la URL).
export const COURSES = [
  {
    id: 'finanzas',
    emoji: '💰',
    tag: 'Finanzas',
    title: 'Finanzas Globales & Sistema Económico',
    desc: 'Empresas, gobierno, patrimonio, inmuebles, SAT y el sistema financiero mexicano.',
    color: '#7c6dfa',
    modules: [
      {
        id: 'mod-1',
        title: 'Bases del Sistema Financiero',
        lessons: [
          {
            id: 'les-1-1',
            title: '¿Qué es el dinero? Historia y evolución',
            duration: '12:30',
            // ↓ Reemplaza con el ID real de tu video de YouTube
            videoId: 'dQw4w9WgXcQ',
            completed: false,
          },
          {
            id: 'les-1-2',
            title: 'El sistema bancario: bancos centrales y comerciales',
            duration: '15:00',
            videoId: 'dQw4w9WgXcQ',
            completed: false,
          },
          {
            id: 'les-1-3',
            title: 'Inflación, deflación y tipos de interés',
            duration: '11:45',
            videoId: 'dQw4w9WgXcQ',
            completed: false,
          },
        ],
      },
      {
        id: 'mod-2',
        title: 'Mercados Financieros Globales',
        lessons: [
          {
            id: 'les-2-1',
            title: 'Bolsas de valores: NYSE, NASDAQ, BMV',
            duration: '18:20',
            videoId: 'dQw4w9WgXcQ',
            completed: false,
          },
          {
            id: 'les-2-2',
            title: 'Renta fija: bonos soberanos y corporativos',
            duration: '14:10',
            videoId: 'dQw4w9WgXcQ',
            completed: false,
          },
        ],
      },
      {
        id: 'mod-3',
        title: 'El SAT y Tus Impuestos',
        lessons: [
          {
            id: 'les-3-1',
            title: 'Regímenes fiscales para personas físicas',
            duration: '20:00',
            videoId: 'dQw4w9WgXcQ',
            completed: false,
          },
          {
            id: 'les-3-2',
            title: 'Declaración anual: deducciones y saldo a favor',
            duration: '16:30',
            videoId: 'dQw4w9WgXcQ',
            completed: false,
          },
        ],
      },
    ],
  },

  // ── AGREGA MÁS CURSOS AQUÍ ──────────────────────────────────────
  // {
  //   id: 'historia',
  //   emoji: '🏛️',
  //   tag: 'Historia',
  //   title: 'Historia de México',
  //   desc: 'Prehispánico, conquista, independencia y siglo XX.',
  //   color: '#fa6d9a',
  //   modules: [
  //     {
  //       id: 'mod-1',
  //       title: 'México Prehispánico',
  //       lessons: [
  //         { id: 'les-1-1', title: 'Los Olmecas', duration: '10:00', videoId: 'TU_ID_AQUI' },
  //       ],
  //     },
  //   ],
  // },
]
