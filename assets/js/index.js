const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "./assets/imgs/1.jpg",
      rooms: 2,
      m: 170,
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "./assets/imgs/2.jpg",
      rooms: 2,
      m: 130,
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "./assets/imgs/3.jpg",
      rooms: 1,
      m: 80,
    },
    {
      name: "Casa minimalista",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "./assets/imgs/4.jpg",
      rooms: 1,
      m: 6,
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "./assets/imgs/5.jpg",
      rooms: 3,
      m: 200,
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "./assets/imgs/6.jpg",
      rooms: 5,
      m: 500,
    }
  ];
  // NUMERO TOTAL DEL PROPIEDADES EN LA PRIMERA RENDERIZACIÓN //
  let propiedadesJSONLength = propiedadesJSON.length;

  let totalPropiedades = document.getElementById("TotalPropiedades");
  totalPropiedades.innerHTML = `<h4 class="py-3">Total: <span>${propiedadesJSONLength}</span></h4>`;

  //PRIMERA RENDERIZACION DE PROPIEDADES //
  let propiedadesContainer = document.getElementById("propiedadesContainer");
  let propiedadesCards = "";

  for(let propiedad of propiedadesJSON){
    propiedadesCards += `<div class="propiedad">
                                        <div class="img" style="background-image: url(${propiedad.src})"></div>
                                        <section>
                                            <h5>${propiedad.name}</h5>
                                            <div class="d-flex justify-content-between">
                                                <p>Cuartos: ${propiedad.rooms}</p>
                                                <p>Metros: ${propiedad.m}</p>
                                            </div>
                                            <p class="my-3">${propiedad.description}</p>
                                            <button class="btn btn-info ">Ver más</button>         
                                        </section>
                                    </div>`
  }
  propiedadesContainer.innerHTML = propiedadesCards;

// APLICACIÓN DE FILTROS DE BUSQUEDA Y NUEVA RENDERIZACIÓN //
let roomsNumber = document.getElementById("Rooms");
let minMetros = document.getElementById("MinMetros");
let maxMetros = document.getElementById("MaxMetros");


let onClickForm = ()=>{
  let nuevoTotalPropiedades = 0;

  if(roomsNumber.value && minMetros.value && maxMetros.value){
    propiedadesCards = "";
    for(let propiedad of propiedadesJSON){
      if(propiedad.rooms === Number(roomsNumber.value) && propiedad.m >= Number(minMetros.value) && propiedad.m <= Number(maxMetros.value)){
        nuevoTotalPropiedades +=1;
        propiedadesCards += `<div class="propiedad">
                                            <div class="img" style="background-image: url(${propiedad.src})"></div>
                                            <section>
                                                <h5>${propiedad.name}</h5>
                                                <div class="d-flex justify-content-between">
                                                    <p>Cuartos: ${propiedad.rooms}</p>
                                                    <p>Metros: ${propiedad.m}</p>
                                                </div>
                                                <p class="my-3">${propiedad.description}</p>
                                                <button class="btn btn-info ">Ver más</button>         
                                            </section>
                                        </div>`
      }
      totalPropiedades.innerHTML = `<h4 class="py-3">Total: <span>${nuevoTotalPropiedades}</span></h4>`;
      }
  }else{
    alert("Faltan campos por llenar");
    return;
  }
  propiedadesContainer.innerHTML = propiedadesCards;
}