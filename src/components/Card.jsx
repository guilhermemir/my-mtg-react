import { useState, useEffect } from "react";
import { GoPlus, GoDash, GoTrashcan } from "react-icons/go"

function Card(props) {
  const id = props.card.id;
  const scryfallId = props.card.scryfallId;
  const quantity = props.card.quantity;
  const updateCardQuantity = props.updateCardQuantity;
  const deleteCard = props.deleteCard;

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tmpQuantity, setTmpQuantity] = useState(quantity);

  useEffect(() => {
    setTmpQuantity(quantity);
  }, [quantity])

  fetch(`https://api.scryfall.com/cards/${scryfallId}`).then((response) => {
    response.json().then((data) => {
      setName(data.name);
      setImageUrl(data.image_uris.large);
      /*
          data.image_uris.large
          data.image_uris.normal
          data.image_uris.small
          data.card_faces[0].image_uris.large
          data.card_faces[0].image_uris.normal
          data.card_faces[0].image_uris.small
          "https://via.placeholder.com/672x936"
        */
    });
  });

  const handleTmpQuantity = (e) => {
    setTmpQuantity(e.target.value)
  };

  const handleQuantity = (e) => {
    handleTmpQuantity(e);
    if (e.key === "Enter") {
      updateCardQuantity(id, tmpQuantity);
    }
  }

  return (
    <div className="w-80 bg-white rounded-xl p-3 shadow-xl">
      <img className="" src={imageUrl} alt={name} title={name} />
      <ul className="flex flex-wrap gap-1 mt-2 items-center">
        <li className="mr-auto">
          <a href="#" className="hover:text-gray-600">
            {name}
          </a>
        </li>
        <li>
          <button
            type="button"
            className="border border-gray-700 bg-gray-700 text-white font-semibold rounded-md px-1 py-1 transition duration-300 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            onClick={() => updateCardQuantity(id, quantity + 1)}
          >
            <GoPlus />
          </button>
        </li>
        <li>
          <input
            type="number"
            value={tmpQuantity}
            onChange={handleTmpQuantity}
            onKeyDown={handleQuantity}
            onBlur={(e) => {
              handleTmpQuantity(e);
              updateCardQuantity(id, tmpQuantity)
            }}
            className="border border-gray-200 bg-gray-200 text-gray-700 w-12 rounded-md px-2 py-1 transition duration-300 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          />
        </li>
        <li>
          <button
            type="button"
            className="border border-gray-700 bg-gray-700 text-white rounded-md px-1 py-1 transition duration-300 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            onClick={() => updateCardQuantity(id, quantity - 1)}
          >
            <GoDash />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="border border-red-500 bg-red-500 text-white rounded-md px-1 py-1 transition duration-300 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            onClick={() => deleteCard(id)}
          >
            <GoTrashcan />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Card;
