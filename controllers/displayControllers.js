import ErrorStatus from "../utils/errorStatus.js";
import chalkLog from "../lib/chalkColors.js";
import DisplayModel from "../models/displayModel.js";

//keep for leaderboard
const display = async (req, res, next) => {
    try {
        const getDisplay = await DisplayModel.find();
        return res.json(getDisplay);
    } catch (error) {
        next(error);
    }
};

const makeDisplay = async (req, res, next) => {
    try {
        const { header } = req.body;
        if (!header) throw new ErrorStatus("Missing required fields", 400);

        const newUser = await DisplayModel.create({
            header,
        });

        return res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

export { display, makeDisplay };
