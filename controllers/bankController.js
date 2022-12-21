import Bank from "../models/BankModel.js";

export async function getAllBanks(req, res, next) {
  console.log("getAllBanks");
  try {
    const [banks, _] = await Bank.findAll();

    res.status(200).json({ count: banks.length, banks });
  } catch (error) {
    next(error);
  }
}
// `id` int(11) NOT NULL,
// `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
// `slug` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
// `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
// `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
// `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
// `createdAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
export async function createNewBank(req, res, next) {
  try {
    const { name, slug, content, img, updatedAt, createdAt } = req.body;
    if (!name || !slug || !content || !img)
      return res.status(400).json({ message: "All fields are required" });

    const bank = new Bank(name, slug, content, img);

    const [data,_] = await bank.save();

    res.status(201).json({ message: "Bank created", data });
  } catch (error) {
    next(error);
  }
}

export async function getBankById(req, res, next) {
  try {
    let cardId = req.params.id;
    console.log({ cardId }, "card by id");

    let [card, _] = await Bank.findById(cardId);
    console.log("getBankById", { card });
    const data = card?.[0];
    if (!data) {
      return res.status(200).json({ status: "failure", data: null });
    }
    return res.status(200).json({ status: "success", data });
  } catch (error) {
    next(error);
  }
}
