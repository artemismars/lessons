const con = require("../Database/database");

function getCountriesByContinents(req, res) {
  con.query(
    `SELECT 
        name, name_continent
    FROM
        country
    INNER JOIN
        continent ON country.id_continent = continent.id_continent`,
    (queryErr, result) => {
      if (!queryErr) {
        res.status(201).json(result);
      } else {
        res.status(500).json("Error while performing the query");
      }
    }
  );
}

function countCountriesByContinent(req, res) {
  const continent = req.sanitize(req.params.continent);
  con.query(
    `SELECT 
        COUNT(name) AS numberOfCountries
    FROM
        country
    INNER JOIN
        continent ON country.id_continent = continent.id_continent
    WHERE
        continent.name_continent = ?;`,
    continent,
    (queryErr, result) => {
      if (!queryErr) {
        res.status(201).json(result);
      } else {
        res.status(500).json("Error while performing the query");
      }
    }
  );
}

function getNamesByCities(req, res) {
  con.query(
    `SELECT 
        city.name as city, country.name as country , name_continent as continent
    FROM
        city
    INNER JOIN
        country ON city.id_country = country.id_country
    INNER JOIN
        continent ON continent.id_continent = country.id_continent;`,
    (queryErr, result) => {
      if (!queryErr) {
        res.status(201).json(result);
      } else {
        console.log(queryErr);
        res.status(500).json("Error while performing the query");
      }
    }
  );
}

function searchCountriesByContinent(req, res) {
  const continent = req.sanitize(req.params.continent);
  con.query(
    `SELECT 
        name_continent AS continent,
        country.name AS country,
        city.name AS city
    FROM
        city
    INNER JOIN
        country ON country.id_country = city.id_country
    INNER JOIN
        continent ON continent.id_continent = country.id_continent
    WHERE
        name_continent = ?;`,
    continent,
    (queryErr, result) => {
      if (!queryErr) {
        res.status(201).json(result);
      } else {
        console.log(queryErr);
        res.status(500).json("Error while performing the query");
      }
    }
  );
}
function getTopThreeByContinent(req, res) {
  const continent = req.sanitize(req.params.continent);
  con.query(
    `SELECT 
        name_continent AS continent,
        country.name AS country,
        city.name AS city,
        city.population
    FROM
        city
    INNER JOIN
        country ON country.id_country = city.id_country
    INNER JOIN
        continent ON continent.id_continent = country.id_continent
    WHERE
        name_continent = ?
    ORDER BY population DESC
    LIMIT 3;`,
    continent,
    (queryErr, result) => {
      if (!queryErr) {
        res.status(201).json(result);
      } else {
        console.log(queryErr);
        res.status(500).json("Error while performing the query");
      }
    }
  );
}

module.exports = {
  getCountriesByContinents,
  countCountriesByContinent,
  getNamesByCities,
  searchCountriesByContinent,
  getTopThreeByContinent,
};
