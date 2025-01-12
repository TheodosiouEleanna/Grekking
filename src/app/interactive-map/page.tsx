"use client";
import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("../components/InteractiveMap"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div className='flex flex-col items-center bg-gray-100'>
      <p className='text-sm text-center my-2'>
        Εξερευνήστε δραστηριότητες που απεικονίζονται στον χάρτη. Κάντε κλικ σε
        έναν δείκτη για περισσότερες πληροφορίες σχετικά με τη δραστηριότητα.
      </p>
      <div className='w-full'>
        <InteractiveMap />
      </div>
    </div>
  );
}
