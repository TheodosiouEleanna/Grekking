import { FaCalendarAlt } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { AiFillCompass } from "react-icons/ai";

export const mainIcons = [
  {
    icon: <FaCalendarAlt color='orange' />,
    title: "Πρόγραμμα Αναβάσεων",
    link: "#",
    color: "orange",
  },
  {
    icon: <FaPhotoVideo color='blue' />,
    title: "Αρχειο Δραστηριοτήτων",
    link: "#",
    color: "blue",
  },
  {
    icon: <FaBook color='red' />,
    title: "Διοργάνωση Σχολών",
    link: "#",
    color: "red",
  },
  {
    icon: <AiFillCompass color='green' />,
    title: "Χάρτης Διαδρομών",
    link: "#",
    color: "green",
  },
];

export default function InfoSection() {
  return (
    <div className='bg-gray-100 py-6'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>
        {mainIcons.map((item, index) => (
          <div
            key={index}
            className='p-6 flex flex-col items-center transition-transform transform hover:scale-110'
          >
            <div className='text-4xl mb-4 transition-transform transform '>
              {item.icon}
            </div>
            <h3 className='font-semibold transition-transform transform '>
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
