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

const editNewsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newEdition = req.body;
    const news = await NewsModel.findByIdAndUpdate(id, newEdition, {
      new: true,
    });
    res.json(news);
  } catch (error) {
    error.status = 500;
    error.message = "Could not edit news , please try again later";
    next(error);
  }
};

const deleteNewsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await NewsModel.findByIdAndDelete(id);
    res.json({ message: "Succes, News deleted" });
  } catch (error) {
    error.status = 500;
    error.message = "Could not delete news , please try again later";
    next(error);
  }
};

export { getNewsController, editNewsController, deleteNewsController };
