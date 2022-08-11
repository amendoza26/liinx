export const SidebarData = [
    {
        title: "Mis datos", 
        src: "fact_check", 
        submenu: true, 
        submenuItems: [
            {
                title: "Datos Personales",
                path: "contact-form"
            },
            {
                title: "Validación avanzada",
                path: "validacion-avanzada"
            },
            {
                title: "Configuración",
                path: "configuracion"
            }
        ] 
    },
    { 
        title: "Mi actividad", 
        src: "launch",
        submenu: true, 
        submenuItems: [
            {
                title: "Mis consentimientos",
                path: "consentimiento"
            },
            {
                title: "Mi actividad reciente",
                path: "actividad-reciente"
            },
            {
                title: "Mis afiliaciones",
                path: "afiliaciones"
            }
        ] 
    },
      { title: "Información", src: "content_paste" },
      { title: "Beneficios ", src: "focus" },
      { title: "Empresas", src: "store" },
      { title: "Contáctanos", src: "contact_support" },
  ];