use Pizzeria
'already on db Pizzeria'
db.provincias.insertMany(
  [{nombre: "Barcelona"},{nombre:"Tarragona"},{nombre:"Girona"},{nombre:"Lleida"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("6407365440d8e7a085ba6e45"),
    '1': ObjectId("6407365440d8e7a085ba6e46"),
    '2': ObjectId("6407365440d8e7a085ba6e47"),
    '3': ObjectId("6407365440d8e7a085ba6e48")
  }
}
db.localidades.insertOne(
    {nombre: "Barcelona", 
    provincia:{
      $ref: "provincias",
      $id: ObjectId("6407365440d8e7a085ba6e45")
    }})
{
  acknowledged: true,
  insertedId: ObjectId("6407368740d8e7a085ba6e49")
}
db.localidades.insertOne(
        {nombre: "Figueras", 
        provincia:{
          $ref: "provincias",
          $id: ObjectId("6407365440d8e7a085ba6e47")
        }})
{
  acknowledged: true,
  insertedId: ObjectId("640736c540d8e7a085ba6e4a")
}
db.categorias_pizzas.insertMany([{nombre:"pizzas clasicas"},{nombre:"pizzas especiales"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64074b0840d8e7a085ba6e4b"),
    '1': ObjectId("64074b0840d8e7a085ba6e4c")
  }
}
db.productos.insertOne({
    nombre: "Pizza hawaiana",
    descripción: "Pizza con jamón, piña y salsa de tomate",
    imagen: "imagen.jpg",
    precio: 10.99,
    categoría: ObjectId("64074b0840d8e7a085ba6e4c")
  })
  {
    acknowledged: true,
    insertedId: ObjectId("64074ba340d8e7a085ba6e4d")
  }
  db.productos.insertOne({
    nombre: "Pizza margarita",
    descripción: "Pizza con queso y salsa de tomate",
    imagen: "imagen.jpg",
    precio: 9.99,
    categoría: ObjectId("64074b0840d8e7a085ba6e4b")
  })
  {
    acknowledged: true,
    insertedId: ObjectId("64074bea40d8e7a085ba6e4e")
  }
  db.tiendas.insertOne({
    dirección: "Calle 123",
    código_postal: "12345",
    localidad:{
          localidad:{
            $ref: "localidades",
            $id: ObjectId("640736c540d8e7a085ba6e4a")
          }
  }})
  {
    acknowledged: true,
    insertedId: ObjectId("6407528d40d8e7a085ba6e4f")
  }
  db.empleados.insertMany([
    {nombre:"Pedro", apellido:"Perez", NIF:"11111111A", telefono:"622334455", puesto:"repartidor", tienda:{$ref: "tiendas", $id: ObjectId("6407528d40d8e7a085ba6e4f") }},
    {nombre:"Zara", apellido:"Sanchhez", NIF:"22222222B", telefono:"622337788", puesto:"cocinero", tienda:{$ref: "tiendas", $id: ObjectId("6407528d40d8e7a085ba6e4f") }}])
  {
    acknowledged: true,
    insertedIds: {
      '0': ObjectId("640773fa40d8e7a085ba6e50"),
      '1': ObjectId("640773fa40d8e7a085ba6e51")
    }
  }
  db.clientes.insertOne({
    nombre: "Maria",
    apellidos: "Pérez",
    dirección: "Calle Roma 3",
    código_postal: "08008",
    localidad:{ $ref: "localidades", $id: ObjectId("640736c540d8e7a085ba6e4a")},
    teléfono: "623456789"
  })
  {
    acknowledged: true,
    insertedId: ObjectId("6407779d40d8e7a085ba6e52")
  }    
  db.productos.insertOne({
    nombre: "Hamburguesa",
    descripción: "Carne de ternera, queso, lechhuga y tomate",
    imagen: "imagen.jpg",
    precio: 12.90,
  })
{
  acknowledged: true,
  insertedId: ObjectId("6407824040d8e7a085ba6e53")
}
db.productos.insertOne({
    nombre: "Refresco",
    descripción: "Lata de refresco a elegir",
    imagen: "imagen.jpg",
    precio: 2.50,
  })
{
  acknowledged: true,
  insertedId: ObjectId("6407827c40d8e7a085ba6e54")
}
db.pedidos.insertOne({
    fecha_hora: "12-02-23",
    cliente: ObjectId("6407779d40d8e7a085ba6e52"),
    productos: [
    {
    id_producto: ObjectId("6407824040d8e7a085ba6e53"),
    cantidad: 2
    },
    {
    id_producto: ObjectId("64074bea40d8e7a085ba6e4e"),
    cantidad: 1
    }
    ],
    precio_total: 25.79,
    tipo_pedido: "domicilio", 
    repartidor: ObjectId("640773fa40d8e7a085ba6e50")
    })
    {
      acknowledged: true,
      insertedId: ObjectId("6407b49d9ff5ded106918286")
    }