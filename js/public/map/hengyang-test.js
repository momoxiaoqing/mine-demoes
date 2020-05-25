(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('hengyangtest', {
        "type": "FeatureCollection", "features": [
            {
                "type": "Feature",
                "id": "430421",
                "properties": {"name": "衡阳县", "cp": [112.379643, 26.962388], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@BBBDBBBBDHBBJ@DBBBDDBD@DBHDBD@FADBDDHHD@D@DAD@BBFDBB@D@H@F@D@DADADCB@D@BKB@B@@@@@@@@B@@@@@B@B@B@B@BBB@B@B@BBBB@@@D@B@BBB@@BBJJFBDBDADAFAFBF@B@HCFADBFDBDBDDJ@F@DABCBAFBD@D@BCBCBEDADABBDBBHD@B@BABC@E@ABAD@JAHADCDEBC@KDUFCDCD@BBDNDDD@D@D@DABADCFAH@F@FBDDDFHAH@DCFEDCDCFAD@F@BDFDFBDBD@@@@@B@BABCD@B@D@B@DBDBD@D@@@BBB@BBHBDBFFH@B@@@@B@@B@BBBBBDBBBBBBBFD@BA@@B@B@B@@BBDB@@B@@@@A@@B@@@B@@ABAB@@@@@@AA@AA@@@@B@@@B@@@BA@@B@B@@BD@FBB@@@B@@AB@B@@@B@B@BA@@BB@@B@@B@@@@B@@@A@@B@@@@@B@B@@A@@@A@@@AB@@@@AAAAA@@B@B@@@B@@B@B@B@@@BB@@B@@@@@@B@@BB@@@@@@AB@@A@@@@AA@@B@@@@AA@@@@@B@@@B@@BB@@@@@B@@@@BB@@@B@@@@@B@@@AB@@@BB@@@B@@B@@@B@@@C@@@@B@@@B@@@B@@@@@@@@BB@@@@@BBB@@B@@@@@BAB@@@@BBB@@@@@@BA@CB@@@B@@@AB@@BB@@@@BB@@@@DDBBDDBABA@AB@@AF@B@BB@@@BA@A@@BAB@B@B@B@B@BBB@@@B@B@BB@@@B@@@@A@@@@@@B@DBB@B@@@@AD@B@HCB@B@BBBB@@ABADAB@B@@BB@@@@BBB@B@B@@BBBBF@BBBBBD@B@B@HBDBDAD@DBDBBBDFBBDB@B@B@@CBC@CDADCDAF@D@JBDBBDBDBDBBDBDBBBBBBBDALAD@BCBADADCHCD@D@@@BBBB@B@BBDBBBBDAB@BA@CACCC@A@@DBDDDBBDDBB@DAD@DBBDBDBDATGDCDCBCBCBCBAB@D@HDBBB@@A@C@ABADCBA@ACAAC@ABADCDAD@D@DBD@BABEBA@CAAAC@C@ABAB@BABA@ABCB@FADA@@AAA@A@@@@G@CBABCB@DADABADCBADBDBDBBBBB@F@BBBBBBBBB@D@BAB@BDD@B@B@DABBDBBJDFDBBBBDBD@B@DB@B@BBH@DED@DBBBDBBBADALGB@B@BB@B@DBBDBDBF@F@B@BBB@ABAB@DBFBBBBDBDD@BBD@BAFADABADAB@@@BBBBDDDDDDDDB@BBDDDBBBBBDBDDBD@DAD@BBBB@BAB@DBBDBB@D@DAHADABBFFDDD@DBBAD@BAHEF@H@H@@@D@DAFCD@B@BB@BABBBDBD@F@DABA@CAEAEAA@AD@FBNBB@FBJ@H@FBH@HBF@BBD@BAB@JEF@DABAFAF@F@DABABABGDCBCFBRHDBB@BA@ABA@@BBBB@B@BCF@B@BB@@@B@@@B@DA@@B@BB@@B@B@@AFCB@@BDD@@@@B@DG@ABABA@@B@B@B@F@BAB@BABAB@B@B@@B@BB@@BB@BBB@DAD@@@B@BAB@B@D@@@B@BA@@BA@C@@@A@@C@A@@@@@@A@@@A@@AA@@AA@ABC@A@ABA@@B@B@@A@A@A@A@@@ADABA@@BA@@D@DA@CBA@AB@BADABAB@BA@AAA@C@A@A@C@ABCDADCDADAD@@A@A@A@EAA@A@A@C@AB@BABAB@@A@A@A@AACAAACAA@AAABA@ABABABADAB@BA@@@A@AAAAA@C@A@A@A@A@@A@A@AAA@@A@C@ABCBC@@BCB@B@D@D@B@BB@@B@AD@@@BA@@BB@B@BADABADA@@D@BB@@BA@ABA@ADAD@D@F@D@B@D@DABAF@D@D@B@B@BAB@@ABABA@A@AA@AAAAA@CAC@A@AA@AA@BABAB@FAF@FAD@DADABADAB@B@DBD@B@B@F@FAFAF@DAF@BCDCDABCBABABABADADADADADADAD@D@B@BAFAB@D@B@BBBA@@AA@CAA@A@C@@@ABC@CBABABA@A@A@C@AA@@A@AB@B@B@BABADCDCBABADABCBA@A@C@C@E@E@C@AAC@AAC@A@C@A@C@ABABABADAFABA@ABC@CAAAA@AAACAA@C@EBA@C@CAA@AAAA@@AA@C@AAE@AAE@AAAAA@A@A@CDCDCDABABADAD@D@D@BADABADCDABABABBB@DDDBFDFDDBD@BBD@BADCDCBCDCBEBABCBAB@B@B@BBBDB@D@B@B@@CBA@A@C@@@ABAB@B@B@B@B@DCBCDE@A@A@C@AAAAA@A@@BABBBA@@BA@AAC@@CA@ABABA@@@@@A@A@S@CACCEGGAAAAAAAA@ADA@ABABAAE@@AA@@@A@E@A@CAI@C@A@A@@B@BA@BFBBBDDBBD@HBF@DBDAB@@@BABABC@CCCCA@A@A@CB@F@B@@@B@BAB@@A@A@A@@B@D@B@@A@@@A@ACCA@@AA@ABC@C@A@@ACECE@C@CAEAIIBEBEDEBEFCFCDAFCFCDCP@BA@CLGTABCDA@KFOB[EUI@@IGAEGBA@A@A@@AACAAE@AAAC@@AAA@AA@AA@A@@BADABA@CCA@@@A@A@C@C@CAABCDCBE@ABA@@BBBDBBB@@@BABA@@@A@C@A@A@@@E@EACCACBEBC@A@A@@AAAAAAEBC@EDEDGDG@CAECECEEAGCCEBI@EAC@E@IBI@KACG@ABCDCHADCBC@IBCDAL@DG@CCAGC@EACGE@@CAEEGACCEAA@A@ACBEAEACE@IHCBE@ACC[@K@GCCCC@@E@AD@DCFE@E@CCCA@E@EBCDAFADAA@@CACAAAAA@C@ABCBAD@B@BABA@A@@ACCAAACCCABCBADCDCBA@EACACBEDEF@DBFAJCDKHGDIBE@EACADAB@BC@CACAAEAEAAAACACAICCAADE@AKIAABIDCBCAACAKACAE@G@G@AAAC@C@AAAKCCCE@AB@DBDABE@ADARCBAAACC@C@A@CACCEECAE@A@AB@BAFGHEFEBE@EAC@KICAI@C@C@IFC@C@C@EDCBC@ADCDGDCB@DC@A@GEECCAC@CDMFGBC@CCCI@E@AC@CDGDMDGDC@C@CBGLEDA@CAGCCAGAGAAAC@A@@BCB@BABC@C@C@EAACA@CACACACCA@CBC@ACCACBABAAC@AC@CAAE@EDCCACAAA@EHAF@FDH@BA@CACACEAAEAKGMEGC@@CAGCEACCCAA@@@CAA@EA@@CAABE@C@CAEBC@C@EAE@C@C@E@EAE@C@CBC@C@A@CBCBC@CBC@E@CBABC@AACAABA@@@MBEBAB@F@BADCBGDGDCBCDAFABADABA@C@AB@@@HABCHEHEFCFADAF@F@FAD@DADBDAD@@"],
                    "encodeOffsets": [[114690, 27591]]
                }
            }, {
                "type": "Feature",
                "id": "430407",
                "properties": {"name": "石鼓区", "cp": [112.607635, 26.903908], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@C@@@C@A@MAGAAPB@@@@B@@A@@B@@@F@H@BABCDCBA@C@G@E@C@ABEBGFKHA@@D@@ADC@EFUXINGLHFBD@FHDDB@DCHK@CBAD@JADCDGBCDAD@BDHLBJ@JAF@D@FBJ@FADDBHFFFDFDDBH@HCFCFCD@FABBBBBB@@@B@BADAFBDDDFBF@@@B@B@D@B@@@B@BA@A@@AACAAA@AB@BAF@DADCBADBD@D@B@B@@@B@DDB@BABC@AB@B@@BBBB@BB@@BDBBF@BBBD@BB@B@B@HA@AAC@QBIBA@@@A@@@@@@@@@@@@@A@@@@B@@@@A@@@A@A@AB@@C@@@A@A@@BA@A@@@A@A@@@A@@BA@A@A@A@ABA@@@A@@BA@A@@@A@@@A@@@AB@@A@@@@@A@A@@@@@@@A@A@A@@@@@@BA@A@C@A@A@@@A@@@@BA@@@@@@@@@A@@@@@A@@@@AA@@@A@A@@@A@AA@@A@@@A@@AC@@AA@AA@@@@AAA@@@@AAA@@A@@AAAAAAAAAACAAAAA@@@AA@@AA@AA@@@@AAAACC@@AAA@@AAAA@@@A@AA@@@@AAA@AA@@@@A@@@@@AA@@A@@@AAA@@@AA@@A@A@@AA@@AA@@@A@@ACA@AACA@@C@A@A@A@A@A@C@A@@@A@@@A@@"],
                    "encodeOffsets": [[115320, 27543]]
                }
            }, {
                "type": "Feature",
                "id": "430406",
                "properties": {"name": "雁峰区", "cp": [112.612241, 26.893694], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@HBNBB@D@@@D@@@@@@@BA@@@@@A@A@AB@@A@A@@@A@@@A@A@@B@@A@@@A@A@@@@@A@@@A@@@AB@@A@A@@@@@@@A@@@A@@BA@@@A@@B@@@BA@@BA@@B@BA@@@@@@B@@@@@@AB@@@@@@@B@@@@A@@@@@@B@@@@@@@@@@AB@@@@@@@B@@@@@B@@@@@@AB@@@@@@@B@@@@@B@B@@@@@@@B@DADAFABA@@@@@AB@@@BA@@@@@@B@@A@@@@@@B@B@@@B@B@@@BAB@@@@@B@@@@@B@@@B@D@B@@@@@BA@@@@@@@@B@@@@@@@@@B@@@@@BA@@BA@@@@@@BA@@@@@A@@@A@@BA@@@A@@@A@@@A@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@@C@@@A@@@A@A@A@@@A@@@A@@@@@AA@@A@AB@@@AC@GAIAE@KAGAGCAGC@@@@A@A@A@A@@@A@@@A@A@@@@@@BA@A@@@@@@@ABA@@@A@@@CBA@A@A@@@A@AB@@A@A@@@A@A@@@A@A@A@@@A@@@@@C@AB@@A@@@A@A@@@A@A@@@E@@@A@AAA@@@A@@@A@A@@@AA@@@@A@A@AAA@AA@@AAA@@@AAA@@@A@@AAAA@@@AA@@AAAAA@AC@AA@@@@AA@@@@@@AAA@@A@@A@@@A@@A@@A@@AA@AAA@@@@@A@@@@AA@@@@@@@@@@@@@@AA@A@@@AAA@@@A@@AA@A@@@@@@@A@@@@@A@@AA@@@A@@@@@@@@ACGDSDCDCDADA@CBA@@CAAC@AAC@EDEFAFAF@F@DDDFTCDE@FDJNDD@D@FBDDBDDFHPVFF@DABADDDFFXNXLFF@FAPCJAH@B@@@@"],
                    "encodeOffsets": [[115304, 27541]]
                }
            },
            {
                "type": "Feature",
                "id": "430405",
                "properties": {"name": "珠晖区", "cp": [112.626324, 26.891063], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@OIACGCCAA@GA@EBABC@GCAEAGDC@GAEG@EBC@C@CDCDCBCCCCCAEACAG@CBCJEJCPDRSQMDCCC@GDEJHDEBAFEBCBEDEDCBE@C@GACAECCEECCGCCCEECCCCEIAAAEACAEAEAEAC@C@E@E@C@ADO@W@@BCCIEEEAG@E@C@ACAC@EAEA@CAC@C@AAA@AEACCEACECGCIEKEIEGAK@M@UFOH[NQJGDQNBD@@@@@@@@@B@@BB@@@B@@@@@B@@@@@@@BBB@@@B@@BB@B@@@BBB@@@@@@@@@@@@@@BB@@@@@B@@@@BB@BBB@@@BB@@@@B@@@BB@@@BB@B@@@@B@@B@@B@@BBDB@BBBB@@BB@@B@BB@BB@@@B@BB@@B@BB@@BBB@BBB@B@@@@@BB@@B@B@@@B@@@B@BBB@@@F@@@B@B@@@B@B@@@B@@@BAD@@@@@B@@@B@B@B@@@B@B@@@B@B@@@BAB@@@B@B@B@DA@@B@@@B@BA@@@@@@B@B@@A@@@@B@B@@@B@@@B@B@B@B@@@@@HDDBBHBH@LBFBJ@HBD@@A@@B@BB@@B@@@@@B@@@B@@@B@B@B@@@B@@@D@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@B@@@B@@@B@@AB@@@B@@@B@@@@AB@@@@@@AB@@AB@@@@A@@@@@@@@@A@@@@@@@@@AB@@@@A@C@A@@@A@@@@@A@@@@@A@AB@@A@A@@@A@A@@@@@@@@BA@@@@@@@AB@@A@@B@@@@ABEBCBCBA@@@@@@@A@A@@@@@A@@@@@@@A@@B@@@@A@@@@@A@@@@@@@A@@B@@@@@@@@A@@@@@@@@B@@A@@@@@@@A@@B@@@@A@@@@@@@ABA@@@AB@@AB@@A@@@@B@@AB@@@B@@@B@@@@@@@B@BA@@B@@@B@@@B@@@@@B@B@@@BA@@@@B@B@@@B@@@B@BA@@B@B@B@@@@AB@@@@@@@@@B@@@B@@@B@D@B@B@B@B@B@DB@BD@BDB@BB@@@B@@BB@@BB@B@@@BB@@B@BB@@B@@@BB@@@@B@@@@@BBB@BB@@@@BBB@@@B@BB@BB@BB@@DDBBBB@@@@BBB@@BB@@B@@BBBBDBBBBBBBBBBB@@@BB@BB@@@@BB@B@@B@@BBB@@BD@@@B@@@BB@@B@B@@@B@B@@BB@@@@@B@@@@@B@@@@@@@@AB@@@@@B@@@B@B@D@BAB@@@@@@@B@B@B@@@@@@@B@B@@@@@BA@@B@@@B@@@B@@@BAB@@@B@@AB@B@B@B@BAB@@@B@@@B@B@@@BAB@@@B@B@@@DA@@B@B@B@@@B@@A@@@@@@B@@@@@@@@@@@@@B@@ABAJ@RBD@BBFJH@@VJ\\FPALEB@DCBAHSDKB@@ADODCDEBEDCDEFEFAFCFAJA"],
                    "encodeOffsets": [[115442, 27624]]
                }
            },
            {
                "type": "Feature",
                "id": "430408",
                "properties": {"name": "蒸湘区", "cp": [112.570608, 26.89087], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@@@@@@ABGDIBO@EEEWKWMEECCBCBA@CEEOUEGCCCAAC@E@CCCIMECO@OEIAEBEBC@EAACCE@@E@CFBHHV@DEFGFKAKGIBCBCFABGFAB@DBBBB@BCBCB@BBBHAF@BBBBBDABED@BB@HANCD@BBBDBBDAB@D@DBBBBB@B@J@D@BHFBD@B@B@BA@ABC@CBAB@DHP@FAFAD@DBBBF@FADEHCFCBE@CBAACBEBCBAD@F@FDBDDF@F@DE@CBCF@@@DDDD@H@LD\\BDF@DAJGF@BDBFAFBDB@B@FBDDHBFFDB@@HKJMVWFED@BC@@@CB@LGHEFABAD@F@H@D@B@DADCBA@A@G@E@@@AB@@@@A@@A@BO"],
                    "encodeOffsets": [[115304, 27541]]
                }
            },
           /* {
                "type": "Feature",
                "id": "430422",
                "properties": {"name": "衡南县", "cp": [112.677459, 26.739973], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@RMHCRI\\MPGVEN@L@HBJFLFJFHDFDBDDFBDBFB@BBD@D@DBB@BF@FBDBDD@F@H@FBFFDJAD@@@XCP@B@D@F@F@DBDBFBFBFBDBFBBFJDDDDFFDDHDDDFFDDBFBD@H@DAFCDCFAFADEFABCFIGCF@HDDCDRNQTOCIDIFAD@DBHBDBFDDDDADCDCD@D@DAD@FFHHBD@HCFBDB@HADAB@FHBB@DBHDBDPJDAH@DAF@D@AEAE@CDAF@F@DBFFHDH@DCDEDGDGHCDEDCBCBCBCBC@EAE@C@CBCDCHC@CCCEACC@EDAHEDEBEBCBCFAF@DADABAD@D@BACC@G@@BGDEDAJADA@C@gAE@ABABAD@BBDBFAD@DCFB@@B@B@@B@BBD@@@BDABAB@BABADC@ABAB@@BB@BBB@@@F@F@F@BBBFDD@@BBB@B@@BBB@BB@B@@@@C@@BAB@BBBB@BDBBBB@HHHFDBFFFHBFDFBNAD@DAD@F@DBF@D@DDJJDDBDBFBFBF@F@F@FDDFDFFDDDHFFBDBFBDBJBFDDBFBJBDBFBFDFDHDDBHBFBLDDBJFHBF@BABCBEDEBCFAF@D@H@F@DCDCFAHBDBDDDDFAFAF@F@F@DAH@DADCFCBC@E@E@CBE@CAEAGACAEAECAGECC@IBCAGBEFEDCDC@EAC@E@CHEF@DAJAFCFCAECACCCCEAICCEACBGBG@QCCAE@CDCFE@CAACECA@ACEDIDCJCDBHAFEBCBEDCBE@CBC@GDEDCBCACBAAC@A@CBA@C@C@CAA@EAEDGBCHAFBHBFABABE@EDGDAD@JBJ@D@BA@EACCAICCCACAEAEFCF@HAH@JCBCCEEABCBCDCDCJCFADCDABEAGECGAE@C@EAC@CDGBCBCDCFADCBABBB@B@BA@C@CCECCCAC@EACGCC@G@CBEDGBEDCDC@AD@D@BCBCBE@GAEAECMCYAC@E@ECACACGCCACACCECECGAADGDCBEBCBABEFABADCD@F@DG@EBEBG@ECCCCEI@EBG@IDGDE@CBG@EA@A@ADCDAHEDCBC@CEAGAACACDEFCFADEDC@CDAFABEBC@GDCF@JAD@FCBCFA@EAC@CBG@CAOBCACAE@E@CAEAECCCCECEACA@CCCC@E@EAEBCBE@IDEDEDCDCBA@@BCFAFABE@CEAAACC@EBE@ECECCEECCCECEAG@EBEBGBMBAD@DDDBBDFBD@F@H@N@`@J@HADEFCBCBCBEDEBGBEBEBC@G@E@CAECEAE@G@CDBDBHBFDF@D@DEDCACCEAECACEAC@GEAE@C@C@CAGECEAGBCBCAAEBEBEAEEEAA@EDCAGCECEEECGCAECCCEACAEE@CBE@CBCAE@CGIGAG@C@EAGAGCCACC@EBC@ECEEDGAEAAAA@CAMEC@A@@@@@@JAFABABABA@EAA@A@CBABAB@BBF@DAFEBE@C@E@EAE@GACAC@CAECAC@C@EAEE@G@E@E@DJBFBHBHBD@DAFEBCDE@C@E@ECEAEECCGEEEECAAC@CBCDADCFAFAD@DCBG@GACAE@QAGAG@EAC@GAG@GACAEAEACAECCACAE@EACACECACEACCCAEEEEAE@E@CBEBC@EDEDEBCDGHABGDIBACCECG@KBG@CACCEIIGAIAM@KAGBEDMDIFGNGPCLAFGLEFEBGAECECGKKMGKKKEMAGAEAECAGBEFINEFGFMHODQDM@KCMC@BABCDCB@D@@@B@DDBFBD@HDBBFH@DFLBF@F@DADEBCDCDC@CAE@ABBBBD@BABAAGGAAABADAJC@OCE@EFCF@DFL@BCBG@C@A@ECA@A@CHABABA@CAAIACC@G@E@A@EDIHKDEDABBFDFDFHL@D@H@L@F@BCFCBC@IEECC@A@@BAD@D@D@JABG@C@CBABCHE@CBADBDABABCCC@C@BBDPBHABC@IACBCB@B@B@BCB@BBD@B@@E@@B@BA@AAA@AAACA@@DB@DH@BAF@DBDADCDCBAB@D@BBBFFFBFCDAP@HCF@J@D@HFF@FBFBHABB@DD@D@D@DDDHBBEBBBFH@BGF@BA@A@CB@BBBCHAHI@EBA@ADABAAAAE@ABBJBB@B@DDBDAFAHB@DABEBBBBBAFBDBCDAB@DBD@DFBBHA@BCFABADAHCDI@EBGBAB@DIDCBA@ECC@CDADBBA@CACACBGBM@EBAD@BBB@DEBCAE@CDGBCBEDEFGFAB@DABC@IEEBEBGAAB@B@JADADIDE@EAECA@CDADGFABCD@FEFGFGNCHCBCDAB@@@D@BB@BBB@B@BBBBDBDDFBHDDB@@HDNFLHFBBBDFDBDBB@@ACG@EBEFGB@BBBDDDFCF@BB@DBDD@BBBADADBBDD@DAB@DDDBDBDBB@BDFBD@D@D@BA@ADA@AB@D@BBHBHBDBHDDBB@FCHKDAD@D@HCNCHCDCD@@B@FDJDDD@HANEDCD@DBFDHFB@D@@CDAHCDCBCD@DAFCD@D@D@JED@D@J@DBLJD@FBF@FAFEHGBE@ABAB@F@DBFFDDDBB@D@D@BDBBDABQBCF@BAAC@CBAF@DDLDBB@B@DBDBBH@H@F@DBLBDBBBADCDAJBBLJ@BCFBBDDBJBDBDBBFBFBBBBD@DADA@CBDBFBF@JAHCLGDCBIAE@CFEFCDADBFBB@DADCBCDABADDBDBBDD@BB@B@BA@A@ABCDABAD@B@BBBBBD@DB@BBDAF@DADEFGBC@EAEAA@CBCBE@EGO@CBADAD@BAB@@A@A@AACGE@A@C@I@AAAAACAC@A@CBAAACAAC@MDGBA@@AFCBAACAAAAE@GBAA@ADADA@AAAAA@CBAHEBADEDAJALHLBHEFE@CGUAGDEF@@@DFBDFBD@FAFAJBPFP@F@DCESCC@C@EBEBEFEFCD@BBD@BB@DB@DAB@BCDCDCTCHC"],
                    "encodeOffsets": [[115286, 27418]]
                }
            },*/
            /*{
                "type": "Feature",
                "id": "430423",
                "properties": {"name": "衡山县", "cp": [112.86971, 27.234808], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@D@FBD@B@B@BA@A@C@A@ABAB@DA@CBC@AB@BADBDBBBBDDDDDB@D@B@D@@@@@@DAD@@AB@BBBFDFDFDDBDDBBD@DAB@BABABABCBCB@FAD@BBDBBBBB@D@B@D@DBDDBBBDBB@AD@FABBB@@BBDADAF@F@DBD@@@DDDBDFBF@DB@@@@B@@DBB@FC@@D@B@D@B@B@B@@@B@BA@ABA@@B@B@BBBAB@BC@ABAB@BBB@@BDD@@BBB@@@B@B@DABA@AA@BABCDABCDADABABAB@B@DBBBDDBBD@D@B@B@@ABA@AB@F@FBD@F@F@B@@ABA@A@AACACAC@A@EAAAE@AAACAAACAAA@AA@AABA@C@CAA@C@AAABC@ADADADC@ABC@A@C@AB@B@FBDBD@B@D@DAFBF@D@HAFCDAFCDAD@BCDCBABAD@DBBFDBBBBBD@FAF@DAFAF@DBB@DDDDBBBABA@CBA@A@@DA@@DAFCBAB@@@BABC@CBA@CBE@C@CAA@A@ADADADADABCDEBABCDABABA@@B@DBFDB@HCFA@@@CBE@A@CBA@C@C@CAAC@CAAA@ABADCBABAB@D@BBDDDBBBDB@AB@BABCBCD@D@F@F@D@B@@B@BADADABBB@DBBBFBDB@DBD@F@FADBD@D@F@FADAD@DADAB@BBBDDBBBD@D@F@D@D@D@HBFBFBFBF@DBD@FAHAH@FADAD@B@ACCIBGFIBADELKBAJKJSJSBU@C@CAEIKCCECECKEUKEEGKEEECAAKEGEKKCEOM_YQQGQAK@EDKHMTUHMBCBE@@@MAKIMKIMCE@]@UGCA@AGGEQ@MHIHILIBEAGEEA@KCM@OBEBoNQDI@C@KAGEIOEU@@@OL_NgNYHGNIDCBE@A@GCGCCCCAAECCCEAGAEACAGAAAC@E@CBG@CBBJBF@D@DDFDF@BB@D@D@BAB@@BB@DD@B@B@@@BA@C@A@@@@B@B@BA@ABA@@@A@E@A@@D@B@BDBDD@DADABAB@@A@CBCAE@GAC@AACCAAEA@AABA@@@@B@B@DBJ@D@B@F@B@@BB@@BFABAB@BCB@BBBBBBBBBHHDFBD@D@T@B@B@@@@ABAB@BDB@@BD@BAB@@ABAAAB@@@BBBBB@B@D@B@BCFADCDA@A@A@A@A@AB@B@@@D@BAB@DA@A@C@A@ACAAA@A@A@ABADABAFCDADCDCDABC@AAC@CAECECCACCA@AAABABCBCDABCBABC@C@C@CBABABCBCDCD@D@B@BBBBB@BBF@BBF@B@DBB@@BBBBB@DBD@B@FAD@B@DBBB@BBBBB@DAD@BABEBCBABABAB@B@D@B@D@BBD@BBD@B@D@F@F@D@D@BABADCBABABCDCDABABA@A@A@@B@BB@@B@D@B@BABABAB@DAD@BHDH@FDJFFBHBJ@J@F@DGDCBCHBF@FBJBN@PEPADEDE@ABCFBDBDDDDD@BABGF@BDDBFDF@DCLCF@B@FB@DCBA@ABAB@B@BA@ABBDBBF@DD@H@FKLCN@NCBI@C@CFCLBFBBLBV@DB@FCFAP@FBHBJBDLBDJHHBPENMJSHW@UHMTARGDKAQIIAC@EF@DCBC@KCIE@IAGGEE@C@@B@LGFI@I@ISCOCCGAAAKC@EAEIEOBK@M@AE@EJGHIFCjCPEDA@IAIMCMFE@CAAG@K@K@EGGM@M@GDIHOHUFM@UGEEA@C@C@E@ABCBC@A@C@E@C@C@CB@BAB@BAB@@AAC@@@CBABCBABA@A@@AB@@A@@BCA@@@AAA@C@C@A@A@AD@@ADAD@B@D@BB@BBB@B@@@@B@B@B@B@DBBBB@B@B@@ABA@CBABABAB@BABBB@BBBBDBBBD@B@B@B@BA@ABABA@@B@D@B@BBB@F@B@B@BC@CBCBCDCBAD@B@D@B@B@DBB@BABA@ABCBABA@@BAB@DCBC@@@AB@@ABCB@B@@@B@B@B@BA@A@@@AB@B@BAD@BBB@@BB@@@B@@@B@@@@B@D@@@@B@@@DAB@@ABA@@@C@A@A@ABA@@@C@CBA@AAA@@AA@@A@AA@A@A@ABABA@ABE@A@A@A@@@ABAB@BCHA@@@@@CC@AA@ED@BA@A@@DB@DD@BBB@@@D@B@BBB@@BB@BBBBBB@@B@BB@B@@ABC@ABAB@D@B@@A@@@A@@B@B@BA@EB@@@BB@AB@@ABAB@B@B@BB@BBB@B@B@D@BAB@D@BB@BBDBFBD@D@BBBB@B@BABAF@B@B@B@@AB@@A@AB@@@BB@BB@B@BAFABAA@@ABADAB@B@BBBB@B@BCBAB@DB@@BBB@B@DB@BAD@@@@B@B@B@B@B@DAD@@D@BABCDADCBAD@DBBBBD@DBFBB@F@D@BBDB@B@D@DAB@BAB"],
                    "encodeOffsets": [[115223, 28088]]
                }
            }, {
                "type": "Feature",
                "id": "430424",
                "properties": {"name": "衡东县", "cp": [112.950412, 27.083531], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@DADA@E@ECS@IBOBKHGNKNENEBCAA@CAAAA@AAA@ABA@CBCBCBCDCDADCB@BABABC@ABABAB@BADABABA@AAAACCAEAAAA@@@AAAA@CBA@C@ABC@CAC@@@C@@BAF@D@DADADADABCBABA@A@CAC@C@AAAAAAAA@@@A@BCBABABC@A@C@C@C@CBCBC@CBABABAD@BABABABAD@DAD@B@D@DABABABCBABCDA@ADABABA@AB@B@D@DA@ABA@AAA@AAAACA@@A@A@@D@BA@AA@CA@A@ABABCDCBCFEBCBA@A@A@@AAC@A@AABABADADAB@B@D@@@D@BCBABAD@DCDABABA@AB@AA@AC@@@@@@ADCBADCBC@ABA@A@A@CBA@AD@D@F@DBB@BBBBBD@FBDBFBF@FBFBD@DBBBBBFBDDFBFDDBFBDBBBBB@B@BAB@@ABA@ADAD@DCBABCDCFCBCBADAB@DAD@BBLHDBBDB@D@D@DAD@H@RAHBFAF@F@F@D@DBD@B@D@BABAD@D@FBDBD@DBD@B@D@BABCDEBCBADC@A@A@@@A@C@A@ABADADADCBABC@ABABABABCBABABA@@BABA@CBCBCBABE@@BCBABAB@@C@ABA@CBCBA@C@C@C@CAA@CAC@CA@@AC@ABA@C@E@EBABEBCBCBABA@A@AAACBC@C@CBAACBA@@C@A@C@AAA@@C@AAA@A@@AAAAA@AAA@@A@A@C@C@A@C@AAA@AA@A@A@AD@BABABA@A@A@@@@A@A@A@@@AA@C@A@AACAEAAACAACAACCA@C@GBEDCBADCBCBCBCBC@ABAAA@@A@A@A@A@A@@@AA@C@C@A@AAAAA@AAC@C@A@AAA@AA@AA@AAC@CAAAC@@AAC@ABA@ABCAA@AAAAC@C@A@C@AAC@C@A@CBAB@BAB@B@B@@@BA@ABCBCBEBCB@DAB@D@BABABCDADCBADAB@BABA@A@AAC@ABC@ADA@CBABA@AACBABA@ABAA@@AAAA@@ABAB@BA@A@A@C@AAE@CACBAB@B@HAJ@DBD@BBB@B@@@@E@CBABCBA@CAA@@AA@AA@@A@@B@@AB@D@B@D@B@B@D@BABABABAD@BBBAB@BA@C@A@A@AA@EAC@EAC@AAA@AC@A@CA@AAACA@AAB@BABAD@BABABA@A@ABCACAA@IAC@AAE@ECGBCFCBCAE@E@E@EB@JCHEFG@ADCDCBCDEH@F@FBDBH@H@H@F@D@FBJADC@ACECE@@@EEACCGGECAAG@IACCACBCBE@EAEAEEAECEAG@CC@ADABE@EAGAECCEBCBG@CAACBEDEBCB@@GBGDELIFCHKJKBE@EBEFCFABEACAC@EACGECAE@CAEACAEA@CCAEBAFCDKDABADBB@DADE@GBGDCBA@C@CBA@@BBB@BBBCBECA@C@I@G@ECGAIACBE@MBC@G@ABABAFAFADGBC@E@CAA@AC@GAG@A@G@I@G@ADA@C@CAC@@BEDCFABC@ECCEAIAC@GCCAG@EBGCGAEAC@E@C@E@EACCG@ADCDCF@HAD@DAFCDAFADEFGBCAIDCDCJDF@BDBDFBB@DEFCD@DBFDD@RAHAHBDDFJDFBDDDDDBBFEDEDIBCBE@GF@D@FBD@FCDCDEFAFBHAD@JDDHFDBBFBFBDBHBF@DAF@D@F@FADEDCDCBG@CBE@E@E@EBEBCCCCCAGAEBCDCDE@G@C@E@EBADCFAFADABE@GAIECAKCEAGACAGCECECEACAIAEACAECIACAEACAEAGECCECCECEECE@E@E@EAEACACAICCI@C@CAE@C@EBC@CBCAMCEAEEGEECAGEGGA@AACA@AAAAAA@AB@@@D@@A@A@@AAA@AA@A@AA@@CCAEAAE@E@E@@@A@AAA@@AA@AB@BCDABABA@ABCB@A@@AC@A@AA@A@@@EACDC@EBCAAAC@ABAB@BBF@h@DCBIBCBCFAH@@@HDDABC@C@ABCBCBE@EBADADAFCFGFCB@FDDFBDD@DGDCDAD@D@DBF@FADADADADCDCFGDCHCHCFCDG@GCEECAE@E@CB@DBFBFBBHBDBFBHBFBDDFDBBDDDDDH@H@BAFCDMJGHMZMhK`@P@@FVJPHFLBD@J@RCpMFAPAN@LDB@FFBHAFKJGJGJ@NFRHH@BDBVH^@F@NDLJJNBL@N@@AFADGNSVGNCL@FBLHRRR`ZPNDFLLHFLFBBFDFFHLFFVLLFFDFDDDJLBF@D@DAVITITILABKLCFABEJAHDJBDFLDHAL@J@VAFAVAPBF@FFFLJRFXFHBnRTBNABA"],
                    "encodeOffsets": [[115708, 28097]]
                }
            }, {
                "type": "Feature",
                "id": "430426",
                "properties": {"name": "祁东县", "cp": [112.111192, 26.787109], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@D@BA@BBAB@B@BBB@B@B@D@D@B@DA@@BA@@B@@@@BBFBB@BB@BBB@BBB@B@BBB@@B@B@BBB@DBB@BB@B@B@B@@@BBBBBBB@B@B@DBB@@BBB@B@BB@BBBBBB@BBBB@BBBB@@@B@B@BBBBBB@@BBB@@AF@@@@B@@AB@@ABAB@B@@AB@B@BABA@AB@FA@ABA@@B@B@B@B@@@BBBAB@@ABAB@BBB@D@F@BBBBB@B@B@@AAAEAAA@A@@@AB@FBB@D@B@B@BABBB@BBB@B@B@@@B@@@B@DABA@CBCDM@AB@BAB@D@BAB@@@BCBABAD@D@FAB@BABCJ@D@BABABAD@BDBB@D@DCF@B@B@BBBD@F@DABALOBA@AEECG@EAE@A@AB@D@D@BAFED@BBDABATMB@B@DBFBDBH@B@@AHAD@BBDBBBB@DBB@BA@CBABAD@DABC@CAE@C@ABABBB@DD@@B@@A@@@@@A@@@@BANCFCDEDCBA@CACCCAEBABEBA@@BGBQAG@EBG@C@AAC@ABG@C@A@EAEACDEFCDAD@DBDFDFFDBDDBFBD@FA@@B@BBBBDD@BBFDJDHBBB@F@JDB@DAB@DBFBB@BADADADCD@DBHBBBBBBHD@BBD@@@JAD@BABC@CBC@CCACCAACA@AACF@JBD@FBDBD@@@BAD@D@B@@@BCACBC@CBC@E@EBEBCDEFEFGDGBA@G@@BAD@B@BABCBABEDCDAHCHCDABC@A@EBAFANA@@B@BADBBBD@BADAF@D@DAD@DADAB@D@D@DAD@F@FBF@D@D@F@FBD@D@FADBD@F@BADB@@FBB@DB@@B@AAAAA@A@AAA@@A@C@@BADCDADGHMHEFE@EDCBAHEBCDCB@FDFBF@JCBCBC@I@ABAHBFAFAJFD@BA@CBAHEFEFCDAHADCF@DBFA@CAA@ABCFAN@HADADBDBB@AABCDCD@FDB@DAJC@CBAHAFAJ@DCBGBCBADE@AGBAACEC@CAA@CBADACBEAAAAFABA@CGAEBCBCA@C@AAAAIBAF@BBBBBABCB@FAJ@BGDGAA@ADAB@B@@AHE@AEGAAFAAACGCCC@C@C@@CAAGBEAEAE@GEC@I@E@GDO@CBEDEAEEAA@A@CBADADCBCAC@CBE@ACGA@@CB@BDBBB@BBB@@A@AF@@@@AAC@ADA@A@A@ADADAJBD@BAAGCOAAD@D@DDBABAACBCDAF@DGBADAD@H@BA@I@C@CBC@AB@D@FDJFD@DADE@A@E@K@G@CGKCECEAEBAFCLCJGFCB@F@H@D@BDBJDBB@BABADGB@B@FDB@D@H@DA@AEK@CDEFEF@PDD@BIBCBABBHHBBBA@AACAABAF@DBD@DCDCFABC@C@EAEEK@CEGAAGCC@EACA@C@A@@@CDADCBA@AMCKCEECGAEBIFKHQDMDKDG@GBKCEACCECGGEKGQISGSMYIQCQB[DOHIDE@E@C@IACAE@EBEFCDAH@HBFBFJLJHJFHDF@JAHAJBJDFFHLBR@RCFMNOJKDKBEAKCMGSKQMOKKKECACEECEECECACEBC@C@AB@BBFBBBD@D@D@FBD@DCD@B@D@@@BFBBDFD@DBBB@D@FABDBFCDC@EDA@GB@BCD@BB@FBBBDFBDBBBADC@@BDB@DA@@B@FBBD@BA@@B@BDBFBBB@B@BCB@BBDBB@B@@ADGBAB@BB@DDBDAFAFA@CBEDCBA@A@ABADE@K@E@EBEFBDAF@B@BD@BBBBBDAJABBDD@DBBBBDBF@B@DABCBC@ABGFCBA@CAABEF@B@BA@A@EAC@@BABIDEFCBBD@FD@@BADEBCA@AABABADC@E@ECAE@ECAA@ABA@CAACBK@CAAAAA@CFGBABIHEDKBMBODKEECC@CBQHEFEBCAAAGBAACAG@I@AAEBECCAEACAAA@@@A@A@CBABCBABADCDABABC@C@CF@BBBBHBACAABADAF@BABC@CAAACAGCKEICCCCCBCDEFEDAB@BAF@BAFADC@AB@DAJAD@BA@GBGBIDEDCHADA@ABCDCDCBADAD@B@DBD@BADADCBABCDCDAD@B@D@F@FAFADAFAFADCDADADAF@DCFABADGDCBAB@@@@ABCDADADADADAFCFADADAFCD@D@D@DBD@D@D@FBDEBEBE@G@CBEBCDADAD@DCDABCBCDCD@BAB@DAFCB@BA@CFABA@CDCDAB@D@DADAFADCDCDA@E@E@CAEGGGCCCAEAGAE@C@C@E@ACCCACC@A@CDA@EBC@@DBD@BBDB@FB@DBD@F@D@FABC@E@G@IAGAEAAA@AAEACCCEACAGAE@EAABCHCDGDCD@BBLAFC@C@E@ABABCAAACCC@E@EBABABCBCBAB@DAD@BBF@B@DBDJDDB@@BD@BABA@CBA@@DFDBBADABC@A@ECEECGC@C@G@ABCBCD@BAHCDADCBABCBEBC@AACCECE@C@AA@C@CDCAACAC@CBCBAACCCACACBGBCDEBEFEDC@A@CBAACAA@E@C@E@EACCAC@C@C@CAACEAA@E@CACAC@CBC@E@E@ABC@AC@CAC@AABADA@AAAC@C@CACCAC@CAACACBC@CBEBE@CAA@IGCAA@C@A@A@ADCB@BCBEBABC@@DADABI@EBC@ADAD@FAD@DEBE@CAS@I@CBAD@F@BAB@BBBEBADAB@FDFDH@@ADABCB@DABADB@BBD@BDBBBDBDBFCB@B@D@DBD@DDDBBF@DBD@DDDD@FBF@HBFBBBBD@D@BAD@BAB@BB@BBFBB@@DBB@BB@BBDDDDD@B@BAFINCH@FBJBF@DMDCBCDCDGF@BBBHFJJBFBFBFBF@FBFBBDBDBBDDADABCBADAD@DAFADAF@B@DDD@DABAFADED@D@FBDBDBDDBDDD@@H@BAB@BBBBB@H@DA@@@BAD@BDHDFBDHT@B@BGFCFBBBDABAB@BA@ADAB@DDD@BBBFBDBD@BDBH@B@@DD@BADAB@BB@BBDBBB@@@BAB@B@BB@@BB@B@B@@@@@BB"],
                    "encodeOffsets": [[114350, 27682]]
                }
            }, {
                "type": "Feature",
                "id": "430481",
                "properties": {"name": "耒阳市", "cp": [112.847215, 26.414162], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@DIAG@GAC@EACCCE@CCEAEBGD@@EAECGIKKEI@AFCFCDCFCFADAHEDEAI[YOMKCKBONEBC@EE@G@@AAAC@G@EAEAEBCBCDCDEDE@C@CGCCACACCAKBGDCFEDADADE@CEAACBEBEBCFEDEBAACAAE@E@CAAACBCBCCCAAAG@GBCBCBGAAACCCCIGACBEDC@EAACEAC@EBEBAACE@EBCBCGACE@GBEBEBGACACEACACCECCCCAAAE@C@EDC@E@CBCBEBC@CACG@CBE@E@EAC@CBCDCBC@G@EACAEACAEDCDCDEBE@CAEAEACEEEAAAEBGDEDADCBG@EBCBEDEDCBECCCAAGBCBCBE@G@A@@ACACBEBQAC@CAEA@AAABABABAAAAAECGEC@@GAECAAAECAC@C@ABAB@@A@CFEBEBE@C@ACMGKCGAG@E@EDMHE@E@EBA@ADAHGHKFMHO@AE@W@IUMGEEB@@GDCDEBCDCBICCAC@GEEAAB@FCBEBG@GAGAEBEBEBEDICEAE@CDCDEBEAEAEBADBD@D@@BNANAL@DGFIDG@GCCIIICAGBBBADBF@FBHAHC@E@ECCIIKAGDEJCN@DCFCCCA@@ABCEAEAC@ACAE@CBEAA@E@ICAG@E@IBCB@FADC@A@GCBEAGBCBGBCACCCECE@IJ@LAHCBEBCCACGOEAEACCEGCAC@CH@FCBABC@CAAC@C@CACCEGEICCAE@ECCAABA@AB@D@B@B@@@D@D@@BDDD@@@DB@@BAD@D@D@BBDFF@B@B@DABADAFAD@BCDABCFADADAD@DCFAD@DADAD@B@BAFAFABCHCDEBGDGFEFAB@D@FADBB@DBB@DBFBFAD@BAFABA@ADAB@B@DBBBDDBBDBBBD@DAD@DAFCJCJ@FAFADAFCBCD@BAD@D@BDBBDDBHFDDBB@BADABC@A@OBEBA@ABCFADADEBADCBAD@DAD@DBDFNBDDF@D@DBBBBDBDDDDBDAFCJAFABABA@AD@FAFCFAF@FBDBBDDDDF@BBBD@BAD@D@DBD@BAFCFAD@F@BBDDBDFDDDHDDHHDFDDHDF@BBBBBB@D@FAFBH@HBHDLBDDDBB@FCFCDEBEDCBCBCD@DBDDDDFFDBFBFBDDFBFBHFHBD@DAFAF@DAJ@F@DBBBD@D@FDJBH@F@H@FADADG@MDE@E@C@C@GACACAGCCAABA@@D@BBDDDDDDBDBDBDAFBD@FDBDBFF@F@H@F@BF@F@DBDFDDBD@DBHBF@FBF@D@F@FABE@CAE@ABABADAB@B@FBB@BABABABE@I@@@@B@D@NFDBB@BBFBHBFCDF@FAD@FDDDBHDHBFBD@H@HBHJ@DBFAD@DAF@DFFDBFBDDFDDBDHFFDFDFBHCD@FBBFFBFAFAFBFDBDAHAFBFDBH@D@D@DBFHFD@FBBDFDFBDDDBFC@C@CCEAEAGACDCH@F@FBFDDBF@H@D@FAFAHAFAFCDADADAFEBC@G@I@_@M@G@EACCEAACC@CBCNAHAFAFAH@FBFDDDFDDFFDFDF@FAD@BDBBDFF@BABEDE@AB@DADCFCFCJCF@DAFAFBF@D@DD@DDBFBFDDDDDBFBF@D@FBFBDADBP@DAH@DBD@FEBADEDC@IBE@CD@HADAFEBCB@DCDCFEBEDCFBDBDHBFB@DADCDGFCBCD@B@BFBH@DAF@HCJCH@FAJ@DFDDFDH@FAFAH@@C@EDCBCBAFEBADAFADAHCBCHBFDFDDDDBDBHDBDBDFDF@D@ZBNDFDFBHBF@DADA@A@CBCD@DCFCHAFCDAH@D@HDBD@FBDDDFDDDD@B@@A@AAABADABCDEDCDAHADCD@FBD@F@HBFDBHFEDEDABEDAF@DBFBD@DBH@FADAAG@EBCDC@G@EBCBGBC@CAE@GACACACAEACEI@C@G@CDEBEBEBCAEACBEDCDC@GEA@C@G@GAE@EAECKA@@G@G@E@GACCECC@@CCCCECECCECCAE@C@E@CDCFCDCDABCBEBCF@FADADABEDCFADABC@EBCHAF@F@F@FBFBFCDADEDADEDCDCDGDA"],
                    "encodeOffsets": [[115946, 27123]]
                }
            }, {
                "type": "Feature",
                "id": "430412",
                "properties": {"name": "南岳区", "cp": [112.734147, 27.240536], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@FFVHN@VEPGJGHCN@N@HH@F@L@LBHDBF@NENDBJ@JCBOFiDEDGJIH@FBFN@L@PAJFBF@FLDBBHBDDDPJTJ@J@HE@K@AD@F@HFBH@JJFLDD@DA@CFED@JBRJLBHCBQNSVGX@TGNIFMAOGGCIKAACAIAG@EBODE@ECAU@KAAAAEDKDED@J@DA@MDMLK@E@GCCE@AAACBAB@@A@ABABAB@DA@CEAA@E@KDCDE@ECCAACE@AHABC@CCCCCAEAAD@BCFCFOBOFM@IAEAE@GAADCDCHE@I@I@GAEAIEECG@GC@@@D@BBB@DBB@@ABAAA@C@A@EBABA@C@C@CBCBCBCBCBCBABABABABADCBCDADE@CBE@EBEBE@A@A@C@CAA@A@CBABCBCBC@EBE@EBA@ABABB@@BBBB@D@DBB@BBBBB@@B@BABAB@BA@ABA@"],
                    "encodeOffsets": [[115277, 27898]]
                }
            },  {
                "type": "Feature",
                "id": "430482",
                "properties": {"name": "常宁市", "cp": [112.396821, 26.406773], "childNum": 1},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@ABAB@@ABA@@BG@A@AA@I@GAGCEAAGBEAEKOEOFID@DBDBBDDH@JBHBTTDF@DCAA@A@ABAD@@AA@A@AGBA@E@C@@@EBABA@AB@BA@C@A@ABA@AA@@@@@DAFEBADADAFCDCD@D@FBFBFBF@DAFAD@FABCF@DADAH@FADCDA@ABA@G@EDIHCHCL@JCHEFC@SBGAEAAC@G@GEKCGCGA@@CBE@C@CDEDC@CAE@C@C@E@CDGDEBCBECCCAE@CDAD@D@@A@E@CAEECAEECCCEE@ADE@C@EACAE@E@EBG@AC@E@CACCCE@EAE@EACDAFCH@BDJAJCJA@A@AAAAC@A@C@CAAA@AACCAC@CAC@ABCDAB@DAD@DBDDF@D@DCDCFABCDCBC@C@E@CAE@C@CBCBCBCBC@CACAAACCA@CDABCDABCBE@CBC@@BAB@D@DC@A@CAGCCAE@ABABE@AACCC@C@A@CBC@C@C@ABABABAB@FAF@FAFADCDABC@C@CCAAACAC@CAC@E@CCCECCCCCCCCCAC@CAE@GACAECCEAEBEDCBEBEDE@C@EAGCACACE@GBG@GCCAAEDIBCCEAEAGAECCAAEAA@CBCB@F@BA@AAACAAA@@@ADBJ@DABE@A@A@A@ECECCCECCCCCEAEAE@C@A@A@@C@G@AAAI@A@A@@F@BABA@@AA@@@AAACCACAEACAEA@AAB@B@BBB@B@D@D@HAB@B@B@BA@C@A@ADEF@BAJ@HAD@BA@AA@@AA@@A@GBC@@B@B@D@DBDBDDFBDCDC@CACAE@CBCBEBCDCDCBADAFCDADCDAD@D@BHDBBDDBDBD@D@F@D@DAFCD@DAD@F@DAHBBBBDBBDBBBD@D@BBD@FBDAH@FBH@F@FBDBDADAD@DAF@FADBBBDBBDDDBBFDDBDBDBFBD@F@D@BBDBB@FADADCDCBC@CAAA@AACACAAC@ABABADABE@CAEACA@ECCCAAB@D@B@F@DAF@F@D@D@F@BBDBDBDBFBD@F@DAD@BCDCDC@EBEA@AAAAB@B@D@BA@EBABC@C@CCAAEA@BABAD@BABABAB@DDF@F@J@BAD@B@DDDBF@DABABGDEBA@ABAB@DBD@@@D@B@D@NAB@B@BBBB@DABCBADCDAD@BBBB@BCDAB@BBB@BBBCFAD@BB@BBB@B@B@@DABAD@B@DBDADCBC@EB@BBFEBAB@D@DBBDBDBD@D@D@B@DBBDDBDDBDBDADCBCBA@ABBF@FABABC@CB@BBBDBDBBDBBDBD@D@DB@B@FABCBCDCB@DAF@DBBDDD@D@F@D@BBBDDBBBDADABABCDCDADCDAB@DABA@CACBCDCBGDCFEFAF@DBJBD@F@F@JCPG\\CRARDZJTNTHRJLHHFDHDFBDDFAL@HCHCLCNGRELAJBFDHFFLDNDNDLDN@RCPCNGHEFEJMFEHADBBFBFBHFNLLHLLNHLFDFDHBFAFEHKBEDKHOHMJENCFCHALBN@JBHBJJDFBD@DAH@LDHDFBDJAHCBAHGDCFAFCFCD@FADAF@F@FBFFBFDDBDDFDBDFDBFBF@DBDBFDDBFBFBDBHBH@HBD@FBH@HBRBF@DBHBH@DA@CBCBEDEBCDCDAD@BBFDFFHFDDFFFBFDF@D@F@DCFABE@CACAGAGAECIAEACECC@EACBCACACACCCCAC@A@CB@BADBHDDBDBHBD@D@F@F@NCH@BCBC@E@G@EAGCI@E@CACAA@C@EBI@CBEBE@CACEGAGAECEACAEAEECCECCAC@CDCDADAFCFADCDE@EAACCACCKAG@GAGBE@E@CAAAAAAE@GCCCCEGGCCCGCCCECAAC@A@EBCDEBE@AAC@C@CBC@AACAAE@CCCCAAAC@EBEDEBE@EBCB@BABABEDIBEACCCCCCAAAAA@C@CCEACEMAC@CBC@CBCDABCFABCBCDEBAB@FAPAB@D@BABC@AAACCGECAACCA@A@CBC@ADCDABEBCBE@EDIDIBE@CBC@CACAAACCAACAA@C@ABABCB@BABE@ABCAEAE@CAA@CAABC@E@CBAFEHEHCFADCDGBABEBE@A@ABCBC@CBCDE@CBCBCBCDEBADC@ABCBEBCBA@C@A@AEEAC@A@C@CBC@AA@@C@@CCAC"],
                    "encodeOffsets": [[115391, 26751]]
                }
            }*/
        ], "UTF8Encoding": true
    });
}));