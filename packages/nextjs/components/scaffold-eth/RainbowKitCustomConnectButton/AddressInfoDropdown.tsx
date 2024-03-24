import { useRef, useState } from "react";
import Link from "next/link";
import { NetworkOptions } from "./NetworkOptions";
import { getAddress } from "viem";
import { Address, useDisconnect } from "wagmi";
import {
  ArrowLeftOnRectangleIcon,
  ArrowsRightLeftIcon,
  CakeIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { BlockieAvatar, isENS } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const allowedNetworks = getTargetNetworks();

type AddressInfoDropdownProps = {
  address: Address;
  displayName: string;
  ensAvatar?: string;
};

export const AddressInfoDropdown = ({ address, ensAvatar, displayName }: AddressInfoDropdownProps) => {
  const { disconnect } = useDisconnect();
  const checkSumAddress = getAddress(address);

  const [selectingNetwork, setSelectingNetwork] = useState(false);
  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const closeDropdown = () => {
    setSelectingNetwork(false);
    dropdownRef.current?.removeAttribute("open");
  };
  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <details ref={dropdownRef} className="dropdown dropdown-end leading-3 shrink-0 rounded-lg">
      <summary
        tabIndex={0}
        className="btn btn-secondary btn-sm h-10 shadow-md dropdown-toggle gap-0 bg-slate-50 rounded-lg"
      >
        <BlockieAvatar address={checkSumAddress} size={30} ensImage={ensAvatar} />
        <span className="ml-2 mr-1">
          {isENS(displayName) ? displayName : checkSumAddress?.slice(0, 6) + "..." + checkSumAddress?.slice(-4)}
        </span>
        <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content menu z-[2] p-2 mt-2 shadow-center shadow-accent bg-slate-50 rounded-box gap-1"
      >
        <NetworkOptions hidden={!selectingNetwork} />
        <li className={selectingNetwork ? "hidden" : ""}>
          <label className="btn-sm !rounded-xl flex gap-3 py-3">
            <CakeIcon className="h-6 w-4 ml-2 sm:ml-0" />
            <Link href="/rewards" className="whitespace-nowrap">
              Rewards
            </Link>
          </label>
        </li>
        <li className={selectingNetwork ? "hidden" : ""}>
          <button className="menu-item btn-sm !rounded-xl flex gap-3 py-3" type="button">
            <Cog6ToothIcon className="h-6 w-4 ml-2 sm:ml-0" />
            <label>Settings</label>
          </button>
        </li>
        {allowedNetworks.length > 1 ? (
          <li className={selectingNetwork ? "hidden" : ""}>
            <button
              className="btn-sm !rounded-xl flex gap-3 py-3"
              type="button"
              onClick={() => {
                setSelectingNetwork(true);
              }}
            >
              <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" /> <span>Switch Network</span>
            </button>
          </li>
        ) : null}
        <li className={selectingNetwork ? "hidden" : ""}>
          <button
            className="menu-item text-red-500 btn-sm !rounded-xl flex gap-3 py-3"
            type="button"
            onClick={() => disconnect()}
          >
            <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" /> <span>Disconnect</span>
          </button>
        </li>
      </ul>
    </details>
  );
};
