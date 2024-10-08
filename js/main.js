class Alumno {
    constructor(nombre, apellidos, edad) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
    }
  }
  
  const alumnos = [
    new Alumno('Juan', 'Pérez', 20),
    new Alumno('María', 'García', 21),
    new Alumno('Carlos', 'Fernández', 22),
    new Alumno('Ana', 'López', 19),
    new Alumno('Jorge', 'Martínez', 23),
    new Alumno('Luis', 'Ramírez', 20),
    new Alumno('Sara', 'Gómez', 21),
    new Alumno('Marta', 'Hernández', 22),
    new Alumno('Raúl', 'Jiménez', 23),
    new Alumno('Sofía', 'Díaz', 20),
    new Alumno('Alberto', 'Ortiz', 21),
    new Alumno('Carmen', 'Rubio', 22),
    new Alumno('Miguel', 'Molina', 23),
    new Alumno('Paula', 'Santos', 20),
    new Alumno('Elena', 'Núñez', 21),
    new Alumno('David', 'Romero', 22),
    new Alumno('Patricia', 'Vargas', 23),
    new Alumno('Fernando', 'Reyes', 20),
    new Alumno('Beatriz', 'Gutiérrez', 21),
    new Alumno('Manuel', 'Castro', 22),
    new Alumno('Eva', 'Delgado', 23),
    new Alumno('Isabel', 'Serrano', 20)
  ];
  
  let alumnosGenerados = [];
  
  const container = document.getElementById('container');
  const generateBtn = document.getElementById('generate-btn');
  
  function generarAlumno() {
    if (alumnosGenerados.length >= 22) {
      alert('No se pueden generar más alumnos.');
      return;
    }
  
    let alumnoAleatorio;
    do {
      alumnoAleatorio = alumnos[Math.floor(Math.random() * alumnos.length)];
    } while (alumnosGenerados.includes(alumnoAleatorio));
  
    alumnosGenerados.push(alumnoAleatorio);
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${alumnoAleatorio.nombre}  ${alumnoAleatorio.apellidos}</h3>
      <p>Edad: ${alumnoAleatorio.edad}</p>
      <button>Eliminar</button>
    `;
    
    card.querySelector('button').addEventListener('click', () => {
      container.removeChild(card);
      alumnosGenerados = alumnosGenerados.filter(al => al !== alumnoAleatorio);
    });
  
    container.appendChild(card);
  }
  
  generateBtn.addEventListener('click', generarAlumno);
  