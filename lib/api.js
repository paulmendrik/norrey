import groq from 'groq';
import { client } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

const paintingFields = `
  _id,
  title,
  painting,
  'slug': slug.current,
  order, 
`

export async function getAllPaintings() {
  const results = await client
    .fetch(`*[_type == "paintings"] | order(order) {${paintingFields}}`);
  return results;
}

export async function getAllSurface() {
  const results = await client
    .fetch(`*[_type == "surface"] | order(order) {${paintingFields}}`);
  return results;
}

export async function getAllWillow() {
  const results = await client
    .fetch(`*[_type == "willow"] | order(order) {${paintingFields}}`);
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
    .fetch(`*[_type == "about"]{${aboutFields}}`);
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
    .fetch(`*[_type == "contact"]{${contactFields}}`);
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