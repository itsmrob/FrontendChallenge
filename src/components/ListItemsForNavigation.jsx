/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import "../App.css";

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience

/** Add the properties you consider, there are no specific requirements related to what you have to render. Be creative :) */
// const items = Array(10).fill({});

const itemsList = [
    {
        _id: "1684548168853",
        item: "https://cdn.shopify.com/s/files/1/0101/2522/products/iPhone_14_Space_Black_iShop_1_52ab64cf-3538-4faa-9f03-08c9a20832b4_1200x.webp?v=1663959529",
    },
    {
        _id: "1684548168856",
        item: "https://mimarket.micoope.com.gt/wp-content/uploads/2023/03/205-1.jpg",
    },
    {
        _id: "1684548188856",
        item: "https://m.media-amazon.com/images/I/51QKZfyi-dL.jpg",
    },
    {
        _id: "1684548160001",
        item: "https://cdn.shopify.com/s/files/1/0016/9980/7307/products/PAGINA-R5-1.jpg?v=1608132146",
    },
];

function Image(props) {
    let setImageFocus = "navigation-image";
    if (props.focus) {
        setImageFocus += " focused-image";
    }

    return (
        <div className={setImageFocus}>
            <img src={props.source} alt={props.id} />
        </div>
    );
}

export function ListItemsForNavigation(props) {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const activeItemRef = useRef(null);

    useEffect(() => {
        if (activeItemRef) {
            activeItemRef.current.focus();
        }
    }, [selectedIndex]);

    function handleKeyDown(event) {
        const { key } = event;
        if (key === "ArrowRight" || key === "ArrowUp") {
            setSelectedIndex((prevIndex) =>
                prevIndex < itemsList.length - 1 ? prevIndex + 1 : prevIndex
            );
        }
        if (key === "ArrowLeft" || key === "ArrowDown") {
            setSelectedIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : prevIndex
            );
        }
        // Add the proper logic to calculate the index that correspond to the item that should be focused.
    }

    return (
        <div
            className="items-nav"
            ref={activeItemRef}
            onKeyDown={handleKeyDown}
            tabIndex={0}>
            {itemsList.map((item, index) => (
                <Image
                    key={item._id}
                    source={item.item}
                    id={item._id}
                    focus={index === selectedIndex}
                />
            ))}
            {/** Render itemsList as you wish, probably you want to render <li></li> with the proper attributes */}
            {/** If you have issues focusing an element, it is probably because the element is not focusable originally. Try with tabIndex={0} */}
            {/** Do not forget to pass the reference to the selected item */}
        </div>
    );
}
