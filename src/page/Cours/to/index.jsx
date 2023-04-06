import { useState } from 'react';
import { useParams } from 'react-router-dom';

function To() {
    const { id } = useParams();

    if (id === "1") {
    return (
        <div>
            <h1>LA tour eiffel</h1>
            <a href="https://www.toureiffel.paris/fr">
                <img src="https://images-ext-2.discordapp.net/external/McQh57RTxiZiMnjsDo_XHdOOzBV1hibzJfMOdy2kVjw/https/offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2020/12/24044651/Copie-de-Design-sans-titre-2020-12-23T165832.395.jpg?width=1191&height=670" alt="Paris en bateau" />
            </a>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, amet vero? Error inventore expedita veritatis libero temporibus quam in! Deleniti pariatur, fugiat expedita saepe esse a magni earum nulla inventore?
            </p>
        </div>
    );
}else {
    return (
        <div>
            <h1>404</h1>
        </div>
            
    )
}
}
export default To;