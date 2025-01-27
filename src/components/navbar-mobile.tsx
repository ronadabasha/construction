import { Fragment, SyntheticEvent, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Menu, Cross } from "./icons";
import Link from "next/link";
import { Routes, routes } from "@/data/routes";

const NavbarMobile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex lg:hidden flex-1 justify-start text-white">
        <button
          type="button"
          className="bg-black p-[10px] absolute top-2 right-3"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu />
        </button>
      </div>
      <Transition show={mobileMenuOpen} as={Fragment} appear>
        <Dialog
          as="div"
          static
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <TransitionChild
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <DialogPanel className="fixed max-w-full inset-0 right-0 z-20 w-full bg-black text-white">
              <div className="flex items-center justify-start p-[19px] h-[75px] w-full">
                <button
                  type="button"
                  className="h-[37px] w-[37px] text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <Cross />
                </button>
              </div>
              <div
                className="px-5 py-4 flex flex-col"
                onClick={({ target }: SyntheticEvent) => {
                  if ((target as HTMLElement)?.classList.contains("nav-link")) {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                <div className="flex flex-col items-start text-white">
                  {routes.map((item: Routes) => {
                    return (
                      <Link
                        key={item.path}
                        className="block uppercase text-[16px] leading-[19px] font-urbanist font-normal px-3 mb-4"
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavbarMobile;
