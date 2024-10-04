<script>
    export let data;
</script>

<svelte:head>
	<title>서울버스 시뮬레이터 - {data.name}</title>
	<meta name="description" content="서울버스 시뮬레이터 - {data.name} 업체정보" />
</svelte:head>

<div style="text-align: center;">
    <h1>{data.name}</h1>
    <p>대표이사: {data.ceo}</p>

    <hr>

    <div class="m-5 mt-2">
        <h2>노선별 차량 현황 및 기사 목록</h2>
        <div class="accordion" id="accordionPanelsStayOpenExample">
            {#each data.routes as route, idx}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse{idx}" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        {route.number}
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse{idx}" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <h3>{route.number}</h3>
                        <p>노선팀장: {route.routeleader}</p>
                        <p><strong>* ♿️ 표시가 붙어있는 차량은 저상버스 차량입니다.</strong></p>
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">차량 번호</th>
                                <th scope="col">차종</th>
                                <th scope="col">기사</th>
                            </tr>
                            </thead>
                            <tbody>
                            {#each route.cars as car}
                                <tr>
                                    <th scope="row">{car.carnum}</th>
                                    <td>{car.cartype}</td>
                                    <td>{car.driver}</td>
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
</div>