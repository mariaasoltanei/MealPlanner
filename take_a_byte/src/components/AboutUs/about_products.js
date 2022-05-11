import React from "react";
import './css/about_products.css';
import localProd from '../../assets/images/local_products.png'
import freshProd from '../../assets/images/fresh_ingredients.png'
import recyclable from '../../assets/images/r_packaging.png'
import ImageText from "./image_text";


export default function AboutProducts() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    return (
        <div className="div_logos_about">
            <ImageText image={localProd} header="With passion from Romanian markets" text="Our distributors get their supplies only from local Romanian farmers. Fruits, vegetables, dairy and much more, produced with care for our customers."/>
            <ImageText image={freshProd} header="Fresh as a daisy" text="The quality of our feedstock is the most important part for us. Everyday we are getting new cargo from our suppliers in order for you to get what’s best."/>
            <ImageText image={recyclable} header="No waste, for a great taste." text="There is nothing here worth being wasted or thrown away. every ingredient is a result of hard work from our suppliers that we should appreciate."/>
        </div>

    );

}