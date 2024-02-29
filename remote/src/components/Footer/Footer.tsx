import React, { FC, useEffect, useState } from "react";
import { FederatedFooter, PublicFooter } from "@ama-pt/agora-design-system";
import "@ama-pt/agora-design-system/dist/index.css";
import prr from "../../../assets/prr.svg";
import europa from "../../../assets/europa.svg";
import acessibilidade from "../../../assets/acessibilidade.png";
import republicaPortuguesa from "../../../assets/republica-portuguesa.png";
import republicaPortuguesaSmall from "../../../assets/republica-portuguesa.svg";
import { fetchFooterData, fetchFooterDataShared } from "../../services/getApiFooterData";
import { FooterData, LinkData, LogoData, FooterProps } from "../../types/footerTypes";


const Footer: FC<FooterProps> = ({ isPublic }) => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFooterData();
        const dataShared = await fetchFooterDataShared();

        const mergedData = {
          ...data,
          ...dataShared
        };

        setFooterData(mergedData);
        
        console.log("Footer Data fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchData();
  }, []);

  const getLogoSrc = (src: string) => {
    switch (src) {
      case "prr":
        return prr;
      case "republicaPortuguesaSmall":
        return republicaPortuguesaSmall;
      default:
        return europa;
    }
  };
  //   badgeImage: {
  //     image: {
  //       alt: "Selo de ouro de usabilidade e acessibilidade",
  //       src: acessibilidade,
  //     },
  //     link: {
  //       href: "https://selo.usabilidade.gov.pt/",
  //       target: "_blank",
  //       title: "Abre num novo separador",
  //     },
  //   },
  //   brandImage: {
  //     image: {
  //       alt: "Logótipo República Portuguesa",
  //       src: republicaPortuguesa,
  //     },
  //     link: {
  //       href: "https://www.portugal.gov.pt/pt/gc22",
  //       target: "_blank",
  //       title: "Abre num novo separador",
  //     },
  //   },
  //   caption:
  //     "O ePortugal é financiado pelo Plano de Recuperação e Resiliência e o Next Generation EU.",
  //   card: {
  //     description:
  //       "Caso necessite de ajuda durante a realização do serviço, poderá utilizar qualquer um dos canais de comunicação à sua disposição e sempre que necessário esclareça todas as dúvidas ou partilhe uma sugestão.",
  //     links: [
  //       {
  //         children: "Enviar mensagem",
  //         href: "?path=/docs/documentation-welcome--page",
  //         target: "_self",
  //       },
  //       {
  //         children: "Ver contactos",
  //         href: "?path=/docs/documentation-welcome--page",
  //         target: "_self",
  //       },
  //       {
  //         children: "Ver locais de atendimento",
  //         href: "?path=/docs/documentation-welcome--page",
  //         target: "_self",
  //       },
  //     ],
  //     title: "Precisa de ajuda com este serviço?",
  //   },
  //   copyright: "© 2023 República Portuguesa. Todos os direitos reservados.",
  //   partnersLogos: [
  //     {
  //       image: {
  //         alt: "Logótipo PRR",
  //         src: prr,
  //       },
  //       link: {
  //         href: "https://recuperarportugal.gov.pt/",
  //         target: "_blank",
  //         title: "Abre num novo separador",
  //       },
  //     },
  //     {
  //       image: {
  //         alt: "Logótipo República Portuguesa",
  //         src: republicaPortuguesaSmall,
  //       },
  //       link: {
  //         href: "https://www.portugal.gov.pt/pt/gc22",
  //         target: "_blank",
  //         title: "Abre num novo separador",
  //       },
  //     },
  //     {
  //       image: {
  //         alt: "Logótipo Next Generation EU",
  //         src: europa,
  //       },
  //       link: {
  //         href: 'https://ec.europa.eu/info/strategy/recovery-plan-europe_pt"',
  //         target: "_blank",
  //         title: "Abre num novo separador",
  //       },
  //     },
  //   ],
  //   socialsLink: [
  //     {
  //       icon: "agora-line-linkedin",
  //       iconHover: "agora-solid-linkedin",
  //       link: {
  //         href: "https://linkedin.com",
  //         target: "_blank",
  //         title: "Linkedin",
  //       },
  //     },
  //     {
  //       icon: "agora-line-facebook",
  //       iconHover: "agora-solid-facebook",
  //       link: {
  //         href: "https://facebook.com",
  //         target: "_blank",
  //         title: "Facebook",
  //       },
  //     },
  //     {
  //       icon: "agora-line-twitter-x",
  //       iconHover: "agora-solid-twitter-x",
  //       link: {
  //         href: "https://twitter.com",
  //         target: "_blank",
  //         title: "Twitter",
  //       },
  //     },
  //     {
  //       icon: "agora-line-instagram",
  //       iconHover: "agora-solid-instagram",
  //       link: {
  //         href: "https://recuperarportugal.gov.pt/",
  //         target: "_blank",
  //         title: "Instagram",
  //       },
  //     },
  //     {
  //       icon: "agora-line-youtube",
  //       iconHover: "agora-solid-youtube",
  //       link: {
  //         href: "https://recuperarportugal.gov.pt/",
  //         target: "_blank",
  //         title: "Youtube",
  //       },
  //     },
  //   ],
  //   usefulLinks: [
  //     {
  //       children: "Acessibilidade",
  //       href: acessibilidade,
  //       target: "_self",
  //     },
  //     {
  //       children: "Termos e Condições",
  //       href: "/termos-e-condicoes",
  //       target: "_self",
  //     },
  //     {
  //       children: "Política de Privacidade",
  //       href: "/politica-de-privacidade",
  //       target: "_self",
  //     },
  //     {
  //       children: "Definições de Cookies",
  //       href: "/cookies",
  //       target: "_self",
  //     },
  //   ],
  // };

  return (
    <div className="mx-auto min-h-screen flex flex-col max-w-[1440px]">
      <footer>
        {footerData &&
          (isPublic ? (
            <PublicFooter
              badgeImage={{
                image: {
                  alt: footerData.badgeImage.image.alt,
                  src: acessibilidade,
                },
                link: footerData.badgeImage.link,
              }}
              brandImage={{
                image: {
                  alt: footerData.brandImage.image.alt,
                  src: republicaPortuguesa,
                },
                link: footerData.brandImage.link,
              }}
              caption={footerData.caption}
              card={footerData.card}
              copyright={footerData.copyright}
              partnersLogos={footerData.partnersLogos.map((logo: LogoData) => ({
                image: {
                  alt: logo.image.alt,
                  src:getLogoSrc(logo.image.src)
                },
                link: logo.link,
              }))}
              socialsLink={footerData.socialsLink}
              usefulLinks={footerData.usefulLinks.map((link: LinkData) => ({
                children: link.children,
                href:
                  link.href === "acessibilidade" ? acessibilidade : link.href,
                target: link.target,
              }))}
            />
          ) : (
            <FederatedFooter
              badgeImage={{
                image: {
                  alt: footerData.badgeImage.image.alt,
                  src: acessibilidade,
                },
                link: footerData.badgeImage.link,
              }}
              brandImage={{
                image: {
                  alt: footerData.brandImage.image.alt,
                  src: republicaPortuguesa,
                },
                link: footerData.brandImage.link,
              }}
              caption={footerData.caption}
              card={footerData.card}
              copyright={footerData.copyright}
              partnersLogos={footerData.partnersLogos.map((logo: LogoData) => ({
                image: {
                  alt: logo.image.alt,
                  src:
                    logo.image.src === "prr"
                      ? prr
                      : logo.image.src === "republicaPortuguesaSmall"
                      ? republicaPortuguesaSmall
                      : europa,
                },
                link: logo.link,
              }))}
              socialsLink={footerData.socialsLink}
              usefulLinks={footerData.usefulLinks.map((link: LinkData) => ({
                children: link.children,
                href:
                  link.href === "acessibilidade" ? acessibilidade : link.href,
                target: link.target,
              }))}
            />
          ))}
      </footer>
    </div>
  );
};

export default Footer;
