import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

export default function AreaFlagSelection(props: { setSelectCountry: any }) {
  const { setSelectCountry } = props;
  function handleInputChange(event: any, value: string) {
    setSelectCountry(value);
  }

  const changeHandler = (value: string) => {
    console.log(value); // value should be here
  };

  const defaultSelectCountry = () => {
    const locale = "HK"; // API should define which country user agent
    return countries.find((option) => option.code === locale);
  };

  defaultSelectCountry();
  return (
    <Autocomplete
      id="country-select"
      options={countries}
      autoHighlight
      sx={{ width: { md: 200, xs: "100%" }, maxWidth: { md: 200, xs: "100%" } }}
      defaultValue={defaultSelectCountry()}
      getOptionLabel={(option) => option.phone}
      onInputChange={handleInputChange}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          variant="filled"
          sx={{ maxWidth: { md: 200, xs: "100%" } }}
          onChange={(e) => changeHandler(e.target.value)}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly CountryType[] = [
  { code: "AD", label: "Andorra +376", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan +93", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla +1-264", phone: "1-264" },
  { code: "AL", label: "Albania +355", phone: "355" },
  { code: "AM", label: "Armenia +374", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica +672", phone: "672" },
  { code: "AR", label: "Argentina +54", phone: "54" },
  { code: "AS", label: "American Samoa +1-684", phone: "1-684" },
  { code: "AT", label: "Austria +43", phone: "43" },
  {
    code: "AU",
    label: "Australia +61",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba +297", phone: "297" },
  { code: "AX", label: "Alland Islands +358", phone: "358" },
  { code: "AZ", label: "Azerbaijan +994", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina +387",
    phone: "387",
  },
  { code: "BB", label: "Barbados +1-246", phone: "1-246" },
  { code: "BD", label: "Bangladesh +880", phone: "880" },
  { code: "BE", label: "Belgium +32", phone: "32" },
  { code: "BF", label: "Burkina Faso +226", phone: "226" },
  { code: "BG", label: "Bulgaria +359", phone: "359" },
  { code: "BH", label: "Bahrain +973", phone: "973" },
  { code: "BI", label: "Burundi +257", phone: "257" },
  { code: "BJ", label: "Benin +229", phone: "229" },
  { code: "BL", label: "Saint Barthelemy +590", phone: "590" },
  { code: "BM", label: "Bermuda +1-441", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam +673", phone: "673" },
  { code: "BO", label: "Bolivia +591", phone: "591" },
  { code: "BR", label: "Brazil +55", phone: "55" },
  { code: "BS", label: "Bahamas +1-242", phone: "1-242" },
  { code: "BT", label: "Bhutan +975", phone: "975" },
  { code: "BV", label: "Bouvet Island +47", phone: "47" },
  { code: "BW", label: "Botswana +267", phone: "267" },
  { code: "BY", label: "Belarus +375", phone: "375" },
  { code: "BZ", label: "Belize +501", phone: "501" },
  {
    code: "CA",
    label: "Canada +1",
    phone: "1",
    suggested: true,
  },
  { code: "CN", label: "China +86", phone: "86" },
  {
    code: "DE",
    label: "Germany +49",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },

  { code: "GA", label: "Gabon +241", phone: "241" },
  { code: "GB", label: "United Kingdom +44", phone: "44" },
  { code: "HK", label: "Hong Kong +852", phone: "852" },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy +39", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan +81",
    phone: "81",
    suggested: true,
  },
  {
    code: "KP +850",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of +82", phone: "82" },
  { code: "MO", label: "Macao +853", phone: "853" },
  { code: "NU", label: "Niue +683", phone: "683" },
  { code: "PL", label: "Poland +48", phone: "48" },
  { code: "PT", label: "Portugal +351", phone: "351" },
  { code: "SZ", label: "Swaziland +268", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TH", label: "Thailand +66", phone: "66" },
  { code: "TR", label: "Turkey +90", phone: "90" },
  {
    code: "TW",
    label: "Taiwan, Republic of China +886",
    phone: "886",
  },
  {
    code: "US",
    label: "United States +1",
    phone: "1",
    suggested: true,
  },
  { code: "VN", label: "Vietnam +84", phone: "84" },
  { code: "VU", label: "Vanuatu +678", phone: "678" },
  { code: "WF", label: "Wallis and Futuna +681", phone: "681" },
  { code: "WS", label: "Samoa +685", phone: "685" },
  { code: "XK", label: "Kosovo +383", phone: "383" },
  { code: "YE", label: "Yemen +967", phone: "967" },
  { code: "YT", label: "Mayotte +262", phone: "262" },
  { code: "ZA", label: "South Africa +27", phone: "27" },
  { code: "ZM", label: "Zambia +260", phone: "260" },
  { code: "ZW", label: "Zimbabwe +263", phone: "263" },
];
