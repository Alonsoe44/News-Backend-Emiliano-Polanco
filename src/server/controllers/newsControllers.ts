import NewsModel from "../../database/models/NewsModel";

const getNewsController = async (_req, res, next) => {
  try {
    const news = await NewsModel.find();
    res.json(news);
  } catch (error) {
    error.status = 500;
    error.message = "Could not get news , please try again later";
    next(error);
  }
};

export { getNewsController };
