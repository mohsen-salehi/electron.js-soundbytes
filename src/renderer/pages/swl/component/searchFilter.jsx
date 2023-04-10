import React from 'react';
import InputNumber from "./inputNumber.jsx";

function SearchFilter() {
    return (
        <div className="card card-form">
            <div className="card-header"><h4 className="card-title">Search Filters</h4></div>
            <div className="card-body">
                <fieldset>
                    <div className="row">
                        <div className="col-md-4 col-lg-2 text-md-end"><label className="col-form-label">Freq
                            (kHz/MHz)</label></div>
                        <div className="col-md-8 col-lg-4">
                            <div className="input-group mb-3"><input
                                className="filter-toggle group-filter-toggle btn-check" id="filter_by_frequency"
                                name="filter_by_frequency" type="checkbox" value="y" /> <label
                                className="btn btn-outline-secondary label-filter-toggle" htmlFor="filter_by_frequency"> <i
                                className="fa fa-filter" aria-hidden="true"></i> </label> <input
                                className="form-control filter-entry" disabled="disabled" id="freq" max="30000" min="3"
                                name="freq" pattern="[3-9]|[1-2][0-9]|[1-9][0-9]{3,4}|[0-9]{1,3}\.[0-9]{1,3}"
                                required="" step="any" title="e.g. 6.195 or 6195" type="text" value="15.31" /> <input
                                type="checkbox" className="btn-check" id="freq-dither-toggle"/> <label
                                className="btn btn-secondary input-group-toggle" htmlFor="freq-dither-toggle"><span
                                className="fa fa-arrows-h"></span></label></div>
                        </div>
                        <div className="col-md-4 col-lg-2 text-md-end"><label className="col-form-label">Band</label>
                        </div>
                        <div className="col-md-8 col-lg-4">
                            <div className="input-group mb-3"><input
                                className="filter-toggle group-filter-toggle btn-check" id="filter_by_band"
                                name="filter_by_band" type="checkbox" value="y" /> <label
                                className="btn btn-outline-secondary label-filter-toggle" htmlFor="filter_by_band"> <i
                                className="fa fa-filter" aria-hidden="true"></i> </label> <select
                                className="form-select filter-entry" disabled="disabled" id="band" name="band">
                                <option value="3.200-3.400">90 m (3.200-3.400)</option>
                                <option value="3.900-4.000">75m (3.900-4.000)</option>
                                <option value="4.750-5.060">60m (4.750-5.060)</option>
                                <option value="5.800-6.200">49m (5.800-6.200)</option>
                                <option value="7.200-7.450">41m (7.200-7.450)</option>
                                <option value="9.400-9.900">31m (9.400-9.900)</option>
                                <option value="11.600-12.100">25m (11.600-12.100)</option>
                                <option value="13.570-13.870">22m (13.570-13.870)</option>
                                <option value="15.100-15.830">19m (15.100-15.830)</option>
                                <option value="17.480-17.900">16m (17.480-17.900)</option>
                                <option value="18.900-19.020">15m (18.900-19.020)</option>
                                <option value="21.450-21.850">13m (21.450-21.850)</option>
                                <option value="25.600-26.100">11m (25.600-26.100)</option>
                            </select></div>
                        </div>
                    </div>
                </fieldset>
                <div className="row"><label className="col-form-label col-md-4 col-lg-2 text-md-end">Broadcaster</label>
                    <div className="col-md-8 col-lg-4">
                        <div className="input-group mb-3"><input className="filter-toggle btn-check"
                                                                 id="filter_by_broadcaster" name="filter_by_broadcaster"
                                                                 type="checkbox" value="y" /> <label
                            className="btn btn-outline-secondary label-filter-toggle" htmlFor="filter_by_broadcaster"> <i
                            className="fa fa-filter" aria-hidden="true"></i> </label> <select
                            className="form-select filter-entry" disabled="disabled" id="broadcaster"
                            name="broadcaster">
                            <option value="ANT">ANTI, Milano</option>
                            <option value="ADM">Abu Dhabi Media Company</option>
                            <option value="SDA">Adventist Broadcasting Service, Inc.</option>
                            <option value="AWR">Adventist World Radio</option>
                            <option value="AIR">All India Radio</option>
                            <option value="BCQ">Allan H. Weiner</option>
                            <option value="MLK">Assemblies of Yahweh</option>
                            <option selected="" value="BBC">BBC Worldservice</option>
                            <option value="BIX">BitExpress (Germany)</option>
                            <option value="BRB">Broadcast Belgium</option>
                            <option value="ICN">Broccoli Trash Metal &amp; Grunge, Netherlands</option>
                            <option value="C29">Channel 292 (Germany)</option>
                            <option value="CNR">China National Radio</option>
                            <option value="CRI">China Radio International</option>
                            <option value="DWL">Deutsche Welle</option>
                            <option value="DWD">Deutscher Wetterdienst</option>
                            <option value="ERU">Egypt Radio &amp; TV Union</option>
                            <option value="ENC">Encompass Digital Media Services</option>
                            <option value="EWN">Eternal Word Television Network, Inc.</option>
                            <option value="E24">Europa 24 (Germany)</option>
                            <option value="FEC">Far East Broadcasting Company</option>
                            <option value="NEW">For new organization</option>
                            <option value="HCA">HCJB Australia</option>
                            <option value="RDR">HFCC, Intl. Radio for Disaster Relief project</option>
                            <option value="JHR">Hill Radio International</option>
                            <option value="IBR">IBRA Radio</option>
                            <option value="IRB">Islamic Republic of Iran Broadcasting</option>
                            <option value="JIC">Japan International Communications</option>
                            <option value="JRC">Joode Radiocommunications Consultancy (The Netherlands)</option>
                            <option value="JRT">Jordan Radio &amp; Television</option>
                            <option value="KRI">Koode Radio International</option>
                            <option value="KBS">Korean Broadcasting System</option>
                            <option value="TWW">Leap of Faith, Inc.</option>
                            <option value="MBR">Media Broadcast GmbH</option>
                            <option value="RKW">Ministry of Information - State of Kuwait</option>
                            <option value="MRT">Mongol Radio &amp; Television</option>
                            <option value="NBT">NBS of Thailand</option>
                            <option value="NSB">Nihon Short-wave Broadc. Co.</option>
                            <option value="NHK">Nippon Hoso Kyokai</option>
                            <option value="ORF">Oesterreichischer Rundfunk</option>
                            <option value="PBC">Pakistan Broadcasting Corporation</option>
                            <option value="PBS">Philippines Broadcasting Service</option>
                            <option value="RSH">Radio 700</option>
                            <option value="RAC">Radio Casanova International</option>
                            <option value="RDI">Radio Delta International</option>
                            <option value="EUR">Radio Europe Netherlands</option>
                            <option value="REE">Radio Exterior de Espana</option>
                            <option value="RFP">Radio For Peace International</option>
                            <option value="RFI">Radio France Internationale</option>
                            <option value="RMI">Radio Miami International</option>
                            <option value="RNZ">Radio New Zealand</option>
                            <option value="VIO">Radio OZ-Viola</option>
                            <option value="RON">Radio Onda ASBL</option>
                            <option value="PIE">Radio Piepzender</option>
                            <option value="RRI">Radio Republic of Indonesia</option>
                            <option value="RRO">Radio Romania International</option>
                            <option value="RRS">Radio Russia</option>
                            <option value="TOE">Radio208</option>
                            <option value="HBN">Republic of Palau</option>
                            <option value="ST2">SE-TA 2 (Germany)</option>
                            <option value="SWR">Shortwave Radio Services (Germany)</option>
                            <option value="SIB">Solomon Islands Broadcasting</option>
                            <option value="TDF">TDF (France)</option>
                            <option value="TDA">Telediffusion d'Algerie</option>
                            <option value="TOM">The Overcomer Ministry</option>
                            <option value="TWR">Trans World Radio</option>
                            <option value="RTT">Tunesian Radio &amp; TV</option>
                            <option value="TRT">Turkish Radio-TV Corp</option>
                            <option value="AGM">United States Agency for Global Media (USAGM)</option>
                            <option value="VBT">Vanuatu Broadcasting and Television Corporation</option>
                            <option value="VAT">Vatican Radio</option>
                            <option value="ERA">Voice of Greece</option>
                            <option value="VOH">Voice of Hope</option>
                            <option value="VOR">Voice of Russia</option>
                            <option value="VOV">Voice of Vietnam</option>
                            <option value="HCJ">Voice of the Andes</option>
                            <option value="WCR">WNQM, Inc.</option>
                            <option value="RNO">WRNO Worldwide, Inc.</option>
                            <option value="MWV">World Christian Broadcasting (USA)</option>
                            <option value="NLS">World Christian Broadcasting Corporation</option>
                            <option value="INB">World International Broadcasters, Inc.</option>
                            <option value="WMR">World Music Radio</option>
                        </select></div>
                    </div>
                    <div className="col-md-4 col-lg-2 text-md-end"><label className="col-form-label">Language</label>
                    </div>
                    <div className="col-md-8 col-lg-4">
                        <div className="input-group mb-3"><input checked="" className="filter-toggle btn-check"
                                                                 id="filter_by_language" name="filter_by_language"
                                                                 type="checkbox" value="y"/> <label
                            className="btn btn-outline-secondary label-filter-toggle" htmlFor="filter_by_language"> <i
                            className="fa fa-filter" aria-hidden="true"></i> </label>
                            <select
                            className="form-select filter-entry" id="language" name="language">
                            <option value="Ady">Adyghe</option>
                            <option value="Aar">Afar</option>
                            <option value="Sqi">Albanian</option>
                            <option value="Amh">Amharic</option>
                            <option value="Ara">Arabic</option>
                            <option value="Aae">Arbëreshë Albanian</option>
                            <option value="Hye">Armenian</option>
                            <option value="Csh">Asho Chin</option>
                            <option value="Asm">Assamese</option>
                            <option value="Aze">Azerbaijani</option>
                            <option value="Ban">Balinese</option>
                            <option value="Bal">Baluchi</option>
                            <option value="Bam">Bambara</option>
                            <option value="Bel">Belarusian</option>
                            <option value="Ben">Bengali</option>
                            <option value="Bgw">Bhatri</option>
                            <option value="Bis">Bislama</option>
                            <option value="Bos">Bosnian</option>
                            <option value="Bul">Bulgarian</option>
                            <option value="Mya">Burmese</option>
                            <option value="Yue">Cantonese</option>
                            <option value="Khm">Central Khmer</option>
                            <option value="Pst">Central Pashto</option>
                            <option value="Zho">Chinese</option>
                            <option value="Hrv">Croatian</option>
                            <option value="Ces">Czech</option>
                            <option value="Prs">Dari</option>
                            <option value="Dso">Desiya</option>
                            <option value="Nld">Dutch</option>
                            <option value="Dyu">Dyula</option>
                            <option value="Dzo">Dzongkha</option>
                            <option selected="" value="Eng">English</option>
                            <option value="Epo">Esperanto</option>
                            <option value="Fil">Filipino</option>
                            <option value="Fra">French</option>
                            <option value="Ful">Fulah</option>
                            <option value="Kat">Georgian</option>
                            <option value="Deu">German</option>
                            <option value="Guj">Gujarati</option>
                            <option value="Hak">Hakka Chinese</option>
                            <option value="Hau">Hausa</option>
                            <option value="Haz">Hazaragi</option>
                            <option value="Heb">Hebrew</option>
                            <option value="Hin">Hindi</option>
                            <option value="Hmn">Hmong</option>
                            <option value="Var">Huarijio</option>
                            <option value="Hun">Hungarian</option>
                            <option value="Ibo">Igbo</option>
                            <option value="Ilo">Iloko</option>
                            <option value="Ind">Indonesian</option>
                            <option value="Ita">Italian</option>
                            <option value="Ium">Iu Mien</option>
                            <option value="Jpn">Japanese</option>
                            <option value="Jav">Javanese</option>
                            <option value="Kac">Kachin</option>
                            <option value="Kan">Kannada</option>
                            <option value="Kau">Kanuri</option>
                            <option value="Kaz">Kazakh</option>
                            <option value="Khg">Khams Tibetan</option>
                            <option value="Kha">Khasi</option>
                            <option value="Kjg">Khmu</option>
                            <option value="Kin">Kinyarwanda</option>
                            <option value="Kir">Kirghiz</option>
                            <option value="Trp">Kok Borok</option>
                            <option value="Kor">Korean</option>
                            <option value="Kun">Kunama</option>
                            <option value="Kur">Kurdish</option>
                            <option value="Lhu">Lahu</option>
                            <option value="Lao">Lao</option>
                            <option value="Lat">Latin</option>
                            <option value="Lis">Lisu</option>
                            <option value="Lom">Loma (Liberia)</option>
                            <option value="Lus">Lushai</option>
                            <option value="Khb">Lü</option>
                            <option value="Rup">Macedo Romanian</option>
                            <option value="Mad">Madurese</option>
                            <option value="Vmw">Makhuwa</option>
                            <option value="Mlg">Malagasy</option>
                            <option value="Mly">Malay (individual language)</option>
                            <option value="Msa">Malay (macrolanguage)</option>
                            <option value="Mal">Malayalam</option>
                            <option value="Cmn">Mandarin Chinese</option>
                            <option value="Man">Mandingo</option>
                            <option value="Mni">Manipuri</option>
                            <option value="Kxf">Manumanaw Karen</option>
                            <option value="Mar">Marathi</option>
                            <option value="Mas">Masai</option>
                            <option value="Axm">Middle Armenian</option>
                            <option value="Nan">Min Nan Chinese</option>
                            <option value="Min">Minangkabau</option>
                            <option value="Ell">Modern Greek (1453-)</option>
                            <option value="Mnw">Mon</option>
                            <option value="Mon">Mongolian</option>
                            <option value="Mos">Mossi</option>
                            <option value="Mul">Multiple languages</option>
                            <option value="Nep">Nepali</option>
                            <option value="Nij">Ngaju</option>
                            <option value="Pcm">Nigerian Pidgin</option>
                            <option value="Tts">Northeastern Thai</option>
                            <option value="Nor">Norwegian</option>
                            <option value="Ori">Oriya</option>
                            <option value="Oro">Orokolo</option>
                            <option value="Orm">Oromo</option>
                            <option value="Pan">Panjabi</option>
                            <option value="Mvf">Peripheral Mongolian</option>
                            <option value="Fas">Persian</option>
                            <option value="Pol">Polish</option>
                            <option value="Por">Portuguese</option>
                            <option value="Pus">Pushto</option>
                            <option value="Ron">Romanian</option>
                            <option value="Rus">Russian</option>
                            <option value="Ksw">S'gaw Karen</option>
                            <option value="Srp">Serbian</option>
                            <option value="Shn">Shan</option>
                            <option value="Sna">Shona</option>
                            <option value="Iii">Sichuan Yi</option>
                            <option value="Sid">Sidamo</option>
                            <option value="Xst">Silt'e</option>
                            <option value="Snd">Sindhi</option>
                            <option value="Sin">Sinhala</option>
                            <option value="Som">Somali</option>
                            <option value="Spa">Spanish</option>
                            <option value="Arb">Standard Arabic</option>
                            <option value="Chn">Standart Chinese</option>
                            <option value="Apd">Sudanese Arabic</option>
                            <option value="Sun">Sundanese</option>
                            <option value="Swa">Swahili (macrolanguage)</option>
                            <option value="Shi">Tachelhit</option>
                            <option value="Tgl">Tagalog</option>
                            <option value="Tgk">Tajik</option>
                            <option value="Tam">Tamil</option>
                            <option value="Tat">Tatar</option>
                            <option value="Tel">Telugu</option>
                            <option value="Tha">Thai</option>
                            <option value="Bod">Tibetan</option>
                            <option value="Tir">Tigrinya</option>
                            <option value="Tur">Turkish</option>
                            <option value="Tuk">Turkmen</option>
                            <option value="Twi">Twi</option>
                            <option value="Aoz">Uab Meto</option>
                            <option value="Uig">Uighur</option>
                            <option value="Ukr">Ukrainian</option>
                            <option value="Umb">Umbundu</option>
                            <option value="Und">Undetermined</option>
                            <option value="Urd">Urdu</option>
                            <option value="Uzb">Uzbek</option>
                            <option value="Vie">Vietnamese</option>
                            <option value="Jub">Wannu</option>
                            <option value="Pes">Western Farsi</option>
                            <option value="Yao">Yao</option>
                            <option value="Yor">Yoruba</option>
                        </select></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-2 text-md-end"><label className="col-form-label">Time</label></div>
                    <div className="col-md-8 col-lg-4">
                        <div className="input-group date mb-3" id="timepicker" data-target-input="nearest"><input
                            className="filter-toggle btn-check" id="filter_by_utc" name="filter_by_utc" type="checkbox"
                            value="07:51 UTC"/> <label className="btn btn-outline-secondary label-filter-toggle"
                                                      htmlFor="filter_by_utc"
                                                       >
                            <i className="fa fa-filter" aria-hidden="true"></i> </label> <input type="text"
                                                                                                className="form-control datetimepicker-input filter-entry"
                                                                                                data-target="#timepicker"
                                                                                                disabled />
                            <div id="set-utc-btn" className="input-group-text" data-target="#timepicker"
                                 data-toggle="datetimepicker"><span className="fa fa-clock-o"></span></div>
                            <button id="update-utc-toggle" type="button"
                                    className="btn btn-outline-secondary input-group-toggle" data-bs-toggle="button">
                                <span className="fa fa-play"></span></button></div>
                    </div>
                    <div className="col-md-4 col-lg-2 text-md-end"><label className="col-form-label"> CIRAF <a
                        href="https://www.itu.int/en/ITU-R/terrestrial/broadcast/HFBC/PublishingImages/Ciraf%20map.jpg"
                        target="_blank"> <span className="fa fa-external-link"></span> </a> </label></div>
                    <div className="col-md-8 col-lg-4">
                        <div className="input-group mb-3"><input className="filter-toggle btn-check"
                                                                 id="filter_by_ciraf" name="filter_by_ciraf"
                                                                 type="checkbox" value="y" /> <label
                            className="btn btn-outline-secondary label-filter-toggle" htmlFor="filter_by_ciraf"> <i
                            className="fa fa-filter" aria-hidden="true"></i> </label> <input
                            className="form-control filter-entry" disabled="disabled" id="ciraf" name="ciraf"
                            pattern="(\d+|\d+\s*-\s*\d+)(,\s*\d+|,\s*\d+\s*-\s*\d+)*" placeholder="e.g. '18, 27-29'"
                            title="Separate CIRAF zones by commas and/or hyphens e.g. '41-44, 49, 51'" type="text"
                            value="" />
                            <button className="btn btn-primary input-group-text" type="submit"
                                    id="get-ciraf-zone-button" formAction="/proppy/ajax/getcirafzone"><span
                                className="fa fa-map-pin"></span></button>
                            <button className="btn btn-primary input-group-text" type="submit"
                                    id="get-adjacent-zone-button" formAction="/proppy/ajax/getcirafzone"><span
                                className="fa fa-arrows"></span></button></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-2 text-md-end"><label className="col-form-label">Text</label></div>
                    <div className="col-md-8 col-lg-4">
                        <div className="input-group mb-3"><input className="filter-toggle btn-check"
                                                                 id="filter_by_string" name="filter_by_string"
                                                                 type="checkbox" value="y" /> <label
                            className="btn btn-outline-secondary label-filter-toggle" htmlFor="filter_by_string"> <i
                            className="fa fa-filter" aria-hidden="true"></i> </label> <input
                            className="form-control filter-entry" disabled="disabled" id="string" name="string"
                            placeholder="e.g. 'Meyerton'" type="text" value="" /></div>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-auto">
                        <button id="do-prediction-button" type="submit" className="btn btn btn-primary"> Search&nbsp;
                            <span className="fa fa-search"></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;