import { useState } from 'react';

function Card(props) {
  const scryfallId = props.scryfallId

  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  fetch(`https://api.scryfall.com/cards/${scryfallId}`)
    .then(response => {
      response.json().then(data => {
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

  return (
        <div className="bg-white p-3">
          <img className="w-w-px" src={imageUrl} />
          <ul className="mt-3 flex flex-wrap">
            <li className="mr-auto">
              <a href="#" className="flex text-gray-400 hover:text-gray-600">
                {name}
              </a>
            </li>
            <li className="mr-2">
              <a href="#" className="flex text-gray-400 hover:text-gray-600">
                +
              </a>
            </li>
            <li className="mr-2 text-gray-400 hover:text-gray-600">
                Qty
            </li>
            <li className="mr-2">
              <a href="#" className="flex text-gray-400 hover:text-gray-600">
                -
              </a>
            </li>
            <li>
              <a href="#" className="flex text-gray-400 hover:text-gray-600">
                Delete
              </a>
            </li>
          </ul>
        </div>
  );
};

export default Card;