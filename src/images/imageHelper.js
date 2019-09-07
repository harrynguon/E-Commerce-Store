import React from 'react';

// Images
import ApplesImage from './stock_photos/apples.jpeg';
import BananasImage from './stock_photos/bananas.jpeg';
import Blueberries from './stock_photos/blueberries.jpeg';
import CherriesImage from './stock_photos/cherries.jpeg';
import KiwifruitImage from './stock_photos/kiwifruit.jpeg';
import MandarinsImage from './stock_photos/mandarins.jpeg';
import MangosImage from './stock_photos/mangos.jpeg';
import MixedApplesImage from './stock_photos/mixed_apples.jpeg';
import MixedBerriesImage from './stock_photos/mixed_berries.jpeg';
import OrangesImage from './stock_photos/oranges.jpeg';
import PeachesImage from './stock_photos/peaches.jpeg';
import PearsImage from './stock_photos/pears.jpeg';
import PineapplesImage from './stock_photos/pineapples.jpeg';
import RaspberriesImage from './stock_photos/raspberries.jpg';
import StrawberriesImage from './stock_photos/strawberries.jpg';

// Grab a fruit's image from its name
export const getImage = (fruitName) => {
    switch (fruitName) {
        case 'Apples':
            return <img src={ApplesImage} width="300px" alt={fruitName} />;
        case 'Bananas':
            return <img src={BananasImage} alt={fruitName} />;
        case 'Blueberries':
            return <img src={Blueberries} alt={fruitName} />;
        case 'Cherries':
            return <img src={CherriesImage} alt={fruitName} />;
        case 'Kiwifruit':
            return <img src={KiwifruitImage} alt={fruitName} />;
        case 'Mandarins':
            return <img src={MandarinsImage} alt={fruitName} />;
        case 'Mangos':
            return <img src={MangosImage} alt={fruitName} />;
        case 'Assorted Apples':
            return <img src={MixedApplesImage} alt={fruitName} />;
        case 'Assorted Berries':
            return <img src={MixedBerriesImage} alt={fruitName} />;
        case 'Oranges':
            return <img src={OrangesImage} alt={fruitName} />;
        case 'Peaches':
            return <img src={PeachesImage} alt={fruitName} />;
        case 'Pears':
            return <img src={PearsImage} alt={fruitName} />;
        case 'Pineapples':
            return <img src={PineapplesImage} alt={fruitName} />;
        case 'Raspberries':
            return <img src={RaspberriesImage} alt={fruitName} />;
        case 'Strawberries':
            return <img src={StrawberriesImage} alt={fruitName} />;
        default:
            return <img src={ApplesImage} alt="Item not found, using apples instead" />;
    }
}