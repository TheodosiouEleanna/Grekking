import Image from "next/image";

export default function Section({
  title,
  imageSrc,
  content,
}: {
  title: string;
  imageSrc: string;
  content: string[];
}) {
  return (
    <div className='bg-gray-100 pt-12 flex flex-col items-center'>
      {/* Main Content Section */}
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
        {/* Left Side - Image */}
        <div className='flex justify-center'>
          <Image
            src={imageSrc}
            alt={title}
            className='w-full md:w-3/4 object-contain'
            width={600}
            height={600}
          />
        </div>

        <div>
          <div className=' mb-2'>
            <h2 className='text-2xl font-bold text-gray-800'>{title}</h2>
          </div>

          {/* Right Side - Text */}
          <div className='text-gray-800 leading-relaxed '>
            {content.map((paragraph, index) => (
              <p key={index} className='mb-4 text-sm'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className='h-12 border-b-2 w-[80%] mx-auto border-gray-300'></div>
    </div>
  );
}
