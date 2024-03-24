"use client";

// @refresh reset
import { AddressInfoDropdown } from "./AddressInfoDropdown";
import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Address } from "viem";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  const { targetNetwork } = useTargetNetwork();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="bg-yellow-950 rounded-lg w-[160px] h-10 font-semibold text-lg text-yellow-50 hover:bg-yellow-900 transition-colors"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect
                  </button>
                );
              }

              if (chain.unsupported || chain.id !== targetNetwork.id) {
                return <WrongNetworkDropdown />;
              }

              return (
                <AddressInfoDropdown
                  address={account.address as Address}
                  displayName={account.displayName}
                  ensAvatar={account.ensAvatar}
                />
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
