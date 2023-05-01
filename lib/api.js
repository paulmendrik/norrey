import groq from 'groq';
import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

const paintingFields = `
  _id,
  title,
  image,
  'slug': slug.current,
  order, 
  currentPainting,
`

export async function getAllPaintings() {
  const results = await client
    .fetch(`*[_type == "gallery"] | order(order) {${paintingFields}}`);
  return results;
}



const canvasFields = `
  _id,
  title,
  image,
  'slug': slug.current,
  size,
  price,
  order
`

export async function getAllCanvasPrints() {
  const results = await client
    .fetch(`*[_type == "art"] | order(order) {${canvasFields}}`);
  return results;
}


const aboutFields = `
  _id,
  title,
  image,
  content
`
export async function getAboutPage() {
  const results = await client
    .fetch(`*[_type == "bio"]{${aboutFields}}`);
  return results;
}


const contactFields = `
  _id,
  title,
  image,
  content
`
export async function getContactPage() {
  const results = await client
    .fetch(`*[_type == "reach"]{${contactFields}}`);
  return results;
}


const homeFields = `
  _id,
  title,
  image
`
export async function getHomePage() {
  const results = await client
    .fetch(`*[_type == "home"]{${homeFields}}`);
  return results;
}