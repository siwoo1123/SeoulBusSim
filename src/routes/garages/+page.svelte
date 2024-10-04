<script>
    const garages = [
        {
            name: "염곡차고지",
            temp: ['145', '540', '541', '740'],
            pinned: ['강남마을', '서초마을', '141', '9404'],
        },
        {
            name: "용산차고지",
            temp: ['144'],
            pinned: ['0017', '040', '0411', '용산마을'],
        },
        {
            name: "송파차고지",
            temp: ['140'],
            pinned: ['350', '3420', '송파01', '송파03'],
        },
        {
            name: "장지차고지",
            temp: ['422'],
            pinned: ['송파02'],
        },
        {
            name: "난곡차고지",
            temp: ['641', '643'],
            pinned: ['관악마을', '동작마을'],
        },
        {
            name: "강동차고지",
            temp: [],
            pinned: ['340', '341', '강동마을'],
        },
    ]
</script>

<svelte:head>
	<title>서울버스 시뮬레이터 - 차고지 정보</title>
	<meta name="description" content="서울버스 시뮬레이터 - 차고지 정보" />
</svelte:head>

<div style="text-align: center;" class="m-4">
    <h1>차고지 목록</h1>
    <div class="accordion" id="accordionPanelsStayOpenExample">
        {#each garages as garage, idx}
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse{idx}" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    {garage.name}
                </button>
                </h2>
                <div id="panelsStayOpen-collapse{idx}" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <h3>정규노선</h3>
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">노선번호</th>
                          </tr>
                        </thead>
                        <tbody>
                            {#each garage.pinned as item}
                                <tr>
                                    <th scope="row">{item}</th>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                    <div class="p-2"></div>  
                    <h3>임시노선</h3>
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">노선번호</th>
                          </tr>
                        </thead>
                        <tbody>
                            {#each garage.temp as item}
                                <tr>
                                    <th scope="row">{item}</th>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        {/each}
    </div>
</div>