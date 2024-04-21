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

const searchImage = (json) => {
  // Si el JSON está vacío, devuelve una cadena vacía
  if (!json) {
    return '';
  }
  
  // Expresión regular para buscar la primera etiqueta <img> y su contenido
  const imgRegex = /<img[^>]+>/;

  // Busca la primera coincidencia de la etiqueta <img> en el JSON
  const match = json.match(imgRegex);

  // Si se encuentra una coincidencia, devuelve la etiqueta <img> y su contenido, de lo contrario, devuelve una cadena vacía
  return match ? match[0] : '';
};

export { stripHtmlTags, searchImage };
