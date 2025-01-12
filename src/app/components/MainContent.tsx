import Image from "next/image";

export default function ContentSection() {
  return (
    <div className=' py-10 bg-gray-200'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-20'>
        {/* Left Section */}
        <div className='md:col-span-1  p-4 flex flex-col items-center'>
          <h3 className='text-lg font-bold text-center mb-4'>
            Ανακαλύψτε τη δύναμη της φύσης!
          </h3>
          <Image
            src='/images/divider.png'
            alt='Event'
            width={300}
            height={30}
            className='w-3/4 h-16 object-cover'
          />
          <Image
            src='/images/pexels-debphotography-30139619.jpg'
            alt='Event'
            width={500}
            height={300}
            className='mb-8 w-full h-96 object-cover'
          />

          <p className='text-sm text-gray-700 text-center'>
            Ελάτε να ζήσουμε μοναδικές εμπειρίες, από πεζοπορίες και ορειβασία
            μέχρι εξερευνήσεις και μαθήματα επιβίωσης. Γνωρίστε ανθρώπους με
            πάθος για τη φύση και δημιουργήστε αξέχαστες στιγμές!
          </p>
          <p className='text-sm text-gray-500 text-center mt-4'>
            Το επόμενο ραντεβού μας: Σάββατο, 2 Νοεμβρίου 2024, στις 18:30
          </p>
        </div>

        {/* Right Section */}
        <div className='md:col-span-2 space-y-4'>
          {/* Article 1 */}
          <div className='flex p-4'>
            <Image
              src='/images/pexels-ian-panelo-30152379.jpg'
              alt='Article'
              width={150}
              height={150}
              className='w-48 h-36 object-cover mr-8'
            />
            <div>
              <h3 className='text-md font-semibold'>
                Πεζοπορία στους Καταρράκτες Τσέριφου – Γεροσταυρίτικο Διάσελο.
              </h3>
              <p className='text-sm text-gray-600'>
                Ανακαλύψτε την ομορφιά των καταρρακτών και του Γεροσταυρίτικου
                Διάσελου σε μια μαγευτική πεζοπορία. Ιδανική διαδρομή για όλους
                τους λάτρεις της φύσης!
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className='flex p-4'>
            <Image
              src='/images/pexels-mario-tutic-349378571-30132610.jpg'
              alt='Article'
              width={150}
              height={150}
              className='w-48 h-36 object-cover mr-8'
            />
            <div>
              <h3 className='text-md font-semibold'>
                Διήμερη Εξερεύνηση στα Τζουμέρκα
              </h3>
              <p className='text-sm text-gray-600'>
                Εξερευνήστε την άγρια ομορφιά των Τζουμέρκων με στάσεις στα
                Πράμαντα και στη Στρογγούλα. Μια μοναδική εμπειρία για όσους
                αγαπούν τα βουνά!
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className='flex p-4'>
            <Image
              src='/images/pexels-lorenza-magnaghi-660554185-29265549.jpg'
              alt='Article'
              width={150}
              height={150}
              className='w-48 h-36 object-cover mr-8'
            />
            <div>
              <h3 className='text-md font-semibold'>
                Ανακαλύψτε τις δραστηριότητές μας, από μοναδικές πεζοπορίες σε
                κρυμμένα μονοπάτια μέχρι συναρπαστικές αναβάσεις σε κορυφές.
              </h3>
              <p className='text-sm text-gray-600'>
                Κάθε δραστηριότητά μας έχει τη δική της ιστορία. Περιηγηθείτε
                στο αρχείο φωτογραφιών και ανακαλύψτε τις στιγμές που έγραψαν
                ιστορία.
              </p>
            </div>
          </div>
          {/* Article 4 */}
          <div className='flex p-4'>
            <Image
              src='/images/pexels-saikat-ghosh-323099-914128.jpg'
              alt='Article'
              width={150}
              height={150}
              className='w-48 h-36 object-cover mr-8'
            />
            <div>
              <h3 className='text-md font-semibold'>
                Σεμινάρια Ορεινής Επιβίωσης
              </h3>
              <p className='text-sm text-gray-600'>
                Μάθετε τα βασικά της επιβίωσης στη φύση μέσα από πρακτικά
                σεμινάρια. Ετοιμαστείτε για κάθε πρόκληση με την καθοδήγηση
                έμπειρων εκπαιδευτών.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
