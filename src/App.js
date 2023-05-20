import { useState } from "react";

// import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { Grocery } from "./components/Grocery";
import { ImageGallery } from "./components/ImageGallery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
// import { PlayerStatus } from "./components/PlayerStatus";
// import { TeamsList } from "./components/TeamsList";

import "./App.css";

export default function App() {
    const products = [
        { _id: "1684543462548", name: "iPhone 12", votes: 0 },
        { _id: "1684543462896", name: "Samsung Galaxy S21", votes: 0 },
        { _id: "1684543462258", name: "Sony PlayStation 5", votes: 0 },
        { _id: "1684543462369", name: "Bose QuietComfort 35 II", votes: 0 },
        { _id: "1684543462123", name: "Canon EOS R5", votes: 0 },
    ];

    const images = [
        {
            _id: "168454345986",
            link: "https://images.vexels.com/media/users/3/182371/isolated/preview/2f8c7e9f42c7781c3846b435475f92af-plano-de-fruta-de-manzana.png",
        },
        {
            _id: "168454311186",
            link: "https://s2.ppllstatics.com/diariovasco/www/multimedia/202106/04/media/cortadas/platano-kUyC-RCIEbjdcaFn9Yc7KKpofzYN-1248x770@Diario%20Vasco-DiarioVasco.jpg",
        },
        {
            _id: "1684543412356",
            link: "https://s2.ppllstatics.com/elnortedecastilla/www/multimedia/202207/01/media/cortadas/Imagen%20mora-kd2B-U170585923919XdE-624x385@El%20Norte.jpg",
        },
        {
            _id: "1684543478956",
            link: "https://i0.wp.com/historiasdelahistoria.com/wordpress-2.3.1-ES-0.1-FULL/wp-content/uploads/2015/11/naranja.jpg?ssl=1",
        },
        {
            _id: "1232334546676",
            link: "https://jptradingimports.com/wp-content/uploads/2020/03/OFNA690.jpg",
        },
    ];

    return (
        <div className="App">
            {/* Render here each component from the "components" directory
            <h3>'Message' test</h3>
            <Message />
            <br />
            <h3>'FocusableInput' test</h3>
            <FocusableInput />
            <br />
            <h3>'ImageGallery' test</h3>
            <ImageGallery />
            <br />
            <h3>'PlayerStatus' test</h3>
            <PlayerStatus />
            <br />
            <h3>'TeamsList' test</h3>
            <TeamsList />
            <h3>'FocusableInput' test</h3>
            <FocusableInput focusable={focus} />
            <br />
       */}
            {/*
                <h3>'Grocery' Component</h3>
            <Grocery products={products} />
            <br />
            <h3>'ImageGallery' test</h3>
            <ImageGallery links={images} />
            <br />
    
        */}

            <h3>'ListItemsForNavigation' test</h3>
            <ListItemsForNavigation />
            <br />
        </div>
    );
}
