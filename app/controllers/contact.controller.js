// const ApiError = require("../api-error");
// const MongoDB = require("../utils/mongodb.util");
// const ContactService = require("../services/contact.service");

exports.create = async (req, res, next) => {
    res.json({ message: "create hander" });
};

exports.findALL = async (req, res, next) => {
    res.json({ message: "findAll hander" });
};

exports.findOne = async (req, res, next) => {
    res.json({ message: "findOne hander" });
};

exports.update = async (req, res, next) => {
    res.json({ message: "update hander" });
};

exports.delete = async (req, res, next) => {
    res.json({ message: "delete hander" });
};

exports.deleteALL = async (req, res, next) => {
    res.json({ message: "deleteALL hander" });
};

exports.findALLFavorite = async (req, res, next) => {
    res.json({ message: "findALLFavorite hander" });
};
