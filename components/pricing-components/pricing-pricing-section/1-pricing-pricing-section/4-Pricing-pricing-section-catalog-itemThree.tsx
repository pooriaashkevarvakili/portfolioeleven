import {OneCatalogData} from "./../../../../types/OneCatalogData";
import {GetStaticProps} from "next";



// ------------------------------ ---------------------- --------
interface AppProps {
    priceingPriceingCatalogItemThree: OneCatalogData;

}

export const PriceingPriceingCatalogItemThree: React.FunctionComponent<AppProps> = ({                                                                    
    priceingPriceingCatalogItemThree,
}) => {
 
    const {
        ContentAttachment,
        FirstHeader,
        SecondHeader,
        ShortDescription,
        LongDescription,
        ChildFirstHeader,
        ChildSecondHeader,
        ChildShortDescription, } =
        priceingPriceingCatalogItemThree
    return (
        <>
        <div className="col-md-4">
            <div className="pricing-table wow fadeIn">
                <div className="thumb">
                    <img src={ContentAttachment[0]+"?width=350&height=227.5"} alt=""/>
                </div>
                    <div
                                    style={{ direction: "rtl", textAlign: "right" }}

                        className="pricing-info ">
                        <h3
                                    style={{ direction: "rtl", textAlign: "right" }}

                        >{FirstHeader}</h3>
                        <ul
                                    style={{ direction: "rtl", textAlign: "right" }}

                        >
                        <li>{SecondHeader}</li>
                        <li>{ShortDescription}</li>
                        <li>{LongDescription}</li>
                        <li>{ChildFirstHeader}</li>
                        <li>{ChildSecondHeader}</li>
                    </ul>

                    <a href="/contact-us" className="btn btn-default">{ChildShortDescription}</a>
                </div>
            </div>
        </div>


        </>
    )
}


