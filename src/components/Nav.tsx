import React, { useState } from "react";
import { Link } from "./Link";
import { Logo } from "./Logo";
import tw from "twin.macro";
import { X, Sun, Moon, Menu } from "react-feather";
import { useTheme } from "../styles/theme";
import { MobileNav } from "./Sidebar";
import { useIsMounted } from "../hooks/useIsMounted";
import { Search } from "./Search";
import { ThemeSwitcher } from "./ThemeSwitcher";

export interface Props {}

export const Nav: React.FC<Props> = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMounted = useIsMounted();

  return (
    <>
      <header
        css={[
          tw`flex items-center justify-between`,
          tw`px-4 md:px-8 py-6 text-center`,
        ]}
      >
        <div tw="md:hidden">
          <Logo />
        </div>

        <div tw="flex items-center space-x-6 md:space-x-4">
          <button
            tw="md:hidden w-6 h-6 md:w-4 md:h-4 cursor-pointer focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <X width="100%" height="100%" />
            ) : (
              <Menu width="100%" height="100%" />
            )}
          </button>

          {/* <ThemeSwitcher /> */}
        </div>
      </header>

      <MobileNav isOpen={isNavOpen} />
    </>
  );
};
