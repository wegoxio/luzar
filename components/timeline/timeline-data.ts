export type TimelineItem = {
  year: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

/**
 * Para agregar un hito, duplica uno de estos objetos y cambia sus datos.
 * Las imágenes viven en /public/timeline y se referencian desde /timeline/...
 */
export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2009",
    image: "/timeline/timeline-01.png",
    imageAlt: "Edificios corporativos vistos desde abajo",
    title: "Nace Luzar",
    description:
      "Se constituyó Luzar como una empresa especializada en la asesoría y comercialización de commodities agrícolas, metales y minerales.",
  },
  {
    year: "2010",
    image: "/timeline/timeline-02.png",
    imageAlt: "Puerto de embarcaciones",
    title: "Primer embarque a Venezuela",
    description:
      "Ejecutamos nuestro primer embarque hacia Venezuela: 10.000 TM de harina de soya a bordo del buque MV Nataly Volten.",
  },
  {
    year: "2012",
    image: "/timeline/timeline-03.png",
    imageAlt: "Buques cargueros en el puerto de salida",
    title: "Expansión a Perú y Bolivia",
    description:
      "Abrimos oficinas en Perú y Bolivia, desde donde iniciamos operaciones de originación de metales y minerales.",
  },
  {
    year: "2013",
    image: "/timeline/timeline-04.png",
    imageAlt: "Buque carguero rumbo a su destino",
    title: "Llegada a Ecuador y Miami",
    description:
      "Expandimos operaciones a Ecuador, alcanzando 500.000 TM comercializadas. Ese mismo año inauguramos nuestra oficina en Miami.",
  },
  {
    year: "2014",
    image: "/timeline/timeline-05.png",
    imageAlt: "Campo agrícola",
    title: "Entrada al mercado colombiano",
    description:
      "Ingresamos al mercado colombiano, alcanzando hasta 1.000.000 TM de materias primas y abrimos una de nuestras oficinas principales en el país.",
  },
  {
    year: "2015",
    image: "/timeline/timeline-06.png",
    imageAlt: "Puerto carguero",
    title: "Enfoque en commodities agrícolas",
    description:
      "Vendimos la unidad de metales y minerales para centrar nuestras operaciones exclusivamente en commodities agrícolas.",
  },
  {
    year: "2017",
    image: "/timeline/timeline-07.png",
    imageAlt: "Billetera Visa",
    title: "Expansión a República Dominicana",
    description:
      "Expandimos operaciones hacia República Dominicana y alcanzamos un volumen comercializado de 1.500.000 TM.",
  },
  {
    year: "2018",
    image: "/timeline/timeline-08.png",
    imageAlt: "Poblado Urbano",
    title: "Nace Sagitta Marine",
    description:
      "Iniciamos Sagitta Marine como nuestra división interna de contratación y gestión de fletes marítimos.",
  },
  {
    year: "2019",
    image: "/timeline/timeline-09.png",
    imageAlt: "Buque en el medio del mar transportando commodities",
    title: "Consolidación de Sagitta Marine",
    description:
      "Sagitta Marine se convirtió en una agencia integral de transporte marítimo, prestando servicios a Luzar y a clientes externos.",
  },
  {
    year: "2020",
    image: "/timeline/timeline-10.png",
    imageAlt: "Buque carguero visto desde atrás",
    title: "Crecimiento récord de operaciones",
    description:
      "Luzar alcanzó 1.600.000 TM, mientras que Sagitta Marine gestionó aproximadamente 2.200.000 TM en fletes marítimos.",
  },
  {
    year: "2021",
    image: "/timeline/timeline-11.png",
    imageAlt: "Puerto carguero",
    title: "Nuevas operaciones y productos",
    description:
      "Desarrollamos programas con barcazas bajo modalidad CIF e incorporamos subproductos agrícolas a nuestro programa comercial en Colombia.",
  },
  {
    year: "2022",
    image: "/timeline/timeline-12.png",
    imageAlt: "Planta de producción",
    title: "Expansión logística y exportadora",
    description:
      "Alcanzamos 400.000 TM en operaciones de elevación y exportamos hasta 30.000 TM de aceite crudo de soya.",
  },
  {
    year: "2023",
    image: "/timeline/timeline-13.png",
    imageAlt: "Campo agrícola",
    title: "Compromiso con la sostenibilidad",
    description:
      "Iniciamos el desarrollo de nuestro programa de sostenibilidad y responsabilidad social bajo criterios ESG.",
  },
  {
    year: "2024",
    image: "/timeline/timeline-14.png",
    imageAlt: "Bosque de árboles",
    title: "Récord de volumen y nuevo producto",
    description:
      "Alcanzamos 1.700.000 TM e incorporamos el maíz blanco a nuestro portafolio, comercializando 217.000 TM de este nuevo producto.",
  },
  {
    year: "2025",
    image: "/timeline/timeline-15.png",
    imageAlt: "Campo agrícola",
    title: "Diversificación del portafolio",
    description:
      "Comenzamos a desarrollar nuevos proyectos y ampliamos nuestro portafolio con productos como café de exportación y azúcar.",
  },
];
