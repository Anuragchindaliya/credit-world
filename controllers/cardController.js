import Bank from "../models/BankModel.js";
import Card from "../models/CardModel.js";

export async function getAllCards(req, res, next) {
  try {
    const { query } = req;
    const filter = Object.keys(query).reduce((sql, key, i) => {
      const join = i ? " AND " : "";
      sql += `${join}${key}='${query[key]}'`;
      return sql;
    }, "");
    const [cards, _] = await Card.findAll(filter);

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
    const cardId = req.params.id;
    const [card, _] = await Card.findById(cardId);
    const data = card?.[0];
    if (!data) {
      return res.status(200).json({ status: "failure", data: null });
    }
    return res.status(200).json({ status: "success", data: card[0] });
  } catch (error) {
    next(error);
  }
}
