const con = require("../Database/database");

function getCountries(req, res) {
  con.query("select * from country", (queryErr, result) => {
    if (!queryErr) {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(400).send("Nothing to show");
      }
    } else {
      res.status(500).send("Error while performing the query");
    }
  });
}

function getCountriesContinent(req, res) {
  con.query(
    `SELECT 
        name, continent.name_continent
    FROM
        country
    INNER JOIN
        continent ON country.id_continent = continent.id_continent
    ORDER BY country.name`,
    (queryErr, result) => {
      if (!queryErr) {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(400).send("Nothing to show");
        }
      } else {
        console.log(queryErr);
        res.status(500).send("Error while performing the query");
      }
    }
  );
}

function countCountries(req, res) {
  con.query(
    "SELECT COUNT(id_country) AS NumberOfCountries FROM country; ",
    (queryErr, result) => {
      if (!queryErr) {
        res.status(201).json(result);
      } else {
        res.status(500).json("Error while performing the query");
      }
    }
  );
}

function getLargestPopulation(req, res) {
  con.query(
    `select max(population) as maxPopulation, name from country group by name order by maxPopulation desc limit 1`,
    (queryErr, result) => {
      if (!queryErr) {
        res.status(201).json(result);
      } else {
        res.status(500).json("Error while performing the query");
      }
    }
  );
}

function getLifeExpectancy(req, res) {
  const data = req.params.id;
  con.query(
    `select * from country where lifeExpectancy between ? and 100 order by lifeExpectancy asc`,
    data,
    (queryErr, result) => {
      if (!queryErr) {
        res.status(201).json(result);
      } else {
        res.status(500).json("Error while performing the query");
      }
    }
  );
}

module.exports = {
  getCountries,
  getCountriesContinent,
  countCountries,
  getLargestPopulation,
  getLifeExpectancy,
};
