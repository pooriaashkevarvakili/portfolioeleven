import { OneCatalogData } from "./../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
    teamCatalogHeader:OneCatalogData;
}
export const TeamCatalogHeader: React.FunctionComponent<AppProps> = ({
    teamCatalogHeader }) => {

    const{FirstHeader,SecondHeader}=teamCatalogHeader
    return (
        <>
            <div className="row">
            <div className="col-md-12">
                <div className="section-title text-center">
                        <h2
                                    style={{ direction: "rtl", textAlign: "right" }}

                        ><span>{FirstHeader}</span></h2>
                        <p
                                    style={{ direction: "rtl", textAlign: "right" }}

                        >{SecondHeader}</p>
                </div>
            </div>
        </div>
            </>

    )

}





