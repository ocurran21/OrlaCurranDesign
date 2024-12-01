import { handleNext } from './DetailViewComponent';
  
let currentImageIndex;
let totalNumberOfImages;

describe('handleNext', () => {
    test('if index is 0 and number of Iamges is 10 then should increment index by 1', async () => {
        currentImageIndex = 0;
        totalNumberOfImages = 10;

        const result = handleNext();
        expect(result).toBe(1);
    });

    test('if index is 5 and number of Images is 5 then index should stay the same', async () => {

    });

    test('if index is 12 and number of Images is 8 then index should stay the same', async () => {

    });
})