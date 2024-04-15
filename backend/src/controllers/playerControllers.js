import Player from "../models/playerModel.js";

export const createPlayer = async (req, res) => {
  try {
    const newplayer = new Player(req.body);
    await newplayer.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
  };
  
  export const getPlayers = async (req, res) => {
    const players = await Player.find();

    res.status(200).json(players);
  };
  
  export const deletePlayer = async (req, res) => {
    // TODO: implement this function
    res.status(501).send("Unimplemented");
  };