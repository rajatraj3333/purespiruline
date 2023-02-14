import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from '@expo/vector-icons/Ionicons'

import { getNames,getNameList } from 'country-list';

const data = [
//   { label: 'Item 1', value: '1' },
//   { label: 'Item 2', value: '2' },
//   { label: 'Item 3', value: '3' },
//   { label: 'Item 4', value: '4' },
//   { label: 'Item 5', value: '5' },
//   { label: 'Item 6', value: '6' },
//   { label: 'Item 7', value: '7' },
//   { label: 'Item 8', value: '8' },

{country:"afghanistan",value:"afghanistan"},
{country:"albania",value:"albania"},
{country:"algeria",value:"algeria"},
{country:"american samoa",value:"american"},
{country:"andorra",value: "andorra"},
{country:"angola",value:"angola"},
{country:"anguilla",value:"anguilla"},
{country:"antarctica",value:"antarctica"},
{country:"antigua and barbuda",value:"antigua and barbuda"},
{country:"argentina",value:"argentina"},
{country:"armenia",value:"armenia"},
{country:"aruba",value: "aruba"},
{country:"australia",value: "australia"},
{country:"austria",value: "austria"},
{country:"azerbaijan",value: "azerbaijan"},
{country:"bahamas",value: "bahamas"},
{country:"bahrain",value: "bahrain"},
{country:"bangladesh",value: "bangladesh"},
{country:"barbados",value:"barbados"},
{country:"belarus",value: "belarus"},
{country:"belgium",value: "belgium"},
{country:"belize",value: "belize"},
{country:"benin",value: "benin"},
{country:"bermuda",value: "bermuda"},
{country:"bhutan",value: "bhutan"},
{country:"bolivia, plurinational state of",value: "bolivia, plurinational state of"}, 
{country:"bonaire, sint eustatius and saba",value: "bonaire, sint eustatius and saba"},
{country:"bosnia and herzegovina",value: "bosnia and herzegovina"},
{country:"botswana",value: "botswana"},
{country:"bouvet island",value: "bouvet island"},
{country:"brazil",value: "brazil"},
{country:"british indian ocean territory",value: "british indian ocean territory"},
{country:"brunei darussalam",value: "brunei darussalam"},
{country:"bulgaria",value: "bulgaria"},
{country:"burkina faso",value:"burkina faso"},
{country:"burundi",value: "burundi"},
{country:"cabo verde",value: "cabo verde"},
{country:"cambodia",value: "cambodia"},
{country:"cameroon",value: "cameroon"},
{country:"canada",value: "canada"},
{country:"cayman islands",value: "cayman islands"},
{country:"central african republic",value: "central african republic"},
{country:"chad",value:"chad"},
{country:"chile",value:"chile"},
{country:"china",value: "china"},
{country:"christmas island",value: "christmas island"},
{country:"cocos (keeling) islands",value: "cocos (keeling) islands"},
{country:"colombia",value: "colombia"},
{country:"comoros",value: "KcomorosM"},
{country:"congo",value: "congo"},
{country:"congo, democratic republic of the",value: "congo, democratic republic of the"},
{country:"cook islands",value: "cook islands"},
{country:"costa rica",value: "costa rica"},
{country:"croatia",value: "croatia"},
{country:"cuba",value: "cuba"},
{country:"curaçao",value: "curaçao"},
{country:"cyprus",value: "cyprus"},
{country:"czechia",value: "czechia"},
{country:"côte d'ivoire",value: "côte d'ivoire"},
{country:"denmark",value: "denmark"},
{country:"djibouti",value: "djibouti"},
{country:"dominica",value: "dominica"},
{country:"dominican republic",value: "dominican republic"},
{country:"ecuador",value: "ecuador"},
{country:"egypt",value: "egypt"},
{country:"el salvador",value: "el salvador"},
{country:"equatorial guinea",value: "equatorial guinea"},
{country:"eritrea",value: "eritrea"},
{country:"estonia",value: "estonia"},
{country:"eswatini",value: "eswatini"},
{country:"ethiopia",value: "ethiopia"},
{country:"falkland islands (malvinas)",value: "falkland islands (malvinas)"},
{country:"faroe islands",value: "faroe islands"},
{country:"fiji",value: "fiji"},
{country:"finland",value: "finland"},
{country:"france",value: "france"},
{country:"french guiana",value: "french guiana"},
{country:"french polynesia",value:"french polynesia"},
{country:"french southern territories",value: "french southern territoriesTF"},
{country:"gabon",value: "gabon"},
{country:"gambia",value: "gambia"},
{country:"georgia",value: "georgia"},
{country:"germany",value: "germany"},
{country:"ghana",value: "ghana"},
{country:"gibraltar",value: "gibraltar"},
{country:"greece",value: "greece"},
{country:"greenland",value:"greenland"},
{country:"grenada",value:"grenada"},
{country:"guadeloupe",value: "guadeloupe"},
{country:"guam",value: "guam"},
{country:"guatemala",value: "guatemala"},
{country:"guernsey",value: "guernsey"},
{country:"guinea",value: "guinea"},
{country:"guinea-bissau",value: "guinea-bissau"},
{country:"guyana",value: "guyana"},
{country:"haiti",value: "haiti"},
{country:"heard island and mcdonald islands",value: "heard island and mcdonald islands"},
{country:"holy see",value:"holy see"},
{country:"honduras",value: "honduras"},
{country:"hong kong",value: "hong kong"},
{country:"hungary",value: "hungary"},
{country:"hungary",value: "hungary"},
{country:"india",value: "india"},
{country:"indonesia",value: "indonesia"},
{country:"iran, islamic republic of",value: "iran, islamic republic of"},
{country:"iraq",value: "iraq"},
{country:"ireland",value: "ireland"},
{country:"isle of man",value: "isle of man"},
{country:"israel",value: "israel"},
{country:"italy",value:"italy"},
{country:"jamaica",value: "jamaica"},
{country:"japan",value: "japan"},
{country:"jersey",value: "jersey"},
{country:"jordan",value:"jordan"},
{country:"kazakhstan",value: "kazakhstan"},
{country:"kenya",value: "kenya"},
{country:"kiribati",value: "kiribati"},
{country:"korea, democratic people's republic of",value: "korea, democratic people's republic of"},
{country:"korea, republic of",value: "korea, republic of"},
{country:"kuwait",value: "kuwait"},
{country:"kyrgyzstan",value: "KG"},
{country:"lao people's democratic republic",value: "lao people's democratic republic"},
{country:"latvia",value: "latvia"},
{country:"latvia",value:"latvia"},
{country:"lesotho",value: "lesotho"},
{country:"liberia",value: "liberia"},
{country:"libya",value: "libya"},
{country:"liechtenstein",value: "liechtenstein"},
{country:"lithuania",value: "lithuania"},
{country:"luxembourg",value: "luxembourg"},
{country:"macao",value: "macao"},
{country:"madagascar",value: "madagascar"},
{country:"malawi",value: "malawi"},
{country:"malaysia",value: "malaysiaMY"},
{country:"maldives",value: "maldives"},
{country:"mali",value:"mali"},
{country:"malta",value: "malta"},
{country:"marshall islands",value: "marshall islands"},
{country:"martinique",value: "martinique"},
{country:"mauritania",value: "mauritania"},
{country:"mauritius",value: "mauritius"},
{country:"mayotte",value: "mayotte"},
{country:"mexico",value: "mexico"},
{country:"micronesia, federated states of",value: "micronesia, federated states of"},
{country:"moldova, republic of",value: "moldova, republic of"},
{country:"monaco",value: "monaco"},
{country:"mongolia",value: "mongolia"},
{country:"montenegro",value: "montenegro"},
{country:"montserrat",value: "montserrat"},
{country:"morocco",value: "morocco"},
{country:"mozambique",value: "mozambique"},
{country:"myanmar",value: "myanmar"},
{country:"namibia",value: "namibia"},
{country:"nauru",value: "nauru"},
{country:"nepal",value: "nepal"},
{country:"netherlands",value: "netherlands"},
{country:"new caledonia",value: "new caledonia"},
{country:"new zealand",value: "new zealand"},
{country:"nicaragua",value: "NnicaraguaI"},
{country:"niger",value: "niger"},
{country:"nigeria",value: "nigeria"},
{country:"niue",value: "niue"},
{country:"norfolk island",value: "norfolk island"},
{country:"north macedonia",value: "north macedonia"},
{country:"northern mariana islands",value: "northern mariana islands"},
{country:"norway",value: "norway"},
{country:"oman",value: "OM"},
{country:"pakistan",value: "pakistan"},
{country:"palau",value: "palau"},
{country:"palestine, state of",value: "palestine, state of"},
{country:"panama",value: "panama"},
{country:"papua new guinea",value: "papua new guinea"},
{country:"paraguay",value: "paraguay"},
{country:"peru",value: "peru"},
{country:"philippines",value: "philippines"},
{country:"pitcairn",value: "pitcairn"},
{country:"poland",value: "poland"},
{country:"portugal",value: "portugal"},
{country:"puerto rico",value: "puerto rico"},
{country:"qatar",value: "qatar"},
{country:"romania",value: "romania"},
{country:"russian federation",value: "russian federation"},
{country:"rwanda",value: "rwanda"},
{country:"réunion",value: "rwanda"},
{country:"saint barthélemy",value: "saint barthélemy"},
{country:"saint helena, ascension and tristan da cunha",value: "saint helena, ascension and tristan da cunha"},
{country:"saint kitts and nevis",value: "saint kitts and nevis"},
{country:"saint lucia",value: "saint lucia"},
{country:"saint martin, (french part)",value: "saint martin, (french part)"},
{country:"saint pierre and miquelon",value: "saint pierre and miquelon"},
{country:"saint vincent and the grenadines",value: "saint vincent and the grenadines"},
{country:"samoa",value: "samoa"},
{country:"san marino",value: "san marino"},
{country:"sao tome and principe",value: "sao tome and principe"},
{country:"saudi arabia",value: "saudi arabia"},
{country:"senegal",value: "senegal"},
{country:"serbia",value: "serbia"},
{country:"seychelles",value: "seychelles"},
{country:"sierra leone",value: "sierra leone"},
{country:"singapore",value: "singapore"},
{country:"sint maarten, (dutch part)",value: "sint maarten, (dutch part)"},
{country:"slovakia",value: "slovakia"},
{country:"slovenia",value: "slovenia"},
{country:"solomon islands",value: "solomon islands"},
{country:"somalia",value: "somalia"},
{country:"south africa",value: "south africaZA"},
{country:"south georgia and the south sandwich islands",value: "south georgia and the south sandwich islands"},
{country:"south sudan",value: "south sudan"},
{country:"spain",value: "spain"},
{country:"sri lanka",value: "sri lanka"},
{country:"sudan",value: "sudan"},
{country:"suriname",value: "suriname"},
{country:"svalbard and jan mayen",value: "svalbard and jan mayen"},
{country:"sweden",values: "sweden"},
{country:"switzerland",value: "switzerland"},
{country:"syrian arab republic",value: "syrian arab republic"},
{country:"taiwan, province of china",value: "taiwan, province of china"},
{country:"tajikistan",value: "tajikistan"},
{country:"tanzania, united republic of",value: "tanzania, united republic of"},
{country:"thailand",value: "thailand"},
{country:"timor-leste",value: "timor-leste"},
{country:"togo",value: "TtogoG"},
{country:"tokelau",value: "tokelau"},
{country:"tonga",value: "tonga"},
{country:"trinidad and tobago",value: "trinidad and tobago"},
{country:"tunisia",value: "tunisia"},
{country:"turkey",value: "turkey"},
{country:"turkmenistan",value: "turkmenistan"},
{country:"turks and caicos islands",value: "turks and caicos islands"},
{country:"tuvalu",value: "tuvalu"},
{country:"uganda",value: "uganda"},
{country:"ukraine",value: "ukraine"},
{country:"united arab emirates",value: "united arab emirates"},
{country:"united kingdom of great britain and northern ireland",value: "Gunited kingdom of great britain and northern irelandB"},
{country:"united states minor outlying islands",value: "united states minor outlying islands"},
{country:"united states of america",value: "united states of america"},
{country:"uruguay",value: "uruguay"},
{country:"uzbekistan",value: "uzbekistan"},
{country:"vanuatu",value: "vanuatu"},
{country:"venezuela, bolivarian republic of",value: "venezuela, bolivarian republic of"},
{country:"viet nam",value: "viet nam"},
{country:"virgin islands, british",value: "virgin islands, british"},
{country:"virgin islands, u.s.",value: "virgin islands, u.s."},
{country:"wallis and futuna",value: "wallis and futuna"},
{country:"western sahara",value: "western sahara"},
{country:"yemen",value: "yemen"},
{country:"zambia",value: "zambia"},
{country:"zimbabwe",value: "zimbabwe"},
{country:"åland islands",value: "åland islands"}

];

const CountryList = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
 console.log(value)
  const renderLabel = () => {
     
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
         Country List
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="country"
        valueField="value"
        placeholder={!isFocus ? 'Select Country' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Ionicons
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="md-globe-outline"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default CountryList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'darkseagreen',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});