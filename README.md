# Angular Portfolio 2023 por Claudio Olivera

Puedes verlo en funcionamiento aqui: [Portfolio Claudio Olivera](https://portfolio-claudio-olivera.web.app/acerca)

## Descripción

Este es mi portfolio web personal. Está construido con [Angular 16.2.6](https://angular.io/), [Tailwind CSS](https://tailwindcss.com/), [FontAwesome](https://fontawesome.com/), [Google Fonts](https://fonts.google.com/) y [Supabase](https://supabase.com/), [Firebase](https://firebase.google.com).

## Características

- **Autenticación**: La aplicación cuenta con autenticación en Supabase. Puedes revisar la documentación de Supabase [aquí](https://supabase.com/).
  
- **Administración de certificados y proyectos**: Proporciona al administrador del portfolio la posibilidad de gestionar (crear, eliminar, editar, borrar) sus certificados de estudios y sus proyectos.


## Cómo ejecutar la aplicación

1. **Crear las tablas en Supabase (u otra tecnología a elección)**: 
    Para un completo uso de la app necesitarás crear las tablas en Supabase dando los permisos necesarios.
    Las tablas deberían respetar las interfaces que están en la ruta: `src/app/Interfaces` del proyecto.

2. **Crear el archivo `environment.ts` en el proyecto** 

3. **Configurar `environment.ts` de la siguiente manera para que la app funcione correctamente en el entorno de desarrollo**:

```typescript
export const environment = {
  production: false,
  supabase: {
    proyectosUrl:'https://xxxxxxxxxxxxxx.supabase.co/rest/v1/Proyectos',
    estudiosUrl: 'https://xxxxxxxxxxxxxx.supabase.co/rest/v1/Estudios',
    certificadosUrl:'https://xxxxxxxxxxxxxx.supabase.co/rest/v1/Certificaciones',
    publickey: 'xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    url: 'https://xxxxxxxxxxxxxx.supabase.co'
  }
};
```

4. **Instalar npm**: 
    
    En el terminal ejecuta este comando para instalar node package manager: 

    `npm install`
    
5. **Ejecutar el proyecto**: 
    
    En el terminal ejecuta uno de los siguientes comandos para visualizar/utilizar el proyecto en  el navegador:

    `ng serve` (cuando lo ejecutes con éxito la consola mostrará la ruta local en la que se encuentra)
  
    ó

    `ng serve -o` (para apertura automática del navegador en la ruta local en la que se encuentra el proyecto) 

## Futuras Actualizaciones

  En futuras versiones, planeo agregar la funcionalidad de editar también la imagen de perfil, editar la descripcion principal y agregar otras funcionalidades a el panel de administración relacionadas a las fechas de carga/eliminacion/edicion de los datos.
    
