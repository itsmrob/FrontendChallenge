/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import "./ImageGallery.css";
import { useState } from "react";

function Image({ id, src, onRemove }) {
    return (
        <div className="image-gallery">
            <button className="remove" onClick={() => onRemove(id)}>
                X
            </button>
            <img src={src} alt={id} />
        </div>
    );
}

export function ImageGallery({ links }) {
	const [newLinks, setNewLinks] = useState(links);

    const onRemove = (imageId) => {
		const filteredImages = newLinks.filter(image => image._id !== imageId);
		if (filteredImages) {
			setNewLinks(filteredImages);
		}
	};

    return (
        <div className="image-container">
            {newLinks.map((image) => (
                <Image
                    id={image._id}
                    src={image.link}
                    onRemove={onRemove}
                    key={image._id}
                />
            ))}
            {/* Implement here the Image Gallery using <Image /> component */}
        </div>
    );
}
