module.exports = () => {
  return {
    ckeditor: {
      enabled: true,
      config: {
        plugin: {
          // disable data-theme tag setting //
          // setAttribute:false,

          // disable strapi theme, will use default ckeditor theme //
          // strapiTheme:false,

          // styles applied to editor container (global scope) //
          // styles:`
          // .ck.ck-editor__main .ck-focused{
          //   max-height: 700px;
          // }
          // :root{
          //   --ck-color-focus-border:red;
          //   --ck-color-text:red;
          // }
          // `
        },

      }
    }
  }
}
