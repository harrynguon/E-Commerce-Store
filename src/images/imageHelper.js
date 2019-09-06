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

import M from 'materialize-css';

const showToast = () => {
    M.toast({html: 'I am a toast'});
}

export const getImage = (imageText) => {
    switch (imageText) {
        case 'apples':
            return <img onClick={showToast} src={ApplesImage} alt={imageText} />;
        case 'bananas':
            return <img src={BananasImage} alt={imageText} />;
        case 'blueberries':
            return <img src={Blueberries} alt={imageText} />;
        case 'cherries':
            return <img src={CherriesImage} alt={imageText} />;
        case 'kiwifruit':
            return <img src={KiwifruitImage} alt={imageText} />;
        case 'mandarins':
            return <img src={MandarinsImage} alt={imageText} />;
        case 'mangos':
            return <img src={MangosImage} alt={imageText} />;
        case 'mixedApples':
            return <img src={MixedApplesImage} alt={imageText} />;
        case 'mixedBerries':
            return <img src={MixedBerriesImage} alt={imageText} />;
        case 'oranges':
            return <img src={OrangesImage} alt={imageText} />;
        case 'peaches':
            return <img src={PeachesImage} alt={imageText} />;
        case 'pears':
            return <img src={PearsImage} alt={imageText} />;
        case 'pineapples':
            return <img src={PineapplesImage} alt={imageText} />;
        case 'raspberries':
            return <img src={RaspberriesImage} alt={imageText} />;
        case 'strawberries':
            return <img src={StrawberriesImage} alt={imageText} />;
        default:
            return <img src={ApplesImage} alt="Item not found, using apples instead" />;
    }
}