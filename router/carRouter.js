const router = require("express").Router();
const db = require("../data/db-config");
module.exports = router;

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "not working" });
  }
});

// router.post("/", async (req, res) => {
//   const { id } = req.params;
//   const carsData = req.body;

//   db("cars")
//     .insert(carsData)
//     .then(car => {
//       db("cars")
//         .where({ id: car[0] })

//         .then(newCar => {
//           res.status(201).json(newCar);
//         });
//     })
//     .catch(error => {
//       console.log(error);

//       res.status(500).json({ error: "nope" });
//     });
// });

router.post("/", async (req, res) => {
  const payload = {
    Make: req.body.Make,
    Model: req.body.Model,
    Mileage: req.body.Mileage
  };
  try {
    const id = await db("cars").insert(payload);
    try {
      // don't return promise
      const added = await db("cars").where("Vin", id[0]);
      // .first();
      res.status(200).json(added);
    } catch (error) {
      res.status(500).json({ error: "nope" });
    }
  } catch (error) {
    res.status(500).json({ error: "not working" });
  }
});

router.put("/:Vin", async (req, res) => {
  try {
    await db("accounts")
      .where("Vin", req.params.id)
      .update(req.body);
    return res.json(
      await db("cars")
        .where("Vin", req.params.id)
        .first()
    );
  } catch (error) {
    res.status(500).json({ error: "not working" });
  }
});
