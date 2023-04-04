const UsersDB = require(`../models/`).users;
const OrdersDB = require(`../models/`).orders;
const OrderDetailsDB = require(`../models/`).ordersDetails;
const bcryptjs = require("bcryptjs");

const controller = {
  signIn: async (req, res) => {
    const account = await UsersDB.findOne({ where: { email: req.body.email } });
    if (account) {
      res.status(401).send({
        message: "Email-ul exista, te rog introdu alt email sau logheaza-te!",
      });
    } else {
      bcryptjs.genSalt(10, async (err, salt) => {
        bcryptjs.hash(req.body.password, salt, async (err, hash) => {
          const user = {
            password: hash,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
          };

          let errors = {};

          if (
            !user.password ||
            !user.email ||
            !user.firstName ||
            !user.lastName
          ) {
            console.log(`Nu au fost completate toate campurile!`);
            errors.campuriGoale = `Nu au fost completate toate campurile!`;
          } else {
            if (user.lastName.lenght < 2) {
              errors.nume =
                "Numele introdus trebuie sa contina mai mult de 2 caractere";
            }

            if (user.firstName.lenght < 2) {
              errors.prenume =
                "Prenumele introdus trebuie sa contina mai mult de 2 caractere";
            }

            if (!user.email.includes("@gmail.com")) {
              errors.email = "Email-ul trebuie să de tip gmail.com";
            }
          }

          if (Object.keys(errors).length === 0) {
            try {
              const signUp = await UsersDB.create(user);
              if (signUp) {
                res
                  .status(200)
                  .send({ message: `The account was created succesfully!` });
              }
            } catch (err) {
              res.status(500).send({ message: `Error!` });
            }
          } else {
            res.status(400).send(errors);
          }
        });
      });
    }
  },

  logIn: async (req, res) => {
    try {
      const account = await UsersDB.findOne({
        where: { email: req.body.email },
      });
      if (account) {
        bcryptjs.compare(
          req.body.password,
          account.password,
          function (err, result) {
            if (result) {
              res.status(200).send({
                message: "Te-ai autentificat cu succes!",
              });
            } else {
              res.status(401).send({
                message: "Nu exista acest cont!",
              });
            }
          }
        );
      } else {
        res.status(401).send({
          message: "Nu exista acest cont!",
        });
      }
    } catch (err) {
      res.status(500).send({ message: "Server error" });
    }
  },

  placeOrder: async (req, res) => {
    const order = {
      trashType: req.body.trashType,
      trashQuantity: req.body.trashQuantity,
      recycleCompany: req.body.recycleCompany,
      // trashImage: req.files.data,
      trashImage: req.body.trashImage,
    };

    let errors = {};

    if (
      !order.trashType ||
      !order.trashQuantity ||
      !order.recycleCompany ||
      !order.trashImage
    ) {
      console.log(`Nu au fost completate toate campurile!`);
      errors.campuriGoale = `Nu au fost completate toate campurile!`;
    } else {
      // TODO VALIDARI CAMPURI
    }

    if (Object.keys(errors).length === 0) {
      try {
        const placeOrder = await OrdersDB.create(order);
        if (placeOrder) {
          res.status(200).send({ message: `Order placed succesfully!` });
        }
      } catch (err) {
        res.status(500).send({ message: `Error!` });
      }
    } else {
      res.status(400).send(errors);
    }
  },

  joinContest: async (req, res) => {
    const contestBody = {
      recycleCompany: req.body.recycleCompany,
      trashQuantity: req.body.trashQuantity,
      trashType: req.body.trashType,
      // receipt: req.files.data
      receipt: req.body.receipt,
      data_emitere_bon: req.body.data_generare,
    };

    let errors = {};

    if (
      !contestBody.recycleCompany ||
      !contestBody.trashQuantity ||
      !contestBody.receipt ||
      !contestBody.trashType ||
      contestBody.data_emitere_bon
    ) {
      console.log(`Nu au fost completate toate campurile!`);
      errors.campuriGoale = `Nu au fost completate toate campurile!`;
    } else {
      // TODO VALIDARI
    }

    if (Object.keys(errors).length === 0) {
      try {
        // const insertIntoContest = await ContestDB.create(contestBody);
        // TODO CREEAZA TABELA + logica tabelelor
        if (insertIntoContest) {
          res
            .status(200)
            .send({ message: `The account was created succesfully!` });
        }
      } catch (err) {
        res.status(500).send({ message: `Error!` });
      }
    } else {
      res.status(400).send(errors);
    }
  },
};
module.exports = controller;
