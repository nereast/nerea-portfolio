import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

import { useTranslation } from "react-i18next";

export const ErrorPage = () => {

    const { t } = useTranslation();

    return (
      <div className="bg-beige">
        <Nav/>
        <div className='px-[25px] pb-[50px] md:px-[50px] pt-[200px] md:pb-[50px] xl:pt-[300px] xl:pb-[100px] flex flex-col items-center bg-cover bg-right xl:bg-top-left'>
            <h1 className="font-title font-bold text-black text-[100px]">404</h1>
            <p className="font-text font-normal text-black text-[30px]">{t("error_page.subtitle")}</p>
            <div className="relative">
                <Button href={t("error_page.button_url")} text={t("error_page.button_text")}/>
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
  