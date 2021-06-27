<template>
        <div class="container">
            <div v-for = "(policies, selected) in displayedPolicies" :key = "selected">
                <div class="row">
                    <h1 class = "policy-title">{{capsFirst(selected)}}</h1>
                </div>
                <div v-if ="Object.keys(policies).length === 0">
                    <p>There were no updates</p>
                </div>
                <div v-else class="row policy-details" v-for = "(policyInfo, idx) in policies" :key="idx">
                    <div class="col-sm-3">
                       <b> <p class = "policy">{{policyInfo.date}}</p></b>
                    </div>
                    <div class="col-sm-9">
                        <p class = "policy">{{policyInfo.policy}}</p>
                    </div>
                  <hr>


                </div>
                
            </div>
        </div>
        
        
</template>
<script>
    export default{
        data(){
            return{
                "policies":{
                    "economy":{
                        "2019_4":{
                            "date":"8 October 2019",
                            "policy":"The Public Transport Council allows a fare increase of 7% on train and bus fares which started on 28 December, the highest percentage jump since 1998. The increase is driven by soaring energy costs. However, polytechnic students are included under student concession fares for the first time, resulting in a fare reduction."
                        },
                        "2018_5":{
                            "date":"19 October 2018",
                            "policy":"Singapore signs a free trade agreement (FTA) with the European Union called the European Union–Singapore Free Trade Agreement."
                        },
                        "2017_5":{
                            "date":"20 February 2017",
                            "policy":"The Government announced a water price hike of 30% in two phases, fully taking effect on 1 July 2018. A 10 per cent water conservation tax on NEWater will be levied on businesses, with the sanitary appliance and waterborne fees combined into a single volume-based fee."
                        },
                        "2017_1":{
                            "date":"9 January 2017",
                            "policy":"The re-employment age is raised to the age of 67 on 1 July, from 65 currently among changes to the Retirement and Re-employment Act passed. In addition, eligible employees can be re-employed by another firm, and an option to cut 10 percent of wages at age 60 is removed."
                        },
                        "2016_5":{
                            "date":"19 July 2016",
                            "policy":" Singapore and Malaysia sign a Memorandum of Understanding (MoU) for the Kuala Lumpur-Singapore High Speed Rail (HSR) project. The 350 km line is targeted for completion by 2026, with the journey between Singapore and Kuala Lumpur taking 90 minutes. In addition, there will be three services with trains travelling up to 300 km/h."
                        },
                        "2016_1":{
                            "date":"25 February 2016",
                            "policy":"The Electronic Road Pricing system will be revamped into ERP 2.0 from 2020 onwards."
                        },
                        "14": {
                            "date": "13 February 2021",
                            "policy": "The Pearl Bank Apartments are sold in an en-bloc sale to CapitaLand for S$728 million. The building will be redeveloped into an 800-unit condominium, now known as One Pearl Bank."
                        },
                        "67": {
                            "date": "12 September 2021",
                            "policy": "economic payments system in hawker centres, canteens and coffee shops in Singapore, eventually supporting 20 payment schemes by 2019."
                        },
                        "1000": {
                            "date": "27 June 2021",
                            "policy": "Singapore's STI reaches record highs after border opens"
                        },
                        "1001": {
                            "date": "27 June 2021",
                            "policy": "Singapore announces new digital token SingCoin"
                        },
                        "1002": {
                            "date": "10 April 2020",
                            "policy": "Economy booms after news on border opening"
                        },
                        "77": {
                            "date": "9 March 2012",
                            "policy": "Lemon Laws are passed in Parliament to protect consumers from defects. The laws come into effect on 1 September."
                        },
                        "448":{
                            "date": "31 December 2010",
                            "policy": "Singapore's economy grew by 14.7% for the whole year[60] (lowered to 14.5%), the largest growth for the country of all time"
                        },
                        "2014_1":{
                            "date":"16 January 2014",
                            "policy":"Public Transport Council approved a fare increase of 3.2% on train and bus fares to be started on 6 April. This is in consideration of the 2012 and 2013 fare increase cap of 4.5 per cent and 2.1 per cent, respectively, which was not implemented. The remaining 3.4 per cent will be rolled over to the 2014 exercise."
                        },
                        
                    },
                    "technology":{
                        "2019_2":{
                            "date":"1 December 2019",
                            "policy":"The Home Team Science and Technology Agency (HTX) is formed to harness technologies for Singapore's security. A day later, HTX is launched with new technologies unveiled."
                        },
                        "2016_4":{
                            "date":"20 February 2016",
                            "policy":"A new SMEs Go Digital Programme is announced to enable SMEs to digitalise with Industry Digital Plans, in addition to new SME Technology Hub to be set up. A new Tech Access Initiative is announced too."
                        },
                        "2015_1":{
                            "date":"1 April 2015",
                            "policy":"The Cyber Security Agency is formed under the Prime Minister's Office to oversee cybersecurity matters, taking over the Singapore Infocomm Technology Security Authority and the Singapore Computer Emergency Response Team. The agency is first announced on 27 January."
                        },
                        "2014_4":{
                            "date":"12 May 2014",
                            "policy":"OCBC Bank launches the OCBC Pay Anyone app as a way to transfer money through numbers."
                        },
                        "2013_1": {
                            "date": "2 January 2013",
                            "policy": "The Personal Data Protection Commission is formed to enforce data privacy laws."
                        },
                        "13": {
                            "date": "12 February 2021",
                            "policy": "12 February 2013 The third mobile virtual network operator  Zero1 starts operations."
                        },
                        "17": {
                            "date": "2 February 2021",
                            "policy": "NETS services are disrupted for about two hours before being completely restored. This makes it the first service disruption in decades."
                        },
                        "23": {
                            "date": "8 February 2021",
                            "policy": "SingPass and CorpPass services are disrupted for six hours due to a server fault and not because of any cyberattacks, according to GovTech. Services are fully restored at 5:15 pm that day."
                        },
                        "24": {
                            "date": "9 February 2021",
                            "policy": "SingPass and CorpPass services are disrupted for the second day in a row for four hours. Though services are restored at 3:15 pm that day, there were still users unable to access both services for Government transactions."
                        },
                        "56": {
                            "date": "23 July 2021",
                            "policy": "23 July \u2013 In the wake of the SingHealth cyberattack, the National Healthcare Group and the National University Health System have implemented an Internet Surfing Separation policy, which now covers all public healthcare institutions."
                        },
                        "55": {
                            "date": "20 July 2021",
                            "policy": "20 July \u2013 SingHealth data breach: The Ministry of Health and Ministry of Communications and Information announced that personal data of 1.5 million SingHealth patients are illegally accessed and copied in the worst cyberattack to occur in Singapore. Outpatient medication data of 160,000 patients, including those of Prime Minister Lee Hsien Loong who is targeted by hackers, are also compromised. The attack, which took place from 27 June to 4 July, involved data from 1 May 2015 to 4 July 2018 before being finally stopped. The data breach is confirmed on 10 July. As a result of this cyberattack, all Smart Nation projects are temporarily suspended, with mandatory contributions to the National Electronic Health Record  put on hold. SingHealth has since imposed an Internet Surfing Separation policy too."
                        },
                        "57": {
                            "date": "25 July 2021",
                            "policy": "25 July \u2013 The Cyber Security Agency of Singapore reports that 70,000 members' data belonging to the Securities Investors Association   were stolen in 2013, discovered days after the SingHealth breach was announced."
                        },
                        "74": {
                            "date": "24 September 2021",
                            "policy": "Fi series; which is unveiled on 9 March. It will be supported with an app and uses artificial intelligence to map out ears for optimal sound."
                        },
                        "84": {
                            "date": "23 October 2021",
                            "policy": "23 October \u2013 Dyson plans to build electric cars in Singapore. The first vehicles are targeted to launch by 2021. Dyson announced the following year it will not proceed with the project."
                        },
                        "85": {
                            "date": "25 October 2021",
                            "policy": "25 October \u2013 A new app called Dementia Friends is launched to look out for those with dementia."
                        },
                    },
                    "finance":{
                        "2013_2": {
                            "date": "1 April 2013",
                            "policy": "The Singapore Accountancy Commission is formed to regulate the accountancy sector."
                        },
                        "69": {
                            "date": "17 September 2021",
                            "policy": "bank players will soon be allowed to tap on FAST . New guidelines to protect consumers from e-payment fraud and losses are announced, introduced on 28 September."
                        },
                        "1003": {
                            "date": "3 March 2018",
                            "policy": "Singapore unveils new laws for Cryptocurrencies."
                        },
                        "1004": {
                            "date": "3 July 2018",
                            "policy": "Singapore revises CPF schemes, rates and more"
                        },
                        "3244_1": {
                            "date": "21 March 2018",
                            "policy": "GST Vouchers to be provided in tranches in June and September 2018"
                        },
                        "1005": {
                            "date": "3 September 2018",
                            "policy": "MAS reminds investors to remain cautious while investing"
                        },
                        "666":{
                            "date": "1 July 2011",
                            "policy": "Central Provident Fund minimum sum to be revised upwards to S$131,000."
                        }
                    },
                    "healthcare":{
                        "2020_4":{
                            "date":"27 January 2020",
                            "policy":"A 14-day leave of absence (LOA) is imposed for students and teachers, as well as those working with vulnerable sectors like pre-schools, healthcare and eldercare returning from mainland China with students doing home-based learning instead. Temperature screening for all flights will start from 29 January with additional checks on flights from China and passengers from Hubei. In addition, people who went to China the last 14 days will need to fill health and travel declarations and monitor their health with temperature checks for two weeks. MOH will now advise against travel to mainland China. Hostels in National University of Singapore, Nanyang Technological University, and Singapore Management University will also be designated as quarantine facilities."
                        },
                        "2020_1":{
                            "date":"1 July 2020",
                            "policy":"New tobacco measures collectively known as the SP measures take effect, including mandatory standardised packaging and no logos, among others."
                        },
                        "2018_1":{
                            "date":"4 December 2018",
                            "policy":"The Ministry of Health proposed four measures to reduce sugar in drinks, which are a mandatory nutrition label, making advertising restrictions mandatory with expansions and an ad ban on all channels, a sugar tax and a ban on selling drinks with high sugar."
                        },
                        "2017_2":{
                            "date":"18 January 2017",
                            "policy":"The Ministry of Health announced that the current six healthcare clusters will be merged into three, namely the National Healthcare Group, SingHealth and National University Health System. In addition, the National University Health System will form the National University Polyclinics."
                        },
                        "2016_3":{
                            "date":"1 June 2016",
                            "policy":"he smoking ban is extended to parks and reservoirs, as well as SAF and MHA camps."
                        },
                        "2015_5":{
                            "date":"15 December 2015",
                            "policy":"The first phase of the ban on emerging tobacco products like smokeless cigarettes and dissolvable tobacco comes into effect. This is done in a bid to protect the public."
                        },
                        "2015_4":{
                            "date":"1 November 2015",
                            "policy":" MediShield Life is launched for all Singaporeans."
                        },
                        "2015_3":{
                            "date":"24 September 2015",
                            "policy":"The haze in Singapore reached a hazardous range of 313; Ministry of Education prompted to close primary and secondary schools on 25 September as a health precaution due to the haze."
                        },
                        "2014_2":{
                            "date":"21 February 2014",
                            "policy":"The Pioneer Generation Package is unveiled to honour Pioneers who helped in the development of Singapore."
                        },
                        "2": {
                            "date": "13 January 2021",
                            "policy": "13 January \u2013 SG Cares is launched to encourage Singaporeans to help each other, with the SG Cares app unveiled."
                        },
                        "12": {
                            "date": "1 February 2021",
                            "policy": "cigarettes and shisha are now illegal in Singapore."
                        },
                        "20": {
                            "date": "4 February 2021",
                            "policy": "4 February \u2013 Heartbeat@Bedok is officially opened."
                        },
                        "30": {
                            "date": "24 March 2021",
                            "policy": "24 March \u2013 The redeveloped Kwong Wai Shiu Hospital opened its doors. The new building officially opened on 6 October."
                        },
                        "40": {
                            "date": "18 April 2021",
                            "policy": "18 April \u2013 Construction starts on the new National Skin Centre building and National Healthcare Group's headquarters, which will better serve skin patients, with completion by 2022."
                        },
                        "50": {
                            "date": "27 May 2021",
                            "policy": "27 May \u2013 The Ministry of Health announces that CareShield Life will replace ElderShield by 2020. CareShield Life will be a compulsory scheme with higher payouts."
                        },
                        "54": {
                            "date": "2 July 2021",
                            "policy": "2 July \u2013 The redeveloped Yishun Polyclinic opens."
                        },
                        "61": {
                            "date": "18 August 2021",
                            "policy": "18 August \u2013 Sengkang General Hospital is opened to the public, with Sengkang Community Hospital opening on 28 August."
                        },
                        "71": {
                            "date": "19 September 2021",
                            "policy": "19 September \u2013 The Walk2Ride programme is completed, adding 200\u00a0km of sheltered walkways."
                        },
                        "82": {
                            "date": "18 October 2021",
                            "policy": "in attempts into HealthHub causing 72 accounts to successfully unlock, resulting in HealthHub access stopping for five days."
                        },
                        "96": {
                            "date": "2 November 2021",
                            "policy": "2 November \u2013 Changi General Hospital's new medical centre is officially opened."
                        },
                        "104": {
                            "date": "10 December 2021",
                            "policy": "10 December \u2013 The Ministry of Health announced that up to eight patients at Tan Tock Seng Hospital are treated with partially sterilised dental equipment, following a case at the National Dental Centre back in 2017."
                        },
                        "683":{
                            "date": "15 January 2012",
                            "policy": "The Ministry of Health launched a new health scheme known as the Community Health Assist Scheme (CHAS), which has Blue and Orange Cards. This will help the low and middle income get affordable healthcare."
                        },
                        "448":{
                            "date": "28 September 2012",
                            "policy": "The second satellite blood collection centre opens in Dhoby Ghaut."
                        },
                        "787":{
                            "date": "9 Febuary 2010",
                            "policy": "The National University Cancer Institute, Singapore is launched."
                        },
                        "322":{
                            "date": "12 Febuary 2010",
                            "policy": "2009 flu pandemic in Singapore: The Ministry of Health lowers the alert level from Yellow to Green"
                        },

                    },
                    "education":{
                        "2018_3":{
                            "date":"8 November 2018",
                            "policy":"The Ministry of Education announced that from 2020, National University of Singapore and Nanyang Technological University will only rely on whole polytechnic GPA scores for admission instead of using part of the O-Level results. Also, the Direct School Admission will be free, with all applications done online."
                        },
                        "2016_2":{
                            "date":"8 April 2016",
                            "policy":"The Ministry of Education announced a new expanded Early Admission Exercise for admission to polytechnics, as well as an expanded Discretionary Admission Scheme for admission to universities. Also in, all Secondary 3 students will have a chance to experience five-day OBS camps from 2020, made possible with a new OBS campus in Coney Island."
                        },
                        "2013_3": {
                            "date":"19 August 2013",
                            "policy":"The Ministry of Education announced that 40 places will be reserved in each primary school for those without prior ties to the school. This move aims to increase opportunities for those to study in popular schools and integration."
                        },
                        "18": {
                            "date": "23 February 2021",
                            "policy": "During the A Level results, the Singapore Examinations and Assessment Board reveals that part of the H2 Chemistry papers belonging to 238 students from four junior colleges are stolen on 16 November 2017, making it the first time answer scripts from a national examination are stolen."
                        },
                        "58": {
                            "date": "3 July 2021",
                            "policy": "3 July \u2013 The Ministry of Education announced that work experience will be taken into account for polytechnic admission, in a move away from academic results."
                        },
                        "102": {
                            "date": "8 November 2021",
                            "policy": "Level results. Also, the Direct School Admission will be free, with all applications done online."
                        },
                        "44":{
                            "date": "5 July 2012",
                            "policy": "Singapore Institute of Technology's campus at Temasek Polytechnic, known as SIT@TP, starts construction, which will finish by 2014. The building will house the Glasgow School of Art and The Culinary Institute of America."
                        },
                        "87":{
                            "date": "6 July 2012",
                            "policy": "Yale-NUS College starts construction on its new campus, which will official open in 2015"
                        },
                        "93": {
                            "date": "24 July 2012",
                            "policy": "Singapore Institute of Technology's campus at Ngee Ann Polytechnic, known as SIT@NP, starts construction, which will finish by 2014. The building will house Newcastle University, University of Glasgow and Wheelock College."
                        },
                        "55": {
                            "date": "11 April 2011",
                            "policy": "Yale-NUS College is officially launched as Singapore's first university offering liberal arts, in collaboration with Yale University and the National University of Singapore, coming after an announcement two weeks earlier"
                        },
                        "66": {
                            "date": "18 April 2011",
                            "policy": "ITE College West in Choa Chu Kang is officially opened."
                        },
                        "49": {
                            "date": "28 December 2010",
                            "policy": "Recommendations to improve secondary school education are announced"
                        }
                    },
                    "food":{
                        "72": {
                            "date": "21 September 2021",
                            "policy": "21 September \u2013 NTUC Enterprise announced it will acquire Kopitiam, a food court chain. Subsequently, the acquisition is allowed by the Competition and Consumer Commission of Singapore  on 20 December 2018."
                        },
                        "110": {
                            "date": "7 December 2021",
                            "policy": "Food and Veterinary Authority of Singapore . A joint statement by MOH, AVA and NEA also reveal that 82 reported cases out of 221 people who consumed the food from seven other incidents linked to the outlet between 6 and 9 November, are prepared on the site."
                        },
                        "1005": {
                            "date": "3 March 2017",
                            "policy": "Pasir Ris food centre unveiled, opening more than 100 hawker stalls."
                        }
                    },
                    "general":{
                        "2020_5":{
                            "date":"1 July 2020",
                            "policy":"New UL2272 certification rules for personal mobility devices take effect to prevent fires."
                        },
                        "2020_3":{
                            "date":"1 January 2020",
                            "policy":"The Criminal Law Reform Act comes into force, amending laws in the Penal Code with a new fire offence to prevent improper disposal of lighted materials."
                        },
                        "2020_2":{
                            "date":"20 September 2020",
                            "policy":" Minister for Home Affairs K Shanmugam announced a review on gender equality issues through the 'Conversations on Women Development' leading to a White Paper in the first half of 2021. This comes after a spate of voyeurism cases in universities. Among them include teaching children importance of equality with respect, as well as at home, school, workforce, anti-violence strategies, eradicating stereotypes and sexual crimes, among others."
                        },
                        "2019_5":{
                            "date":"18 August 2019",
                            "policy":"The Islamic Religious Council of Singapore (MUIS) will introduce a new postgraduate course to nurture a cohesive society.[249] At the same time, the Ministry of Education will soon introduce more pathways to help ITE students upgrade their skills."
                        },
                        "2019_3":{
                            "date":"15 November 2019",
                            "policy":"The NTUC announced two schemes for essentials and training for PMD riders affected by the footpath ban."
                        },
                        "2019_1":{
                            "date":"4 December 2019",
                            "policy":"he Ministry of Transport announced that the Cross Island MRT line will run directly under the Central Catchment Nature Reserve as it is cheaper, hence resulting in lower energy consumption"
                        },
                        "2018_4":{
                            "date":"1 November 2018",
                            "policy":"The Open Electricity Market by the Energy Market Authority starts its rollout after a soft launch in Jurong on 1 April.[75] This will be done in four phases, finishing with the city area on 1 May 2019, allowing consumers to choose electricity providers."
                        },
                        "2018_2":{
                            "date":"27 November 2018",
                            "policy":"The Ministry of Social and Family Development launches two guides to help professionals identity child abuse cases, namely the Sector Specific Screening Guide (SSRG) and Child Abuse Reporting Guide (CARG)."
                        },
                        "2017_3":{
                            "date":"6 February 2017",
                            "policy":"Laws are passed to ban short-term renting services such as Airbnb."
                        },
                        "2016_4":{
                            "date":"7 June 2016",
                            "policy":"The Ministry of Home Affairs (MHA) announced that foreign sponsors will not be allowed to sponsor any event at Speakers' Corner (including Pink Dot) in a bid to counter foreign interference.[42][43] MHA clarified a day later that no action will be taken against foreign sponsors of Pink Dot that year."
                        },
                        "2015_2":{
                            "date":"17 August 2015",
                            "policy":"The Organised Crime Act is passed to give authorities more power to act against organised crime groups."
                        },
                        "2014_5":{
                            "date":"15 August 2014",
                            "policy":" Land Transport Authority announced the merger of the Thomson Line (TSL) and the Eastern Region Line (ERL), which became Thomson–East Coast MRT line. The eastern section will be 13 km (8.1 miles) long with nine stations, to be completed in two stages in 2023 and 2024. A 2.2 km (1.4 miles) extension of the Downtown MRT line to Sungei Bedok MRT station was also unveiled with two stations by 2024, creating an interchange with the Thomson–East Coast line, as well as the East Coast Integrated Depot, the world's first four-in-one depot supporting three MRT lines and a bus depot."
                        },
                        "2014_3":{
                            "date":"13 March 2014",
                            "policy":"The Protection from Harassment Act is passed. The law overhauls the definition of harassment, giving more protection to victims as well as strengthen penalties against stalking."
                        },
                        "2013_4":{
                            "date":"7 October 2013",
                            "policy":"The Land Transport Master Plan 2013 is released, which will include 200 km of sheltered walkways, 700 km of cycling paths, more ITHs, more trains and buses, an upgraded signalling system and more lifts."
                        },
                        "2013_5":{
                            "date":"18 December 2013",
                            "policy":"An alcohol consumption ban in Little India for weekends, public holidays and eve of public holidays will continue for six months with some shops allowed to sell alcohol with conditions.[104] Bus services will resume with half the fleet and a shorter time."
                        },
                        "1": {
                            "date": "1 January 2021",
                            "policy": "1 January \u2013 JTC Corporation takes over all of Housing and Development Board's industrial land and properties to support SMEs better, a change first announced on 19 October 2016."
                        },
                        "3": {
                            "date": "14 January 2021",
                            "policy": "14 January \u2013 Three roads in Bidadari, namely Bidadari Park Drive, Alkaff Crescent and Woodleigh Link, partially open to serve upcoming developments."
                        },
                        "4": {
                            "date": "15 January 2021",
                            "policy": "15 January \u2013 The DUO and Marina One projects are officially opened as part of a bilateral partnership."
                        },
                        "5": {
                            "date": "16 January 2021",
                            "policy": "16 January \u2013 The agreement on the Johor Bahru\u2013Singapore Rapid Transit System is signed. SMRT and Prasarana are appointed to run the line for an initial 30 years, with subsequent concessions to be awarded through open tenders. The RTS is slated to be ready by 31 December 2024, but has now been delayed."
                        },
                        "6": {
                            "date": "19 January 2021",
                            "policy": "19 January \u2013 Northpoint City's new section opened its doors."
                        },
                        "7": {
                            "date": "21 January 2021",
                            "policy": "21 January \u2013 Plans for Punggol Digital District are launched. It integrates the future Singapore Institute of Technology  campus as well as JTC's industrial buildings housing cybersecurity and digital industries with a new heritage trail, to be completed by 2023."
                        },
                        "8": {
                            "date": "26 January 2021",
                            "policy": "26 January \u2013 Singapore launches its Year of Climate Action."
                        },
                        "9": {
                            "date": "27 January 2021",
                            "policy": "27 January \u2013 The Seletar Bus Depot is officially opened during a carnival."
                        },
                        "15": {
                            "date": "17 February 2021",
                            "policy": "Cheyenne Goh finishes fifth in the 1,500m short track speed skating heat during the 2018 Winter Olympics in Pyeongchang County, making her Singapore's first Winter Olympian."
                        },
                        "25": {
                            "date": "18 March 2021",
                            "policy": "18 March \u2013 Services 800, 804, 805, 807, 811 and 860 are handed over to SBS Transit."
                        },
                        "27": {
                            "date": "2 March 2021",
                            "policy": "2 March \u2013 MINDEF unveils unmanned watch towers, first used on Jurong Island."
                        },
                        "31": {
                            "date": "25 March 2021",
                            "policy": "25 March \u2013 Services 803, 806, 812, 850E, 851 and 852 are handed over to SBS Transit."
                        },
                        "33": {
                            "date": "28 March 2021",
                            "policy": "use development in Bidadari. Being developed by Singapore Press Holdings and Kajima, it will be connected to Singapore's first underground bus interchange and have a Community Club and a Neighbourhood Police Post. The development will be ready by 2022."
                        },
                        "39": {
                            "date": "12 April 2021",
                            "policy": "Mediacorp announced that 8 Days and i-Weekly will go digital with its last issue in September. In addition, Elle Singapore will have its last issue in September, and SmartParents website will be closed down. These moves will allow Mediacorp to focus on its own content."
                        },
                        "42": {
                            "date": "25 April 2021",
                            "policy": "25 April \u2013 Inuka, a polar bear born in the tropics, dies after declining health."
                        },
                        "43": {
                            "date": "30 April 2021",
                            "policy": "30 April \u2013 Dave Lee dies after suffering hyperthermia two weeks earlier."
                        },
                        "44": {
                            "date": "4\u201315 April 2021",
                            "policy": "Singapore participated at the 2018 Commonwealth Games in Gold Coast, Australia."
                        },
                        "45": {
                            "date": "7 April 2021",
                            "policy": "Our SG Heritage Plan is launched, Singapore's first five-year heritage plan along with the first intangible cultural heritage inventory listing 50 items."
                        },
                        "47": {
                            "date": "12 May 2021",
                            "policy": "12 May \u2013 Kampung Admiralty is officially opened. It has eldercare and childcare facilities to facilitate intergenerational bonding."
                        },
                        "44023": {
                            "date": "13 May 2021",
                            "policy": "13 May \u2013 Kok Yuen Chin dies after a celebration went wrong."
                        },
                        "51": {
                            "date": "30 May 2021",
                            "policy": "30 May \u2013 Plans for the largest underground substation to be built at the former Pasir Panjang Power Station, which will be completed by 2025, are announced."
                        },
                        "52": {
                            "date": "9 May 2021",
                            "policy": "9 May \u2013 The Jurong Region Line is unveiled at the future Canberra MRT station, a fully elevated line running for 24\u00a0km  with 24 stations. It will be completed in three stages from 2026 to 2028, serving areas like Tengah, Nanyang Technological University , Boon Lay, Jurong, Jurong Pier, and Pandan Reservoir."
                        },
                        "59234": {
                            "date": "7 July 2021",
                            "policy": "GBikes ceases operations after new rules for bike-sharing operators come into effect."
                        },
                        "63": {
                            "date": "31 August 2021",
                            "policy": "31 August \u2013 The collection of NRIC numbers for draws and making copies of NRIC cards, as well as physically holding the cards will be illegal from 1 September 2019 except when required for security. This will help enhance privacy."
                        },
                        "66": {
                            "date": "10 September 2021",
                            "policy": "scooters will also be required too. The new laws will allow LTA to outsource enforcement officers, stiffen penalties for damage to road infrastructure and allow notices to be served electronically."
                        },
                        "68": {
                            "date": "16 September 2021",
                            "policy": "16 September \u2013 Coffee chain Costa Coffee closes its last outlet at VivoCity."
                        },
                        "70": {
                            "date": "18 September 2021",
                            "policy": "wide blackout strikes Singapore at 1:29am. SP Group reports that the power outage lasted 38 minutes and affected 146,797 households and businesses. A preliminary investigation reveals that the failure stems from a partial loss of supply from two power generation units."
                        },
                        "73": {
                            "date": "22 September 2021",
                            "policy": "900ULR, a long-haul plane. This results in the relaunch of non-stop flights to the US, which stopped in 2013."
                        },
                        "76": {
                            "date": "29 September 2021",
                            "policy": "29 September \u2013 The West Loop of the Punggol LRT line is operational in both directions throughout the day."
                        },
                        "77": {
                            "date": "4 September 2021",
                            "policy": "4 September \u2013 Speed limits for Personal Mobility Devices and bicycles will be cut on footpaths from 15\u00a0km/h to 10\u00a0km/h, making it mandatory for cyclists to wear helmets on roads, \"stop and look\" for vehicles, as well as a maximum speed limit of personal mobility aids. They are among all six recommendations accepted, which take effect from early 2019 after the Panel submitted its recommendations on 24 August."
                        },
                        "78": {
                            "date": "5 September 2021",
                            "policy": "speed rail is deferred until 31 May 2020. Completion is now targeted for 1 January 2031 instead of 31 December 2026 after a new agreement is signed, following initial plans to scrap it. In addition, Malaysia will remit S$15 million in abortive costs to Singapore, which is done on 31 January 2019."
                        },
                        "80": {
                            "date": "15 October 2021",
                            "policy": "15 October \u2013 The Stamford Arts Centre reopens after redevelopment works are done."
                        },
                        "81": {
                            "date": "17 October 2021",
                            "policy": "17 October \u2013 Future plans are unveiled to develop Sentosa and Pulau Brani."
                        },
                        "86": {
                            "date": "27 October 2021",
                            "policy": "27 October \u2013 The Ulu Pandan Bus Depot officially opens during a carnival."
                        },
                        "87": {
                            "date": "28 October 2021",
                            "policy": "28 October \u2013 The first phase of Lornie Highway  opens to traffic, allowing motorists to travel southbound."
                        },
                        "88": {
                            "date": "29 October 2021",
                            "policy": "29 October \u2013 Peoples Voice is launched."
                        },
                        "89": {
                            "date": "3 October 2021",
                            "policy": "YTL PowerSeraya launches Geneco, a consumer and business energy brand in preparation for the open electricity market starting from 1 November."
                        },
                        "90": {
                            "date": "6\u201313 October 2021",
                            "policy": "Singapore participated at the 2018 Asian Para Games in Jakarta, Indonesia."
                        },
                        "91": {
                            "date": "6\u201318 October 2021",
                            "policy": "Singapore participated at the 2018 Summer Youth Olympics in Buenos Aires, Argentina."
                        },
                        "92": {
                            "date": "7 October 2021",
                            "policy": "7 October \u2013 Construction starts on Punggol Town Hub , to be completed by 2021. It will have a hawker centre, public library, a revamped community club seven times bigger, a childcare centre and multiple healthcare centres."
                        },
                        "94": {
                            "date": "13 November 2021",
                            "policy": "13 November \u2013 The 33rd ASEAN Summit is held in Singapore. The leaders of the participating countries will seek to further promote ASEAN integration and community building under the framework of multilateralism cooperation with the theme of \"resilience and innovation\". The Premier of the People\u2019s Republic of China Li Keqiang also joined this summit."
                        },
                        "95": {
                            "date": "19 November 2021",
                            "policy": "19 November \u2013 A new passenger terminal opens at Seletar Airport, replacing the old building."
                        },
                        "99": {
                            "date": "25 November 2021",
                            "policy": "25 November \u2013 New link roads in Punggol open to traffic linking Punggol Central to Kallang\u2013Paya Lebar Expressway  and Tampines Expressway . The roads come a year early thanks to the use of virtual design and construction , building information modeling  and precast concrete."
                        },
                        "100": {
                            "date": "27 November 2021",
                            "policy": "27 November \u2013 The Ministry of Social and Family Development launches two guides to help professionals identity child abuse cases, namely the Sector Specific Screening Guide  and Child Abuse Reporting Guide ."
                        },
                        "101": {
                            "date": "3 November 2021",
                            "policy": "3 November \u2013 Liu Kai dies after an accident where a Bionix AFV reversed into the Land Rover he was in."
                        },
                        "103": {
                            "date": "9 November 2021",
                            "policy": "9 November \u2013 Sunseap will build Singapore's largest offshore floating solar panel system off Woodlands by 2019."
                        },
                        "106": {
                            "date": "18 December 2021",
                            "policy": "18 December \u2013 The Infrastructure Protection Act comes into force."
                        },
                        "109": {
                            "date": "6 December 2021",
                            "policy": "6 December \u2013 Maritime and Aviation disputes: The Ministry of Transport extends the Tuas port limits to cover the area extended by Malaysia."
                        },
                        "887":{
                            "date": "15 October 2012",
                            "policy": "The Personal Data Protection Act is passed in Parliament to safeguard data privacy and create a do-not-call registry."
                        },
                        "996_3": {
                            "date": "4 March 2010",
                            "policy": "The Republic of Singapore Navy warns of an unidentified terrorist group planning attacks against oil tankers in the Strait of Malacca."
                        },
                        "59":{
                            "date": "18 March 2010",
                            "policy": "Soft opening of the Universal Studios Singapore at Resorts World Sentosa."
                        },
                        "69":{
                            "date": "18 February 2011",
                            "policy": "Radio and television licence fees are abolished with immediate effect"
                        },
                        "448":{
                            "date": "1 September 2011",
                            "policy": "SPE: Tony Tan, who won the presidential election prior, was sworn in as Singapore's seventh President."
                        }
                    },
                    
                },
                filteredPolicies: {},
                displayedPolicies: {}
                }
            },
        props:{
            categories: Object,
            from: String,
            to: String,
            search: String
        },
        mounted(){
            for (const[key, policies] of Object.entries(this.policies)){
                if (policies){
                    this.filteredPolicies[key] = {}
                }
                for (const [idx, policydeets] of Object.entries(this.policies[key]) ){
                 
                    let year = policydeets.date.slice(-4)
                    if (parseInt(year) >= parseInt(this.from) && parseInt(year) <= parseInt(this.to)){
                        if (this.search.length > 0){
                            console.log(key, idx)
                            console.log(policydeets.policy)
                            let s = policydeets.policy
                            let punctuationless = s.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"")
                            let finalString = punctuationless.replace(/\s{2,}/g," ")
                            if (finalString.toLowerCase().split(' ').includes(this.search))

                                this.filteredPolicies[key][idx] = policydeets
                            }else{
                                this.filteredPolicies[key][idx] = policydeets
                            }
                    }
                        
                    
                }
            }
            for (const[key,value] of Object.entries(this.categories)){
                if (value){

                    this.displayedPolicies[key] = this.filteredPolicies[key]
                }else if (key in this.displayedPolicies){
                    delete this.displayedPolicies[key]
                }   
            }

        },
        

        watch: {
            categories: {
                handler(){
                    for (const[key,value] of Object.entries(this.categories)){
                        if (value){
        
                            this.displayedPolicies[key] = this.filteredPolicies[key]
                        }else if (key in this.displayedPolicies){
                            delete this.displayedPolicies[key]
                        }   
                    }
            },
                deep: true
            }
        },
        methods:{
            capsFirst(word){
                return word.charAt(0).toUpperCase() + word.slice(1)
                
            }
        }
    }
</script>

<style scoped>
    .policy-title{
        color: var(--red);
    }
    .policy {
        color: black;
        word-wrap: break-word;
    }
    .content{
        padding: 50px;
    }
    .container{
        margin-top: 50px;
        height: 65vh;
        width: 70vw;
        overflow-wrap: break-word;
        overflow-y: scroll;
        background: white;
    }
    h1{
        padding: 20px;
    }
    p{
        padding: 10px;
        font-size: 1.3em;
    }
/* width */
    .container::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    .container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--white);
    border-radius: 10px;
    }

    /* Handle */
    .container::-webkit-scrollbar-thumb {
    background: var(--red);
    border-radius: 10px;
    }
        /* @media only screen and (max-width:991px){ */
    @media only screen and (max-width: 1050px){
        .container{
            margin-left:0;
            width: 100vw;
        }
    }
</style>
