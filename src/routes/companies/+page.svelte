<script>
    const companies = [
        {kor: "서울승합", link: "7ISc7Jq47Iq57ZWp", ceo: "강서초"},
        {kor: "KD대원", link: "S0TrjIDsm5A=", ceo: "금정역"},
        {kor: "한국BRT", link: "7ZWc6rWtQlJU", ceo: "대덕이"},
        {kor: "동성교통", link: "64+Z7ISx6rWQ7Ya1", ceo: "케알"},
        {kor: "남성버스", link: "64Ko7ISx67KE7Iqk", ceo: "관악"},
        {kor: "우신버스", link: "7Jqw7Iug67KE7Iqk", ceo: "김재승"},
        {kor: "아진교통", link: "7JWE7KeE6rWQ7Ya1", ceo: "경상이"},
        {kor: "마을버스", link: "66eI7J2E67KE7Iqk", ceo: "-"},
    ]
</script>

<svelte:head>
	<title>서울버스 시뮬레이터 - 업체 목록</title>
	<meta name="description" content="서울버스 시뮬레이터 내의 업체 목록" />
</svelte:head>

<div class="main" style="text-align: center;">
    <h1>업체 목록</h1>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">업체 명</th>
            <th scope="col">대표이사</th>
            <th scope="col">상세 정보</th>
          </tr>
        </thead>
        <tbody>
            {#each companies as company, idx}
                <tr>
                    <th scope="row">{idx+1}</th>
                    <td>{company.kor}</td>
                    <td>{company.ceo}</td>
                    <td><a href="/companies/{company.link}" class="btn btn-primary">상세정보</a></td>
                </tr>
            {/each}
        </tbody>
      </table>
</div>
