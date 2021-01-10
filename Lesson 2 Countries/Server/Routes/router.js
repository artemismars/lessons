const express = require("express");
const router = express.Router();
const countriesController = require("../Controllers/countriesController");
const continentsController = require("../Controllers/continentsController");

router.get("/countries", countriesController.getCountries);
router.get("/countries/continent", countriesController.getCountriesContinent);
router.get("/countries/count", countriesController.countCountries);
router.get("/countries/max", countriesController.getLargestPopulation);
router.get("/countries/life/:id", countriesController.getLifeExpectancy);

router.get("/continents/", continentsController.getCountriesByContinents);
router.get(
  "/continents/count/:continent",
  continentsController.countCountriesByContinent
);
router.get("/continents/names", continentsController.getNamesByCities);
router.get(
  "/continents/search/:continent",
  continentsController.searchCountriesByContinent
);
router.get(
  "/continents/three/:continent",
  continentsController.getTopThreeByContinent
);

module.exports = router;
