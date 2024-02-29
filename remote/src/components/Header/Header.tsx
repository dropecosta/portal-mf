import React, { useEffect, useState } from "react";
import {
  Header as AmaHeader,
  DrawerContentProps,
  DrawerFooterProps,
  DrawerMenuProps,
  HeaderGeneralOptionsProps,
  HeaderNavigationProps,
  HeaderNavigationType,
  InputSearchBarProps,
  MenuItemGeneralOptionsProps,
  MenuItemProps,
  MenuProps,
  SearchContentListLinkProps,
  SubmenuItemProps,
  ToastProvider,
  stringToBoolean,
} from "@ama-pt/agora-design-system";
import { HeaderProps, ToastType } from "@ama-pt/agora-design-system";
import "@ama-pt/agora-design-system/dist/index.css";
import classNames from "classnames";
import { Notification } from "../Notification/Notification";
import logo from '../../../assets/logo.svg';
// import Cookies from "js-cookie";

// import { fetchDummyData } from '../../services/getApiDummyData';
// import { fetchDummyAuthData } from '../../services/getApiDummyAuthData';

import createEventSource from "../../services/eventService";
import apiDummyDataShared from '../../api/apiDummyDataShared.json';
// import apiDummyAuthData from '../../api/apiDummyAuthData.json';
// import apiFooterGereralOption from '../../api/apiFooterHeaderGeneralOptions.json';

// #region Interfaces
// interface NotificationData extends HederProps {
//   notifications: Notification[];
// }

// interface Notification {
//   title: string;
//   description: string;
//   type: string;
//   duration: number;
// }
// interface Notification {
//   title: string;
//   description: string;
//   type: string;
//   duration: number;
// }
// #endregion

// #region Handler of search menu.
// const onVoiceActivateHandler = () => {
//   console.log("ACTIVATE SPEECH TO TEXT");
// };

// const onSearchActivateHandler = () => {
//   console.log("DO SEARCH");
// };
// #endregion

const Header: React.FC = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState<string>();
  // const [authName, setAuthName] = useState<string>();
  // const [cookies, setCookies] = useState<any>();
  // const [languageCoookie, setLanguageCoookie] = useState(Cookies.get("GUEST_LANGUAGE_ID"));
  const [limited, setLimited] = useState<boolean>(true);
  const [toastTitle, setToastTitle] = useState<string>("");
  const [toastDescription, setToastDescription] = useState<string>("");

  // Using service to fetch
  // const [dummyData, setDummyData] = useState<any>(null);

  // useEffect(() => {
  //   fetchDummyData()
  //     .then((data: any) => {
  //       setDummyData(data);
  //       console.log("Data fetched successfully:", data);
  //     })
  //     .catch((error: any) => {
  //       console.error("Error fetching data:", error);

  //     });
  // }, []);

  // #region *As a dummy example and please don't use it on production, there is no homepage and other pages, so the navigation has a logic of this is the home url, whenever it is different the page changes.
  const homepageURL =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    window.location.search;
  const [isHome, setIsHome] = useState<boolean>(
    homepageURL === window.location.href
  );
  // #endregion

  // #region *Handler logo and navigation on logo when not homepage. Please don't copy/paste, improve it.
  // const imageClassName = classNames(
  //   "xs:w-[190px] xs:h-[24px] md:w-[190px] md:h-[24px] xl:w-[254px] xl:h-[32px]"
  // );

  const getHeaderNavigationContent = () => {
    // Simulando a função window.location.href para fins de exemplo
    const homepageURL =
      window.location.protocol + "//" + window.location.host + "/";
  if (homepageURL === window.location.href) {
      return (
        <img
          src={logo}
          alt="Logo"
          width={168}
          height={32}
        />
      );
    } else {
      return (
        <a href={homepageURL} aria-label="Voltar à homepage do portal">
          <img
            src={logo}
            alt="logo"
            width={168}
            height={32}
            aria-hidden
          />
        </a>
      );
    }
  };
  // #endregion

  // Dummy data - NOT USE THIS ON PRODUCTION
  const dummyData = {
    headerSEO:
      "WARNING: Replace with correct keys for SEO. This h1 only should appear on homepage. For that isHomepage has to have logic to know if we are on home.",
    isHomepage: homepageURL === window.location.href,
    darkModeHeader: false,
    menuLabel: "Menu",
    backButtonLabelBurger: "Back",
    hasHeaderGeneralOptions: true,
    headerGeneralOptions: {
      ariaLabelHeaderGeneralOptions:
        "WARNING: Replace with correct aria label descriptive of general navigation bar",
      hasLanguage: true,
      hasSearch: true,
      hasUser: true,
      menuItemsHeaderGeneralOptions: {
        language: {
          submenuItem: {
            submenuAriaLabel:
              "WARNING: Replace with correct aria label descriptive of list of languages",
            selectedAriaLabel:
              "WARNING: selected or other word to help accessibility engine when read selected language",
            actionItem: true,
            submenuItems: [
              {
                "data-aria-selected": "true",
                children: "Language 1",
                "data-iso": "xpto1",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                onClick: () => {
                  console.log(
                    "Other functions can be passed here. The selection is made by the component but does not store state. Here we can save the relevant data to know which language was selected"
                  );
                },
              },
              {
                children: "Language 2",
                "data-iso": "xpto2",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                onClick: () => {
                  console.log(
                    "Other functions can be passed here. The selection is made by the component but does not store state. Here we can save the relevant data to know which language was selected"
                  );
                },
              },
              {
                children: "Language 3",
                "data-iso": "xpto3",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                onClick: () => {
                  console.log(
                    "Other functions can be passed here. The selection is made by the component but does not store state. Here we can save the relevant data to know which language was selected"
                  );
                },
              },
              {
                children: "Language 4",
                "data-iso": "xpto4",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                onClick: () => {
                  console.log(
                    "Other functions can be passed here. The selection is made by the component but does not store state. Here we can save the relevant data to know which language was selected"
                  );
                },
              },
              {
                children: "Language 5",
                "data-iso": "xpto5",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                onClick: () => {
                  console.log(
                    "Other functions can be passed here. The selection is made by the component but does not store state. Here we can save the relevant data to know which language was selected"
                  );
                },
              },
            ],
            submenuType: "language",
          } as SubmenuItemProps,
        } as MenuProps,
        search: {
          menuItem: {
            children: "Search Label",
          } as MenuItemProps,
          submenuItem: {
            submenuAriaLabel:
              "WARNING: Replace with correct aria label descriptive of opened menu search",
            submenuSearchContent: {
              hasTitle: true,
              title: "Insert here your title",
              searchTitle: "Insert here your search title",
              inputSearchBar: {
                placeholder: "Insert here placeholder for search bar",
                // onVoiceActivate: () => onVoiceActivateHandler(),
                // onSearchActivate: () => onSearchActivateHandler(),
              } as InputSearchBarProps,
              hasLinkList: true,
              linkListContent: {
                linkListTitle: "Title of this list",
                linkList: [
                  {
                    children: "List item 1",
                    href: "https://zeroheight.com/1be481dc2/p/861a8e-header",
                    target: "_self",
                  },
                  {
                    children: "List item 2",
                    href: "https://zeroheight.com/1be481dc2/p/861a8e-header",
                    target: "_self",
                  },
                  {
                    children: "List item 3",
                    href: "https://zeroheight.com/1be481dc2/p/861a8e-header",
                    target: "_self",
                  },
                  {
                    children: "List item 4",
                    href: "https://zeroheight.com/1be481dc2/p/861a8e-header",
                    target: "_self",
                  },
                  {
                    children: "List item 5",
                    href: "https://zeroheight.com/1be481dc2/p/861a8e-header",
                    target: "_self",
                  },
                ],
              } as SearchContentListLinkProps,
            },
            submenuType: "search",
          } as SubmenuItemProps,
        } as MenuProps,
        user: {
          menuItem: {
            children: "Login Label",
            "aria-label": "WARNING: Replace with correct aria-label for login",
          } as MenuItemProps,
          submenuItem: {
            submenuAriaLabel:
              "WARNING: Replace with correct aria label for login options",
            actionItem: true,
            submenuItems: [
              {
                children: "Login item 1",
                trailingIcon: "agora-line-arrow-right-circle",
                trailingIconHover: "agora-solid-arrow-right-circle",
                href: "/example-1",
              },
              {
                children: "Login item 2 (contain fake auth simulation)",
                trailingIcon: "agora-line-arrow-right-circle",
                trailingIconHover: "agora-solid-arrow-right-circle",
                onClick: () => handleAuth(),
              },
            ],
            submenuType: "link",
            submenuAlignment: "end",
          } as SubmenuItemProps,
        } as MenuProps,
      } as MenuItemGeneralOptionsProps,
    } as HeaderGeneralOptionsProps,
    hasHeaderPrimaryNavigation: true,
    headerPrimaryNavigation: {
      ariaLabelHeaderNavigation:
        "WARNING: Replace with correct aria label descriptive of primary navigation bar",
      headerNavigationLegalSentence:
        "WARNING: Replace with correct legal sentence that is required",
      menuItemsHeaderNavigation: [
        {
          menuItem: {
            "aria-current": "page",
            noIcons: "true",
            children: "Menu Item 1",
            onClick: (evt: any) => {
              handleCurrentPage(evt, "primary");
            },
          },
          relatedNavMenu: {
            menuItemsHeaderNavigation: [
              {
                menuItem: {
                  "aria-current": "page",
                  "aria-haspopup": true,
                  "aria-expanded": false,
                  children: "Sub. item 1-1",
                },
                submenuItem: {
                  submenuAriaLabel:
                    "WARNING: Replace with correct aria label descriptive of submenu item 1-1 options",
                  actionItem: false,
                  hasSubmenuItemsTitle: true,
                  submenuItemsTitle:
                    "WARNING: Replace with correct title according with submenuType and your project",
                  submenuItems: [
                    {
                      children: "Option 1",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 2",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 3",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 4",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 5",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 6",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 7",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                  ],
                  highlightItems: {
                    submenuAriaLabel:
                      "WARNING: Replace with correct aria label descriptive of highlighted options",
                    actionItem: false,
                    submenuItems: [
                      {
                        children: "Highlight option 1",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 2",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 3",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 4",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                    ],
                    submenuType: "link",
                  },
                  submenuType: "topics",
                },
              },
              {
                menuItem: {
                  noIcons: true,
                  href: "/example.com",
                  children: "Sub. item 1-2",
                  onClick: (evt: any) => {
                    handleCurrentPage(evt, "secondary");
                  },
                },
              },
              {
                menuItem: {
                  noIcons: true,
                  href: "/example.com",
                  children: "Sub. item 1-3",
                  onClick: (evt: any) => {
                    handleCurrentPage(evt, "secondary");
                  },
                },
              },
              {
                menuItem: {
                  "aria-haspopup": true,
                  "aria-expanded": false,
                  children: "Sub. item 1-4",
                },
                submenuItem: {
                  submenuAriaLabel:
                    "WARNING: Replace with correct aria label descriptive of submenu item 1-1 options",
                  actionItem: false,
                  hasSubmenuItemsTitle: true,
                  submenuItemsTitle: "Teste 4",
                  submenuItems: [
                    {
                      children: "Option 1",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 2",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 3",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 4",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 5",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 6",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 7",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                  ],
                  highlightItems: {
                    submenuAriaLabel:
                      "WARNING: Replace with correct aria label descriptive of highlighted options",
                    actionItem: false,
                    submenuItems: [
                      {
                        children: "Highlight option 1",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 2",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 3",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 4",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                    ],
                    submenuType: "link",
                  },
                  submenuType: "topics",
                },
              },
            ] as MenuProps[],
          } as HeaderNavigationProps,
        },
        {
          menuItem: {
            noIcons: "true",
            children: "Menu Item 1++",
            onClick: (evt: any) => {
              handleCurrentPage(evt, "primary");
            },
          },
          relatedNavMenu: {
            menuItemsHeaderNavigation: [
              {
                menuItem: {
                  "aria-current": "page",
                  "aria-haspopup": true,
                  "aria-expanded": false,
                  children: "Sub. item 1+1",
                },
                submenuItem: {
                  submenuAriaLabel:
                    "WARNING: Replace with correct aria label descriptive of submenu item 1-1 options",
                  actionItem: false,
                  hasSubmenuItemsTitle: true,
                  submenuItemsTitle:
                    "WARNING: Replace with correct title according with submenuType and your project",
                  submenuItems: [
                    {
                      children: "Option 1",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 2",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 3",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 4",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 5",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 6",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 7",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                  ],
                  highlightItems: {
                    submenuAriaLabel:
                      "WARNING: Replace with correct aria label descriptive of highlighted options",
                    actionItem: false,
                    submenuItems: [
                      {
                        children: "Highlight option 1",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 2",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 3",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 4",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                    ],
                    submenuType: "link",
                  },
                  submenuType: "topics",
                },
              },
              {
                menuItem: {
                  noIcons: true,
                  href: "/example.com",
                  children: "Sub. item 1+2",
                  onClick: (evt: any) => {
                    handleCurrentPage(evt, "secondary");
                  },
                },
              },
              {
                menuItem: {
                  noIcons: true,
                  href: "/example.com",
                  children: "Sub. item 1+3",
                  onClick: (evt: any) => {
                    handleCurrentPage(evt, "secondary");
                  },
                },
              },
              {
                menuItem: {
                  "aria-haspopup": true,
                  "aria-expanded": false,
                  children: "Sub. item 1+4",
                },
                submenuItem: {
                  submenuAriaLabel:
                    "WARNING: Replace with correct aria label descriptive of submenu item 1-1 options",
                  actionItem: false,
                  hasSubmenuItemsTitle: true,
                  submenuItemsTitle: "Teste",
                  submenuItems: [
                    {
                      children: "Option 1",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 2",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 3",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 4",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 5",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 6",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 7",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                  ],
                  highlightItems: {
                    submenuAriaLabel:
                      "WARNING: Replace with correct aria label descriptive of highlighted options",
                    actionItem: false,
                    submenuItems: [
                      {
                        children: "Highlight option 1",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 2",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 3",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 4",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                    ],
                    submenuType: "link",
                  },
                  submenuType: "topics",
                },
              },
            ] as MenuProps[],
          } as HeaderNavigationProps,
        },
        {
          menuItem: {
            children: "Menu Item 2",
            actionItem: false,
            "aria-haspopup": true,
            "aria-expanded": false,
          },
          submenuItem: {
            submenuAriaLabel:
              "WARNING: Replace with correct aria label descriptive of submenu item 2-1 options",
            actionItem: false,
            submenuItems: [
              {
                children: "Option 1",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 2",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 3",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 4",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 5",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 6",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
            ],
            submenuType: "platform",
            submenuAlignment: "end",
          } as SubmenuItemProps,
        },
        {
          menuItem: {
            "aria-haspopup": true,
            "aria-expanded": false,
            children: "Menu Item 3",
            onClick: (evt: any) => {
              handleCurrentPage(evt, "primary");
            },
          },
          submenuItem: {
            submenuAriaLabel:
              "WARNING: Replace with correct aria label descriptive of submenu item 3-1 options",
            actionItem: false,
            hasSubmenuItemsTitle: true,
            submenuItemsTitle:
              "WARNING: Replace with correct title according with submenuType and your project",
            submenuItems: [
              {
                children: "Option 1",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 2",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 3",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 4",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 5",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 6",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 7",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
            ],
            highlightItems: {
              submenuAriaLabel:
                "WARNING: Replace with correct aria label descriptive of highlighted options",
              actionItem: false,
              submenuItems: [
                {
                  children: "Highlight option 1",
                  trailingIcon: "no-icon",
                  trailingIconHover: "no-icon",
                  href: "/example.com",
                },
                {
                  children: "Highlight option 2",
                  trailingIcon: "no-icon",
                  trailingIconHover: "no-icon",
                  href: "/example.com",
                },
                {
                  children: "Highlight option 3",
                  trailingIcon: "no-icon",
                  trailingIconHover: "no-icon",
                  href: "/example.com",
                },
                {
                  children: "Highlight option 4",
                  trailingIcon: "no-icon",
                  trailingIconHover: "no-icon",
                  href: "/example.com",
                },
              ],
              submenuType: "link",
            },
            submenuType: "topics",
          },
        },
      ] as MenuProps[],
    } as HeaderNavigationProps,
    hasHeaderSecondaryNavigation: true,
    headerSecondaryNavigation: {
      ariaLabelHeaderNavigation:
        "WARNING: Replace with correct aria label descriptive of secondary navigation bar",
      headerNavigationContent: getHeaderNavigationContent(),
    } as HeaderNavigationProps,
  } as HeaderProps;

  //dummyData customizado
  // const dummyData = {
  //   headerSEO:
  //     "WARNING: Replace with correct keys for SEO. This h1 only should appear on homepage. For that isHomepage has to have logic to know if we are on home.",
  //   isHomepage: homepageURL === window.location.href,
  //   darkModeHeader: false,
  //   menuLabel: "Menu",
  //   backButtonLabelBurger: "Back",
  //   hasHeaderGeneralOptions: true,
  //   headerGeneralOptions: {
  //     ariaLabelHeaderGeneralOptions:
  //       "WARNING: Replace with correct aria label descriptive of general navigation bar",
  //     hasLanguage: true,
  //     hasSearch: true,
  //     hasUser: true,
  //     menuItemsHeaderGeneralOptions: {
  //       language: {
  //         submenuItem: {
  //           submenuAriaLabel:
  //             "WARNING: Replace with correct aria label descriptive of list of languages",
  //           selectedAriaLabel:
  //             "WARNING: selected or other word to help accessibility engine when read selected language",
  //           actionItem: true,
  //           submenuItems: [
  //             {
  //               "data-aria-selected": "true",
  //               children: "Language 1",
  //               "data-iso": "xpto1",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon"
  //             },
  //             {
  //               children: "Language 2",
  //               "data-iso": "xpto2",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon"
  //             },
              
              
  //           ],
  //           submenuType: "language",
  //         } as SubmenuItemProps,
  //       },
  //       search: {
  //         menuItem: {
  //           children: "Search Label",
  //         },
  //         submenuItem: {
  //           submenuAriaLabel:
  //             "WARNING: Replace with correct aria label descriptive of opened menu search",
  //           submenuSearchContent: {
  //             hasTitle: true,
  //             title: "Insert here your title",
  //             searchTitle: "Insert here your search title",
  //             inputSearchBar: {
  //               placeholder: "Insert here placeholder for search bar",
  //             },
  //             hasLinkList: true,
  //             linkListContent: {
  //               linkListTitle: "Title of this list",
  //               linkList: [
  //                 {
  //                   children: "List item 1",
  //                   href: "https://zeroheight.com/1be481dc2/p/861a8e-header",
  //                   target: "_self",
  //                 },
  //                 {
  //                   children: "List item 2",
  //                   href: "https://zeroheight.com/1be481dc2/p/861a8e-header",
  //                   target: "_self",
  //                 }
  //               ],
  //             }
  //           },
  //           submenuType: "search",
  //         },
  //       },
  //       user: {
  //         menuItem: {
  //           children: "Login Label",
  //           "aria-label": "WARNING: Replace with correct aria-label for login",
  //         },
  //         submenuItem: {
  //           submenuAriaLabel:
  //             "WARNING: Replace with correct aria label for login options",
  //           actionItem: true,
  //           submenuItems: [
  //             {
  //               children: "Login item 1",
  //               trailingIcon: "agora-line-arrow-right-circle",
  //               trailingIconHover: "agora-solid-arrow-right-circle",
  //               href: "/example-1",
  //             },
  //             {
  //               children: "Login item 2 (contain fake auth simulation)",
  //               trailingIcon: "agora-line-arrow-right-circle",
  //               trailingIconHover: "agora-solid-arrow-right-circle",
  //             },
  //           ],
  //           submenuType: "link",
  //           submenuAlignment: "end",
  //         },
  //       },
  //     },
  //   },
  //   hasHeaderPrimaryNavigation: true,
  //   headerPrimaryNavigation: {
  //     ariaLabelHeaderNavigation:
  //       "WARNING: Replace with correct aria label descriptive of primary navigation bar",
  //     headerNavigationLegalSentence:
  //       "WARNING: Replace with correct legal sentence that is required",
  //     menuItemsHeaderNavigation: [
  //       {
  //         menuItem: {
  //           "aria-current": "page",
  //           noIcons: "true",
  //           children: "Menu Item 1",
  //         },
  //         relatedNavMenu: {
  //           menuItemsHeaderNavigation: [
  //             {
  //               menuItem: {
  //                 "aria-current": "page",
  //                 "aria-haspopup": true,
  //                 "aria-expanded": false,
  //                 children: "Sub. item 1-1",
  //               },
  //               submenuItem: {
  //                 submenuAriaLabel:
  //                   "WARNING: Replace with correct aria label descriptive of submenu item 1-1 options",
  //                 actionItem: false,
  //                 hasSubmenuItemsTitle: true,
  //                 submenuItemsTitle:
  //                   "WARNING: Replace with correct title according with submenuType and your project",
  //                 submenuItems: [
  //                   {
  //                     children: "Option 1",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 2",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 3",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 4",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 5",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 6",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 7",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                 ],
  //                 highlightItems: {
  //                   submenuAriaLabel:
  //                     "WARNING: Replace with correct aria label descriptive of highlighted options",
  //                   actionItem: false,
  //                   submenuItems: [
  //                     {
  //                       children: "Highlight option 1",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                     {
  //                       children: "Highlight option 2",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                     {
  //                       children: "Highlight option 3",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                     {
  //                       children: "Highlight option 4",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                   ],
  //                   submenuType: "link",
  //                 },
  //                 submenuType: "topics",
  //               },
  //             },
  //             {
  //               menuItem: {
  //                 noIcons: true,
  //                 href: "/example.com",
  //                 children: "Sub. item 1-2"
  //               },
  //             },
  //             {
  //               menuItem: {
  //                 noIcons: true,
  //                 href: "/example.com",
  //                 children: "Sub. item 1-3"
  //               },
  //             },
  //             {
  //               menuItem: {
  //                 "aria-haspopup": true,
  //                 "aria-expanded": false,
  //                 children: "Sub. item 1-4",
  //               },
  //               submenuItem: {
  //                 submenuAriaLabel:
  //                   "WARNING: Replace with correct aria label descriptive of submenu item 1-1 options",
  //                 actionItem: false,
  //                 hasSubmenuItemsTitle: true,
  //                 submenuItemsTitle: "Teste 4",
  //                 submenuItems: [
  //                   {
  //                     children: "Option 1",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 2",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                 ],
  //                 highlightItems: {
  //                   submenuAriaLabel:
  //                     "WARNING: Replace with correct aria label descriptive of highlighted options",
  //                   actionItem: false,
  //                   submenuItems: [
  //                     {
  //                       children: "Highlight option 1",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                     {
  //                       children: "Highlight option 2",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                   ],
  //                   submenuType: "link",
  //                 },
  //                 submenuType: "topics",
  //               },
  //             },
  //           ]
  //         }
  //       },
  //       {
  //         menuItem: {
  //           noIcons: "true",
  //           children: "Menu Item 1++"
  //         },
  //         relatedNavMenu: {
  //           menuItemsHeaderNavigation: [
  //             {
  //               menuItem: {
  //                 "aria-current": "page",
  //                 "aria-haspopup": true,
  //                 "aria-expanded": false,
  //                 children: "Sub. item 1+1",
  //               },
  //               submenuItem: {
  //                 submenuAriaLabel:
  //                   "WARNING: Replace with correct aria label descriptive of submenu item 1-1 options",
  //                 actionItem: false,
  //                 hasSubmenuItemsTitle: true,
  //                 submenuItemsTitle:
  //                   "WARNING: Replace with correct title according with submenuType and your project",
  //                 submenuItems: [
  //                   {
  //                     children: "Option 1",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 2",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                 ],
  //                 highlightItems: {
  //                   submenuAriaLabel:
  //                     "WARNING: Replace with correct aria label descriptive of highlighted options",
  //                   actionItem: false,
  //                   submenuItems: [
  //                     {
  //                       children: "Highlight option 1",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                     {
  //                       children: "Highlight option 2",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                   ],
  //                   submenuType: "link",
  //                 },
  //                 submenuType: "topics",
  //               },
  //             },
  //             {
  //               menuItem: {
  //                 noIcons: true,
  //                 href: "/example.com",
  //                 children: "Sub. item 1+2"
  //               },
  //             },
  //             {
  //               menuItem: {
  //                 noIcons: true,
  //                 href: "/example.com",
  //                 children: "Sub. item 1+3"
  //               },
  //             },
  //             {
  //               menuItem: {
  //                 "aria-haspopup": true,
  //                 "aria-expanded": false,
  //                 children: "Sub. item 1+4",
  //               },
  //               submenuItem: {
  //                 submenuAriaLabel:
  //                   "WARNING: Replace with correct aria label descriptive of submenu item 1-1 options",
  //                 actionItem: false,
  //                 hasSubmenuItemsTitle: true,
  //                 submenuItemsTitle: "Teste",
  //                 submenuItems: [
  //                   {
  //                     children: "Option 1",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 2",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 3",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 4",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 5",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 6",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                   {
  //                     children: "Option 7",
  //                     leadingIcon: "no-icon",
  //                     leadingIconHover: "no-icon",
  //                     href: "/example.com",
  //                   },
  //                 ],
  //                 highlightItems: {
  //                   submenuAriaLabel:
  //                     "WARNING: Replace with correct aria label descriptive of highlighted options",
  //                   actionItem: false,
  //                   submenuItems: [
  //                     {
  //                       children: "Highlight option 1",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                     {
  //                       children: "Highlight option 2",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                     {
  //                       children: "Highlight option 3",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                     {
  //                       children: "Highlight option 4",
  //                       trailingIcon: "no-icon",
  //                       trailingIconHover: "no-icon",
  //                       href: "/example.com",
  //                     },
  //                   ],
  //                   submenuType: "link",
  //                 },
  //                 submenuType: "topics",
  //               },
  //             },
  //           ]
  //         }
  //       },
  //       {
  //         menuItem: {
  //           children: "Menu Item 2",
  //           actionItem: false,
  //           "aria-haspopup": true,
  //           "aria-expanded": false,
  //         },
  //         submenuItem: {
  //           submenuAriaLabel:
  //             "WARNING: Replace with correct aria label descriptive of submenu item 2-1 options",
  //           actionItem: false,
  //           submenuItems: [
  //             {
  //               children: "Option 1",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon",
  //               href: "https://example.com",
  //             },
  //             {
  //               children: "Option 2",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon",
  //               href: "https://example.com",
  //             },
  //             {
  //               children: "Option 3",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon",
  //               href: "https://example.com",
  //             },
  //             {
  //               children: "Option 4",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon",
  //               href: "https://example.com",
  //             },
  //             {
  //               children: "Option 5",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon",
  //               href: "https://example.com",
  //             },
  //             {
  //               children: "Option 6",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon",
  //               href: "https://example.com",
  //             },
  //           ],
  //           submenuType: "platform",
  //           submenuAlignment: "end",
  //         }
  //       },
  //       {
  //         menuItem: {
  //           "aria-haspopup": true,
  //           "aria-expanded": false,
  //           children: "Menu Item 3"
  //         },
  //         submenuItem: {
  //           submenuAriaLabel:
  //             "WARNING: Replace with correct aria label descriptive of submenu item 3-1 options",
  //           actionItem: false,
  //           hasSubmenuItemsTitle: true,
  //           submenuItemsTitle:
  //             "WARNING: Replace with correct title according with submenuType and your project",
  //           submenuItems: [
  //             {
  //               children: "Option 1",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon",
  //               href: "/example.com",
  //             },
  //             {
  //               children: "Option 2",
  //               leadingIcon: "no-icon",
  //               leadingIconHover: "no-icon",
  //               href: "/example.com",
  //             },
  //           ],
  //           highlightItems: {
  //             submenuAriaLabel:
  //               "WARNING: Replace with correct aria label descriptive of highlighted options",
  //             actionItem: false,
  //             submenuItems: [
  //               {
  //                 children: "Highlight option 1",
  //                 trailingIcon: "no-icon",
  //                 trailingIconHover: "no-icon",
  //                 href: "/example.com",
  //               },
  //               {
  //                 children: "Highlight option 2",
  //                 trailingIcon: "no-icon",
  //                 trailingIconHover: "no-icon",
  //                 href: "/example.com",
  //               },
  //             ],
  //             submenuType: "link",
  //           },
  //           submenuType: "topics",
  //         },
  //       },
  //     ] 
  //   },
  //   hasHeaderSecondaryNavigation: true,
  //   headerSecondaryNavigation: {
  //     ariaLabelHeaderNavigation:
  //       "WARNING: Replace with correct aria label descriptive of secondary navigation bar",
  //     headerNavigationContent: "Some contnt from customized dummyDatta",
  //   } as HeaderNavigationProps,
  // } as HeaderProps;

  const [data, setData] = useState<HeaderProps>(dummyData as unknown as HeaderProps);

  // #region *Handler authentication, saving on session storage a auth with value true. Note:* This handler is for dummy purpose. This should handler by your application.- NOT USE THIS ON PRODUCTION
  const handleAuth = () => {
    sessionStorage.setItem("auth", "true");
    setData({...dummyAuthData});

    // setData({...dummyAuthData, ...apiDummyAuthData});
  };
  //#endregion

  // #region *Handler to change menu items to free content on navigation bar. This is a dummy example and please don't use it on production.
  const getHeaderNavigationToFreeContent = () => (
    <p className="text-[var(--color-neutral-900)] text-l-regular">
      Welcome,{" "}
      <span className="text-[var(--color-neutral-900)] text-l-bold">User</span>
    </p>
  );
  // #endregion

  // #region *EventSource to get notifications by sending events
  useEffect(() => {
    const eventSource = createEventSource((newData: any) => {
      console.log("newData", newData.message);

      setToastTitle(newData.title);
      setToastDescription(newData.message);
    });

    return () => {
      eventSource.close();
    };
  }, []);
  // #endregion

  // #region *Handle navigation
  const changeCurrentOnPrimaryNavigation = (evt: any) => {
    let items: any[] = [];
    Array.from(evt.currentTarget.parentElement.parentElement.children).filter(
      (ee: any) =>
        Array.from(ee.children).find((a: any) => {
          if (a.classList.contains("agora-menu-item")) {
            items = [...items, a];
          }
        })
    );
    const currentIndexPage = items?.findIndex((cip) => cip === evt.currentTarget);
    const lastIndexCurrentPage = items?.findIndex((ami: any) => ami.ariaCurrent === 'page');
    if (lastIndexCurrentPage >= 0) {
      delete data.headerPrimaryNavigation.menuItemsHeaderNavigation[lastIndexCurrentPage].menuItem['aria-current'];
      delete dummyAuthData.headerPrimaryNavigation.menuItemsHeaderNavigation[lastIndexCurrentPage].menuItem['aria-current'];

      // delete apiDummyAuthData.headerPrimaryNavigation.menuItemsHeaderNavigation[lastIndexCurrentPage].menuItem['aria-current'];
    }

    if (stringToBoolean(sessionStorage.getItem('auth-federated') ?? '')) {
      setData({
        ...data,
        ...dummyAuthData,
        
        // ...apiDummyAuthData,

        headerPrimaryNavigation: {
          ...dummyAuthData.headerPrimaryNavigation,

          // ...apiDummyAuthData.headerPrimaryNavigation,

          menuItemsHeaderNavigation: dummyAuthData.headerPrimaryNavigation.menuItemsHeaderNavigation.map((mh, idx) =>
            idx === currentIndexPage ? { ...mh, menuItem: { ...mh.menuItem, 'aria-current': 'page' } } : mh
          )
        }
      } as HeaderProps);
    } else {
      setData({
        ...data,
        headerPrimaryNavigation: {
          ...data.headerPrimaryNavigation,
          menuItemsHeaderNavigation: data.headerPrimaryNavigation.menuItemsHeaderNavigation.map((mh, idx) =>
            idx === currentIndexPage ? { ...mh, menuItem: { ...mh.menuItem, 'aria-current': 'page' } } : mh
          )
        }
      } as HeaderProps);
    }
  };

  const handleCurrentPage = (evt: any, navigationType: HeaderNavigationType) => {
    if (
      evt.currentTarget.parentElement?.parentElement &&
      !evt.currentTarget.hasAttribute("aria-haspopup")
    ) {
      if (navigationType === "primary") {
        changeCurrentOnPrimaryNavigation(evt);
      } else if (navigationType === 'secondary') {
        changeCurrentOnSecondaryNavigation(evt);
      }
    }
  };

  //#endregion

  // Dummy Auth data - NOT USE THIS ON PRODUCTION
  


  // dummyAuthData customizado
  const dummyAuthData = {
    ...data,
    headerGeneralOptions: {
      ...data.headerGeneralOptions,
      menuItemsHeaderGeneralOptions: {
        ...data.headerGeneralOptions.menuItemsHeaderGeneralOptions,
        user: {
          menuItem: {
            avatarType: "initials",
            srcPath: "AZ",
            interactive: true,
            alt: "WARNING: Replace with correct alt descriptive of avatar",
            information:
              "WARNING: Replace with correct tooltip information descriptive of avatar",
          } as MenuItemProps,
          drawerContent: {
            headerLabel: "Replace Drawer Title",
            menuDrawer: {
              "aria-label":
                "WARNING: Replace with correct aria-label descriptive of drawer",
              items: [
                {
                  leadingIcon: "no-icon",
                  leadingIconHover: "no-icon",
                  href: "#",
                  children: "Anchor 1",
                },
                {
                  leadingIcon: "no-icon",
                  leadingIconHover: "no-icon",
                  href: "#",
                  children: "Anchor 2",
                },
                {
                  leadingIcon: "no-icon",
                  leadingIconHover: "no-icon",
                  href: "#",
                  children: "Anchor 3",
                },
              ],
            } as DrawerMenuProps,
            footer: {
              footerLabel: "Close Button Label",
              onClick: () => {
                console.log("Clicked close button");
                sessionStorage.removeItem("auth");

                // setData({...dummyData});
                
                setData({
                  ...dummyData,
                  ...apiDummyDataShared,

                  // Objeto de exemplo para API para evitar erro/type checking
                  headerGeneralOptions: {
                    ...dummyData.headerGeneralOptions,
                    menuItemsHeaderGeneralOptions: {
                      ...dummyData.headerGeneralOptions.menuItemsHeaderGeneralOptions,
                      language: {
                        menuItem: {
                          itemType: "primary",
                          children: "Language",
                          onClick: () => {
                            console.log('firstLanguage');
                          },
                        },
                        submenuItem: {
                          submenuAriaLabel: "Language",
                          actionItem: true,
                          submenuItems: [
                            {
                              children: "Language 1",
                              leadingIcon: "no-icon",
                              leadingIconHover: "no-icon",
                              href: "#",
                            },
                            {
                              children: "Language 2",
                              leadingIcon: "no-icon",
                              leadingIconHover: "no-icon",
                              href: "#",
                            },
                          ],
                          submenuType: "language",
                        },
                      },
                    },
                  },
                  headerPrimaryNavigation: {
                    ...dummyData.headerPrimaryNavigation,
                    headerNavigationType: "primary",
                    menuItemsHeaderNavigation: [
                      {
                        menuItem: {
                          itemType: "primary",
                          "aria-current": "page",
                          noIcons: "true",
                          children: "Menu Item 1",
                          onClick: (evt: any) => {
                            handleCurrentPage(evt, "primary");
                          },
                        },
                        relatedNavMenu: {
                          ariaLabelHeaderNavigation: "Label",
                          headerNavigationLegalSentence: "Legal Sentence",
                          headerNavigationType: "primary",
                          menuItemsHeaderNavigation: [
                            {
                              menuItem: {
                                itemType: "primary",
                                "aria-current": "page",
                                "aria-haspopup": true,
                                "aria-expanded": false,
                                children: "Sub. item 1-1",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                  headerSecondaryNavigation: {
                    ariaLabelHeaderNavigation: "Label",
                    headerNavigationLegalSentence: "Legal Sentence",
                    menuItemsHeaderNavigation: [],
                    headerNavigationType: "secondary",
                  },
                });
        
              },
            } as DrawerFooterProps,
          } as DrawerContentProps,
        } as MenuProps,
      } as MenuItemGeneralOptionsProps,
    } as HeaderGeneralOptionsProps,
    headerPrimaryNavigation: {
      ...data.headerPrimaryNavigation,
      menuItemsHeaderNavigation: [
        {
          menuItem: {
            "aria-current": "page",
            noIcons: "true",
            children: "Menu Item 1",
            onClick: (evt: any) => {
              handleCurrentPage(evt, "primary");
            },
          },
          relatedNavMenu: {
            menuItemsHeaderNavigation: [
              {
                menuItem: {
                  "aria-current": "page",
                  "aria-haspopup": true,
                  "aria-expanded": false,
                  children: "Sub. item 1-1",
                },
                submenuItem: {
                  submenuAriaLabel:
                    "WARNING: Replace with correct aria label descriptive of submenu item 1-1 options",
                  actionItem: false,
                  hasSubmenuItemsTitle: true,
                  submenuItemsTitle:
                    "WARNING: Replace with correct title according with submenuType and your project",
                  submenuItems: [
                    {
                      children: "Option 1",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 2",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 3",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 4",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 5",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 6",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                    {
                      children: "Option 7",
                      leadingIcon: "no-icon",
                      leadingIconHover: "no-icon",
                      href: "/example.com",
                    },
                  ],
                  highlightItems: {
                    submenuAriaLabel:
                      "WARNING: Replace with correct aria label descriptive of highlighted options",
                    actionItem: false,
                    submenuItems: [
                      {
                        children: "Highlight option 1",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 2",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 3",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                      {
                        children: "Highlight option 4",
                        trailingIcon: "no-icon",
                        trailingIconHover: "no-icon",
                        href: "/example.com",
                      },
                    ],
                    submenuType: "link",
                  },
                  submenuType: "topics",
                },
              },
              {
                menuItem: {
                  noIcons: true,
                  href: "/example.com",
                  children: "Sub. item 1-2",
                  onClick: (evt: any) => {
                    handleCurrentPage(evt, "secondary");
                  },
                },
              },
              {
                menuItem: {
                  noIcons: true,
                  href: "/example.com",
                  children: "Sub. item 1-3",
                  onClick: (evt: any) => {
                    handleCurrentPage(evt, "secondary");
                  },
                },
              },
            ] as MenuProps[],
          } as HeaderNavigationProps,
        },
        {
          menuItem: {
            children: "Menu Item 2",
            actionItem: false,
            "aria-haspopup": true,
            "aria-expanded": false,
          },
          submenuItem: {
            submenuAriaLabel:
              "WARNING: Replace with correct aria label descriptive of submenu item 2-1 options",
            actionItem: false,
            submenuItems: [
              {
                children: "Option 1",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 2",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 3",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 4",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 5",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
              {
                children: "Option 6",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "https://example.com",
              },
            ],
            submenuType: "platform",
            submenuAlignment: "end",
          } as SubmenuItemProps,
        },
        {
          menuItem: {
            "aria-haspopup": true,
            "aria-expanded": false,
            children: "Menu Item 3",
            onClick: (evt: any) => {
              handleCurrentPage(evt, "primary");
            },
          },
          submenuItem: {
            submenuAriaLabel:
              "WARNING: Replace with correct aria label descriptive of submenu item 3-1 options",
            actionItem: false,
            hasSubmenuItemsTitle: true,
            submenuItemsTitle:
              "WARNING: Replace with correct title according with submenuType and your project",
            submenuItems: [
              {
                children: "Option 1",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 2",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 3",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 4",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 5",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 6",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
              {
                children: "Option 7",
                leadingIcon: "no-icon",
                leadingIconHover: "no-icon",
                href: "/example.com",
              },
            ],
            highlightItems: {
              submenuAriaLabel:
                "WARNING: Replace with correct aria label descriptive of highlighted options",
              actionItem: false,
              submenuItems: [
                {
                  children: "Highlight option 1",
                  trailingIcon: "no-icon",
                  trailingIconHover: "no-icon",
                  href: "/example.com",
                },
                {
                  children: "Highlight option 2",
                  trailingIcon: "no-icon",
                  trailingIconHover: "no-icon",
                  href: "/example.com",
                },
                {
                  children: "Highlight option 3",
                  trailingIcon: "no-icon",
                  trailingIconHover: "no-icon",
                  href: "/example.com",
                },
                {
                  children: "Highlight option 4",
                  trailingIcon: "no-icon",
                  trailingIconHover: "no-icon",
                  href: "/example.com",
                },
              ],
              submenuType: "link",
            },
            submenuType: "topics",
          },
        },
        {
          menuItem: {
            noIcons: "true",
            href: "#example",
            children: "Menu Item 4",
            onClick: (evt: any) => {
              handleCurrentPage(evt, "primary");
            },
          },
          relatedNavMenu: {
            freeMenuItemsHeaderNavigation: getHeaderNavigationToFreeContent(),
          } as HeaderNavigationProps,
        },
      ] as MenuProps[],
    } as HeaderNavigationProps,
  } as HeaderProps;

  


  // #region *Handler change of url. Note:* This handler is for dummy purpose. This should handler by your application.- NOT USE THIS ON PRODUCTION
  useEffect(() => {
    const urlChange = () => {
      if (homepageURL === window.location.href) {
        setData({
          ...data,
          ...dummyAuthData,
          //...apiDummyAuthData,

          isHomepage: true,
          headerSecondaryNavigation: {
            ...data.headerSecondaryNavigation,
            headerNavigationContent: getHeaderNavigationContent(),
          } as HeaderNavigationProps,
        });
        setIsHome(true);
      } else {
        setData({
          ...data,
          ...dummyAuthData,
          // ...apiDummyAuthData,
          
          isHomepage: false,
          headerSecondaryNavigation: {
            ...data.headerSecondaryNavigation,
            headerNavigationContent: getHeaderNavigationContent(),
          } as HeaderNavigationProps,
        });
        setIsHome(false);
      }
    };

    window.addEventListener("hashchange", urlChange);
    return () => {
      window.removeEventListener("hashchange", urlChange);
    };
  }, [data]);
  // #endregion

  // #region *Handler to know if authentication is true. Note:* This handler is for dummy purpose. This should handler by your application.- NOT USE THIS ON PRODUCTION
  useEffect(() => {
    if (stringToBoolean(sessionStorage.getItem("auth") ?? "")) {
      setData({...dummyAuthData});

      // setData({...dummyAuthData, ...apiDummyAuthData});
    }
  }, []);
  // #endregion

  // #region *Handler current page, if navigation occur state are lost (so click twice for dummy purpose). Note:* This handler is for dummy purpose. This should handler by your application with a redux store or similar. NOT USE THIS ON PRODUCTION

  const setDataSecondaryWithAuth = (
    currentIndexPage: number,
    currentSecondaryIndexPage: number
  ) => {
    setData({
      ...data,
      ...dummyAuthData,
      // ...apiDummyAuthData,~

      headerPrimaryNavigation: {
        ...dummyAuthData.headerPrimaryNavigation,
        // ...apiDummyAuthData.headerPrimaryNavigation,
        
        menuItemsHeaderNavigation:
          dummyAuthData.headerPrimaryNavigation.menuItemsHeaderNavigation.map(
            (mh, idx) => {
              let mm;
              if (idx === currentIndexPage) {
                if (mh.relatedNavMenu as HeaderNavigationProps) {
                  const me = mh.relatedNavMenu?.menuItemsHeaderNavigation.map(
                    (mhs, idxS) => {
                      if (idxS === currentSecondaryIndexPage) {
                        return {
                          ...mhs,
                          menuItem: { ...mhs.menuItem, "aria-current": "page" },
                        };
                      }
                      return { ...mhs };
                    }
                  );
                  mm = {
                    ...mh,
                    menuItem: { ...mh.menuItem, "aria-current": "page" },
                    relatedNavMenu: {
                      ...mh.relatedNavMenu,
                      menuItemsHeaderNavigation: me,
                    },
                  };
                }
              } else {
                mm = { ...mh };
              }
              return { ...mh, ...mm };
            }
          )
      },
    } as HeaderProps);
  };
  const setDataSecondaryWithoutAuth = (
    currentIndexPage: number,
    currentSecondaryIndexPage: number
  ) => {
    setData({
      ...data,
      headerPrimaryNavigation: {
        ...data.headerPrimaryNavigation,
        menuItemsHeaderNavigation:
          data.headerPrimaryNavigation.menuItemsHeaderNavigation.map(
            (mh, idx) => {
              let mm;
              if (idx === currentIndexPage) {
                if (mh.relatedNavMenu as HeaderNavigationProps) {
                  const me = mh.relatedNavMenu?.menuItemsHeaderNavigation.map(
                    (mhs, idxS) => {
                      if (idxS === currentSecondaryIndexPage) {
                        return {
                          ...mhs,
                          menuItem: { ...mhs.menuItem, "aria-current": "page" },
                        };
                      }
                      return { ...mhs };
                    }
                  );
                  mm = {
                    ...mh,
                    menuItem: { ...mh.menuItem, "aria-current": "page" },
                    relatedNavMenu: {
                      ...mh.relatedNavMenu,
                      menuItemsHeaderNavigation: me,
                    },
                  };
                }
              } else {
                mm = { ...mh };
              }
              return { ...mh, ...mm };
            }
          ),
      },
    } as HeaderProps);
  };

  const changeCurrentOnSecondaryNavigation = (evt: any) => {
    const items = [
      ...document.querySelectorAll(".agora-header-primary .agora-menu-item"),
    ];
    const currentIndexPage = items?.findIndex(
      (ami) => ami.ariaCurrent === "page"
    );

    const secondaryItems: HTMLElement[] = [
      ...evt.currentTarget.parentElement.parentElement.getElementsByClassName(
        "agora-menu-item"
      ),
    ];
    const currentSecondaryIndexPage = secondaryItems?.findIndex(
      (csip) => csip === evt.currentTarget
    );
    const lastSecondaryIndexCurrentPage = secondaryItems?.findIndex(
      (asmi) => asmi.ariaCurrent === "page"
    );

    if (lastSecondaryIndexCurrentPage >= 0) {
      delete data.headerPrimaryNavigation.menuItemsHeaderNavigation[
        currentIndexPage
      ].relatedNavMenu?.menuItemsHeaderNavigation[lastSecondaryIndexCurrentPage]
        .menuItem["aria-current"];
      delete dummyAuthData.headerPrimaryNavigation.menuItemsHeaderNavigation[
        currentIndexPage
      ].relatedNavMenu?.menuItemsHeaderNavigation[lastSecondaryIndexCurrentPage]
        .menuItem["aria-current"];

      // delete apiDummyAuthData.headerPrimaryNavigation.menuItemsHeaderNavigation[
      //   currentIndexPage
      // ].relatedNavMenu?.menuItemsHeaderNavigation[lastSecondaryIndexCurrentPage]
      //   .menuItem["aria-current"];
    }
    if (stringToBoolean(sessionStorage.getItem("auth") ?? "")) {
      setDataSecondaryWithAuth(currentIndexPage, currentSecondaryIndexPage);
    } else {
      setDataSecondaryWithoutAuth(currentIndexPage, currentSecondaryIndexPage);
    }
  };
  // #endregion

  // #region *ClassNames
  const containerHeaderClassNames = classNames(
    "mx-auto min-h-screen flex flex-col bg-[var(--color-neutral-400)]",
    {
      "max-w-[1440px]": limited,
    }
  );

  // const headerClassNames = classNames("text-xl-bold mb-32", {
  //   hidden: isHome,
  //   block: !isHome,
  // });
  // #endregion

  // #region *Notification args
  const args = {
    id: 1,
    title: toastTitle,
    description: toastDescription,
    type: "info" as ToastType,
    closeLabel: "Close toast",
    duration: 5000,
  };
  // #endregion

  return (
    <div className={containerHeaderClassNames}>
      <header>
        <AmaHeader {...data} />
        {args && (
          <ToastProvider position={"top-right"}>
            <Notification {...args} />
          </ToastProvider>
        )}
      </header>
    </div>
  );
};

export default Header
