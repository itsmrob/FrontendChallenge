/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import { useState } from "react";

import "./Rating.css";

const Star = (props) => {
    const status = props.active ? "active" : null;
    return (
        <div>
            <span className={status} onClick={() => props.onClick(props.index)}>
                *
            </span>
        </div>
    );
};

export function Rating() {
    const initialState = [
        { status: "" },
        { status: "" },
        { status: "" },
        { status: "" },
        { status: "" },
    ];

    const [stars, setStars] = useState(initialState);

    const handleRating = (index) => {
        const starsCopy = initialState.slice();
		const updateStars = starsCopy.map((star, starIndex) => {
			if (starIndex <= index) {
				return { status: "active" }
			}
			return star;
		});
        setStars(updateStars);
    };

    return (
        <div className="rating">
            {stars.map((star, index) => (
                <Star
                    onClick={handleRating}
                    key={index}
                    index={index}
                    active={star.status}
                />
            ))}
        </div>
    );
}
