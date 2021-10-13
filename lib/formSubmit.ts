// this function submit form states to backend;
// {
//   "Name":"soheilbijavar",
//   "Email":"sbijavar@gmail.com",
//   "Message":"SALAM TEST",
//   "Phone":"091251434341"
//   }

export const formSubmit = async (formInfo: { [key: string]: string }) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      clientkey: "82388f7d40bc90f5919233ebf76ffd01cca80c9a",
    },
    body: JSON.stringify(formInfo),
  };
  try {
    const res = await fetch(
      "http://portfolio.zhoonapp.ir/odata/Contact",
      requestOptions
    );
    //
    if (res.ok) return res;
    //
  } catch (error) {
    console.log(error.message);
    throw new Error("please refresh page!");
  }
};
