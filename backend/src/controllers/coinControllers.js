import Coin from '../models/coinModel.js';
export const createCoin = async (req, res) => {
  try {
    const newcoin = new Coin(req.body);
    await newcoin.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
  };
  
  export const getCoins = async (req, res) => {
    const coins = await Coin.find();

    res.status(200).json(players);
  };
  
  export const deleteCoin = async (req, res) => {
    // TODO: implement this function
    res.status(501).send("Unimplemented");
  };