// Here we will use the powers of valtio, pronounced as valshio. 

// valshio is essentially akin to the useContext effect in react, it is easier to use because at any instance we can take a snapshot of the state and use it as an object. Otherwise we'd have to have useContext to keep track of the state all the time. 

import { proxy } from "valtio";

// this is an object containing essentially what I consider to be the default values for the product. . 
const state = proxy({
    intro: true,
    color: '#000',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state; 