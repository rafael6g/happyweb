const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-23.2883687",
    lng: "-51.1811097",
    name: "Lar das Vovozinhas",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    images: [
      "https://images.unsplash.com/photo-1574350518720-d92affb18bee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
      ,
      "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    whatsapp: "4399564788",
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 17h até 8h",
    open_on_weekends: "0",
  });

  //consultar dados na tabela
  // const selectedOrphanges = await db.all("SELECT * FROM orphanages");
  // console.log(selectedOrphanges);

  // consultar somente 1 orfanato, pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"');
  // console.log(orphanage);

  // deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"));
});
