import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const emoji = () => {
        if (minutes < 30) {
            const coffee = Math.ceil(minutes / 5);
            return "☕️".repeat(coffee);
        } else {
            const bento = Math.ceil(minutes / 10);
            return "🍱".repeat(bento);
        }
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} * {emoji()} {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;