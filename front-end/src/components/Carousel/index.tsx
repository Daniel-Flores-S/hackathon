import React from "react";
import Carousel from "react-elastic-carousel";
import { CarouselContainer, Item } from "./styles";

import image1 from "assets/carousel/pro01.jpg";
import image2 from "assets/carousel/pro02.jpg";
/*import image3 from "assets/carousel/pro03.jpg";
import image4 from "assets/carousel/pro04.jpg";*/
import image5 from "assets/carousel/pro05.jpg";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export const Carousell = () => {

    return (
        <CarouselContainer>
            <Carousel
                isRTL={true}
                breakPoints={breakPoints}
            >
                <Item src={image1} />
                <Item src={image2} />
                <Item src={image5} />
                <Item src={image1} />
                <Item src={image2} />
                <Item src={image5} />

            </Carousel>
        </CarouselContainer>
    );
};
