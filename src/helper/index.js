export const ExtraerIds = ({urls, text}) => {
  const regex = RegExp(`/${text}/(\\d+)`) // Expresión regular para encontrar números después de '/character/'

  return urls.map(url => {
    const match = url.match(regex);
    return match ? match[1] : null;
  }).filter(numero => numero !== null);
}

export const getParameterByName = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}