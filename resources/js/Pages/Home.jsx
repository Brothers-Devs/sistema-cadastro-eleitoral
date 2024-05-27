import CardDataStats from "@/Components/CardDataStats";
import { Head } from '@inertiajs/react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import { IoPeopleOutline } from "react-icons/io5";

export default function Home({ total }) {
  return (
    <DefaultLayout>
      <Head title="Home" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total de Eleitores" total={total.total_voters}>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <IoPeopleOutline size={22} color="#3C50E0" />
          </svg>
        </CardDataStats>
        <CardDataStats title="Total de Liderança" total={total.total_leaders}>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <IoPeopleOutline size={22} color="#3C50E0" />
          </svg>
        </CardDataStats>
      </div>
    </DefaultLayout>
  );
}
