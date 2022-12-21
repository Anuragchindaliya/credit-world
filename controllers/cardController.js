import Bank from "../models/BankModel.js";
import Card from "../models/CardModel.js";

export async function getAllCards(req, res, next) {
  console.log("getAllCards");
  try {
    const [cards, _] = await Card.findAll();

    res.status(200).json({ count: cards.length, cards });
  } catch (error) {
    next(error);
  }
}

// `id` int(11) NOT NULL,
// `bankId` int(11) NOT NULL,
// `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
// `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
// `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
// `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
// `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
// `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
export async function createNewCard(req, res, next) {
  try {
    const { bankId, name, img, content, slug } = req.body;
    if (!bankId || !name || !img || !content || !slug)
      return res.status(400).json({ message: "all fields are required" });

    const bankResult = await Bank.findById(bankId);

    if (!bankResult[0]?.length) {
      return res.json({ message: "Bank missing" });
    }
    // bankId, name, img, content, slug
    let card = new Card(bankId, name, img, content, slug);
    card = await card.save();
    res.status(201).json({ message: "Card created" });
  } catch (error) {
    next(error);
  }
}

export async function getCardById(req, res, next) {
  try {
    let cardId = req.params.id;
    console.log({ cardId }, "card by id");

    let [card, _] = await Card.findById(cardId);

    return res.status(200).json({ status: "success", data: card[0] });
  } catch (error) {
    next(error);
  }
}
