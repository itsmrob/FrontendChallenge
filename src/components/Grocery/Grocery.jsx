/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useState } from "react";

import "./Grocery.css";

function Product(props) {
    const handlePlus = (id) => props.onVoting("adding", id);
    const handleMinus = (id) => props.onVoting("substracting", id);
    return (
        <div className="grocery-item">
            <div className="grocery-badge">
                <span className="grocery-votes">{props.votes}</span>
            </div>
            <span className="grocery-text">{`${props.name}`}</span>
            <div className="grocery-buttons">
                <button
                    className="grocery-minus-button"
                    onClick={() => handleMinus(props.id)}>
                    -
                </button>
                <button
                    className="grocery-add-button"
                    onClick={() => handlePlus(props.id)}>
                    +
                </button>
            </div>
        </div>
    );
}

export function Grocery({ products }) {
    //grocery component
    const [productsList, setProducts] = useState(products);

    const onVoting = (action, productId) => {
        const productsListCopy = productsList.slice();
        const newProductsList = productsListCopy.map((currentProduct) => {
            if (currentProduct._id === productId) {
                currentProduct.votes =
                    action === "adding"
                        ? currentProduct.votes + 1
                        : currentProduct.votes - 1;
            }
            return currentProduct;
        });
        setProducts(newProductsList);
    };

    return (
        <div className="grocery-option">
            {products.map((product) => (
                <Product
                    id={product._id}
                    name={product.name}
                    votes={product.votes}
                    onVoting={onVoting}
                    key={product._id}
                />
            ))}
            {/* Render an array of products, which should call onVote when + or - is clicked */}
        </div>
    );
}
