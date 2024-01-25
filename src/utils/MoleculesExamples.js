const trioxidoDeAzufre = {
  atoms: [
    { id: 'sulfur', pos: [0, 0, 0], radius: 0.25, color: '#ff0' },
    { id: 'oxygen1', pos: [0.5, 0.5, 0], radius: 0.2, color: '#f00' },
    { id: 'oxygen2', pos: [-0.5, 0.5, 0], radius: 0.2, color: '#f00' },
    { id: 'oxygen3', pos: [0, -0.6, 0], radius: 0.2, color: '#f00' }
  ],
  connectors: [
    { id: 'connector1', start: [0, 0, 0], end: [0.5, 0.5, 0] },
    { id: 'connector2', start: [0, 0, 0], end: [-0.5, 0.5, 0] },
    { id: 'connector3', start: [0, 0, 0], end: [0, -0.5, 0] }
  ]
}

console.log(ethanol.atoms, ',', ethanol.connectors)
