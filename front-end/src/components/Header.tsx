import { CircleUserRound, Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <img
            className="h-10"
            src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp"
            alt="Logo da Hashtag"
          />
          <p className="text-primary-400 text-2xl font-bold">ashbnb</p>
        </div>
        <div className="flex items-center rounded-full border border-gray-300 py-2 pr-4 pl-6 shadow-md">
          <p className="border-r border-r-gray-300 pr-4">Qualquer lugar</p>
          <p className="border-r border-r-gray-300 px-4">Qualquer semana</p>
          <p className="px-4">Hóspedes</p>
          <div className="bg-primary-400 rounded-full p-2 text-white">
            <Search className="h-4 w-4" />
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-gray-300 py-2 pr-4 pl-6 shadow-md">
          <Menu className="h-8 w-8 text-gray-600" />
          <CircleUserRound className="h-8 w-8 text-gray-600" />
          <p className="">Sidney</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
