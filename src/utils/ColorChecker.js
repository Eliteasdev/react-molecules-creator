export function isHexColor (value) {
  // Expresión regular para validar un color hexadecimal
  const regex = /^#([0-9A-Fa-f]{3}){1,2}$/

  // Verifica si el valor coincide con la expresión regular
  return regex.test(value)
}
