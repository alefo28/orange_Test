const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

// Configura el puerto serial (reemplaza '/dev/tty-usbserial1' con tu puerto serial)
const port = new SerialPort('/dev/tty-usbserial1', {
  baudRate: 9600
});

// Utiliza un parser para dividir los datos en líneas
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

// Escucha cuando el puerto está abierto
port.on('open', () => {
  console.log('Puerto serial abierto');
});

// Escucha los datos que llegan por el puerto
parser.on('data', (data) => {
  console.log('Datos recibidos:', data);
});

// Maneja errores
port.on('error', (err) => {
  console.error('Error:', err.message);
});
