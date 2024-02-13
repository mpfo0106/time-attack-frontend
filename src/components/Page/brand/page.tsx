import React from "react";

function BrandPageComponent({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch"
      data-full-width="true"
    >
      <h2 className="font-bold text-3xl text-center my-12">Brands</h2>
      <nav className="mx-auto max-w-screen-lg mb-16">
        <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
          {children}
        </ul>
      </nav>
    </main>
  );
}

export default BrandPageComponent;
