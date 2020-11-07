const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
  index(req, res) {
    // isto é uma funcao index: function() {
    const city = req.query.city;
    return res.render("index", { city });
  },

  async orphanage(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM orphanages WHERE id = "${id}"`
      );
      const orphanage = results[0];

      // transforma string da images para array
      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      if (orphanage.open_on_weekends == "0") {
        orphanage.open_on_weekends = false;
      } else {
        orphanage.open_on_weekends = true;
      }

      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);

      return res.send("Erro no banco de dados!");
    }
  },

  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res) {
    const fields = req.body;

    // validar se todos os campos estao preenchidos
    if (Object.values(fields).includes("")) {
      res.send("Todos os campos devem ser preenchidos");
    }

    try {
      // salvar um orfanato
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        images: fields.images.toString(),
        whatsapp: fields.whatsapp,
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      })

      // redirecionamento
      return res.redirect('/orphanages')
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
};