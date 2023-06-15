import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="aboslute bottom-0 left-0 flex h-[50px] border-t border-gray-300 py-2 px-8 items-center sm:justify-between justify-center">
      <div className="hidden sm:flex" />

      <div className="flex space-x-1">
        <a
        className="hover:opacity-50 ml-1"
          href="https://twitter.com/_courtneyryan"
          target="_blank"
          rel="noreferrer"
          >
          <IconBrandTwitter size={24} />
        </a>
        <a
        className="flex items-center hover:opacity-50"
        href="https://github.com/Oushesh/huberman_bot"
        target="_blank"
        rel="noreferrer"
        >
          <IconBrandGithub size={24} />
        </a>
      </div>
    </div>
  );
};
