export const checkNumber = async (data: { code: string; number: string }) => {
  let response = await fetch(
    `${process.env.REACT_APP_TWILIO_API_PATH as string}/(${data.code})${
      data.number
    }`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${process.env.REACT_APP_TWILIO_AUTH}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
};
