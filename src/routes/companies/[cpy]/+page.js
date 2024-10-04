import { error } from '@sveltejs/kit';

const companies = [
    { // 서울승합
        id: "7ISc7Jq47Iq57ZWp",
        name: "서울승합",
        ceo: "강서초",
        routes: [
            {
                number: '340',
                cars: [
                    {carnum: "서울 75사 9701", cartype: "현대 일렉시티 ♿️", driver: "강서초"},
                ],
                routeleader: "강서초"
            },
        ],
    },
    { // KD대원
        id: "S0TrjIDsm5A=",
        name: "KD대원",
        ceo: "금정역",
        routes: [
            {
                number: '040',
                cars: [
                    {carnum: "서울 70사 2701", cartype: "자일대우 BS106", driver: "금정역"},
                    {carnum: "서울 70사 2715", cartype: "자일대우 BS106", driver: "김치킨"},
                    {carnum: "서울 74사 1599", cartype: "자일대우 BS106", driver: "-"},
                ],
                routeleader: "금정역"
            },
            {
                number: '341',
                cars: [
                    {carnum: "서울 74사 7284", cartype: "현대 일렉시티 ♿️", driver: "천안"},
                    {carnum: "서울 70사 2769", cartype: "자일대우 BS106", driver: "김밥"},
                ],
                routeleader: "천안"
            },
            {
                number: '0411',
                cars: [
                    {carnum: "서울 74사 7586", cartype: "현대 일렉시티 ♿️", driver: "안양"},
                ],
                routeleader: "안양"
            },
            
        ],
    },
    { // 한국BRT
        id: "7ZWc6rWtQlJU",
        name: "한국BRT",
        ceo: "대덕이",
        routes: [
            {
                number: '140',
                cars: [
                    {carnum: "서울 71사 1816", cartype: "현대 뉴 슈퍼 에어로시티 ♿️", driver: "대덕이"},
                ],
                routeleader: "대덕이"
            },
        ],
    },
    { // 동성교통
        id: "64+Z7ISx6rWQ7Ya1",
        name: "동성교통",
        ceo: "케알",
        routes: [
            {
                number: '3420',
                cars: [
                    {carnum: "서울 74사 2022", cartype: "현대 뉴 슈퍼 에어로시티 ♿️", driver: "케알"},
                ],
                routeleader: "케알"
            },
        ],
    },
    { // 남성버스
        id: "64Ko7ISx67KE7Iqk",
        name: "남성버스",
        ceo: "관악",
        routes: [
            {
                number: '3420',
                cars: [
                    {carnum: "서울 70사 6541", cartype: "현대 뉴 슈퍼 에어로시티 ♿️", driver: "-"},
                    {carnum: "서울 74사 9817", cartype: "현대 뉴 슈퍼 에어로시티 ♿️", driver: "명학"},
                ],
                routeleader: "케알(동성교통 소속)"
            },
            {
                number: '9404',
                cars: [
                    {carnum: "서울 74사 6974", cartype: "자일대우 레스타", driver: "관악"},
                ],
                routeleader: "관악"
            },
        ],
    },
    { // 우신버스
        id: "7Jqw7Iug67KE7Iqk",
        name: "우신버스",
        ceo: "김재승",
        routes: [
            {
                number: '541',
                cars: [
                    {carnum: "서울 74사 4679", cartype: "현대 뉴 슈퍼 에어로시티 ♿️", driver: "김재승"},
                ],
                routeleader: "김재승"
            },
        ],
    },
    { // 아진교통
        id: "7JWE7KeE6rWQ7Ya1",
        name: "아진교통",
        ceo: "경상이",
        routes: [
            {
                number: '141',
                cars: [
                    {carnum: "서울 74사 6486", cartype: "현대 뉴 슈퍼 에어로시티 ♿️", driver: "경상이 / hihi (교대형식)"},
                ],
                routeleader: "경상이"
            },
        ],
    },
    { // 마을버스
        id: "66eI7J2E67KE7Iqk",
        name: "마을버스",
        ceo: "-",
        routes: [
            {
                number: '서초01',
                cars: [
                    {carnum: "서울 70사 9159", cartype: "현대 카운티", driver: "-"},
                ],
                routeleader: "-"
            },
            {
                number: '서초09',
                cars: [
                    {carnum: "서울 71사 2912", cartype: "자일대우 BS090", driver: "-"},
                ],
                routeleader: "-"
            },
        ],
    },
]

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const cpyCode = params.cpy;

    for(var i = 0; i < companies.length; i++) {
        if(cpyCode == companies[i].id) return companies[i];
    }

	error(404, 'Not found');
}