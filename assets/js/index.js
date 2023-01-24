const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170,
      img: "./assets/imgs/1.jpg"
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130,
      img: "./assets/imgs/2.jpg"
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80,
      img: "./assets/imgs/3.jpg"
    },
    {
      name: "Casa minimalista",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6,
      img: "./assets/imgs/4.jpg"
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200,
      img: "./assets/imgs/5.jpg"
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500,
      img: "./assets/imgs/6.jpg"
    }
  ];
  
  // NUMERO TOTAL DEL PROPIEDADES EN LA PRIMERA RENDERIZACIÓN //
  let propiedadesJSONLength = propiedadesJSON.length;

  let totalPropiedades = document.getElementById("TotalPropiedades")
  totalPropiedades.innerHTML = `<h4 class="py-3">Total: <span>${propiedadesJSONLength}</span></h4>`;


  //PRIMERA RENDERIZACION DE PROPIEDADES //
  let propiedadesContainer = document.getElementById("propiedadesContainer")

  for(let propiedad of propiedadesJSON){
    propiedadesContainer.innerHTML += `<div class="propiedad">
                                        <div class="img" style="background-image: url(${propiedad.img})"></div>
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


// APLICACIÓN DE FILTROS DE BUSQUEDA Y NUEVA RENDERIZACIÓN //
let roomsNumber = document.getElementById("Rooms");
let minMetros = document.getElementById("MinMetros");
let maxMetros = document.getElementById("MaxMetros");


let onClickForm = ()=>{
  let nuevoTotalPropiedades = 0;

  if(roomsNumber.value, minMetros.value, maxMetros.value){
    propiedadesContainer.innerHTML = "";
    for(let propiedad of propiedadesJSON){
      if(propiedad.rooms === Number(roomsNumber.value) && propiedad.m >= Number(minMetros.value) && propiedad.m <= Number(maxMetros.value)){
        nuevoTotalPropiedades +=1;
        propiedadesContainer.innerHTML += `<div class="propiedad">
                                            <div class="img" style="background-image: url(${propiedad.img})"></div>
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
    alert("Faltan campos por llenar")
    return;
  }
}