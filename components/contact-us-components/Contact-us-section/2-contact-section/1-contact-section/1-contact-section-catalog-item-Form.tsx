import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import { useSubmitHook } from "../../../../../hooks/useSubmitHook";
import React from "react";
import {ContactCatalogHeader} from "./1-contact-section-catalog-Header"
// ------------------------------ ---------------------- --------
interface AppProps {
	contactCatalogItem: OneCatalogData;
	contactCatalogHeader: OneCatalogData;
}
export const ContactCatalogItem: React.FunctionComponent<AppProps> = ({
	contactCatalogItem,	contactCatalogHeader 
}) => {

	const { onSubmit, myRef, handleChange } = useSubmitHook();
const{FirstHeader,SecondHeader,ShortDescription,LongDescription,ChildFirstHeader,ChildSecondHeader}=contactCatalogItem
  return (
    <>
   	<section className="section-spacing">
		<div className="container">
					<ContactCatalogHeader
					contactCatalogHeader={contactCatalogHeader}/>
			<div className="row">
				<div className="col-md-12 col-lg-8 offset-lg-2">
							<form
								onSubmit={onSubmit} ref={myRef}
							 className="contact-form wow fadeIn" >
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<input placeholder={FirstHeader} onChange={handleChange}  className="form-control" name="Name" type="text" required data-error="Please enter your first name"/>
									<div className="help-block with-errors"></div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
											<input placeholder={SecondHeader} onChange={handleChange} className="form-control" name="Name" type="text"
											data-error="Please enter your lastName"
											/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<input placeholder={ShortDescription} onChange={handleChange}  className="form-control" name="Email" type="email" required data-error="Please enter your valid email address"/> 
							<div className="help-block with-errors"></div>
						</div>
						<div className="form-group">
									<input placeholder={LongDescription} className="form-control"
										  onChange={handleChange}
										name="Phone" type="phone" required data-error="Please enter your valid email address" /> 
							<div className="help-block with-errors"></div>
						</div>
						<div className="form-group">
							<textarea   name="Message" placeholder={ChildFirstHeader} onChange={handleChange} cols={20} rows={8} className="form-control" required data-error="Please enter your comments"></textarea>
							<div className="help-block with-errors"></div>
						</div>
						<div className="text-center">
							<input value={ChildSecondHeader}  className="btn btn-primary" type="submit"/>
							<div id="msgSubmit" className="hidden"></div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
    </>
  );
};
