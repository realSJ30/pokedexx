"use client";
import { Fragment, useContext, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  BsCheckLg,
  BsChevronExpand,
  BsViewList,
  BsCardText,
} from "react-icons/bs";
import { ViewMode } from "@/utils/enums";
import { MainContext } from "@/provider/MainProvider";
import { IconType } from "react-icons";

const views = [
  { value: ViewMode.CARD_VIEW, icon: BsCardText },
  { value: ViewMode.LIST_VIEW, icon: BsViewList },
];

const DropDown = () => {
  const { viewMode, setViewMode } = useContext(MainContext);
  const Icon = viewMode === ViewMode.CARD_VIEW ? BsCardText : BsViewList;
  return (
    <div>
      <Listbox
        value={viewMode}
        onChange={(data) => {
          const { value } = data as any;
          setViewMode(value);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-[250px] p-4 cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-neutral-500 hover:border-neutral-700 group transition sm:text-sm">
            <span className="block font-semibold text-neutral-500 group-hover:text-neutral-700">
              {viewMode}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Icon
                className="h-5 w-5 text-neutral-500 group-hover:text-neutral-700"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {views.map((view, viewIdx) => (
                <Listbox.Option
                  key={viewIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={view}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {view.value}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <BsCheckLg className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default DropDown;
