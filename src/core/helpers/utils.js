const stripHtmlTags = (html) => {
  // Reemplaza los &nbsp; con saltos de línea
  const withoutNbsp = html.replace(/&nbsp;/g, '\n');
  // Elimina el contenido dentro de las etiquetas <h1>
  const withoutH1Content = withoutNbsp.replace(/<h1[^>]*>.*?<\/h1>/g, '<h1></h1>');
  // Elimina el contenido dentro de las etiquetas <blockquote> y <pre>
  const withoutBlockquoteContent = withoutH1Content.replace(/<(blockquote|pre)[^>]*>.*?<\/\1>/g, '<$1></$1>');
  // Elimina el contenido dentro de las etiquetas <ul> y <ol>
  const withoutListContent = withoutBlockquoteContent.replace(/<(ul|ol)[^>]*>.*?<\/\1>/g, '<$1></$1>');
  // Elimina todas las otras etiquetas HTML
  const withoutHtmlTags = withoutListContent.replace(/<\/?[^>]+(>|$)/g, '');
  return withoutHtmlTags;
};

export { stripHtmlTags };
