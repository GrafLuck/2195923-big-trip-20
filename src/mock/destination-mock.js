import { nanoid } from 'nanoid';
import { destinationNames, descriptions } from './const.js';
import { getRandomInteger } from './util.js';

const mockDestinations = [];

const getRandomDestinationId = () => mockDestinations[getRandomInteger(0, destinationNames.length - 1)].id;

const generateDescription = (min, max) => {
  let description = '';
  const numberOfSentencesInDescription = getRandomInteger(min, max);
  for (let i = 0; i < numberOfSentencesInDescription; i++) {
    description += descriptions[getRandomInteger(0, descriptions.length - 1)];
  }
  return description;
};

const generatePictures = () => {
  const numberOfPictures = getRandomInteger(1, 5);
  return new Array(numberOfPictures).fill().map(
    () => ({ src: `https://loremflickr.com/248/152?random=${nanoid()}`, description: generateDescription(1, 1) }));
};

const generateDestinations = () => {
  destinationNames.forEach((destinationName) => {
    const destination = {
      id: nanoid(),
      name: destinationName,
      description: generateDescription(1, 5),
      pictures: generatePictures()
    };
    mockDestinations.push(destination);
  });
};

const getDestinations = () => mockDestinations;

generateDestinations();

export {getRandomDestinationId, getDestinations};
