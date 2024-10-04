<script>
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	const alerts = [
		{
			title: "서버 내 디씨인사이드 사용 관련",
			content: "저희 서버는 해당 커뮤니티를 지지하지 않으며, 철저하게 해당 커뮤니티에 가입된 분들을 환영하지 않음을 알려드립니다.",

		},
		{
			title: "KD대원 출범 안내",
			content: "안녕하세요, 여러분이 편안하게 탑승할 수 있는 버스 회사를 꿈꾸는 대원여객 대표이사 권한대행 김치킨 입니다.  본사는 대원교통과 충분한 논의를 통하여 합병을 결정하였습니다. 앞으로 여러분들 앞에서 “KD대원” 이라는 이름으로 함께하겠습니다. 대원여객 대표이사 김치킨(gddssdf2) 올림",
		}
	];
</script>

<svelte:head>
	<title>서울버스 시뮬레이터</title>
	<meta name="description" content="서울버스 시뮬레이터의 공식 홈페이지" />
</svelte:head>

<section style="text-align: center;">
	<h1>서울버스 시뮬레이터</h1>
	<hr>
	<h2>공지</h2>
	<div id="alerts">
		{#each alerts as alrt, idx}
			<div class="card alert_{idx} m-4 mx-5">
				<div class="card-header">{alrt.title}</div>
				<div class="card-body">
				<blockquote class="blockquote mb-0">
					<p>{alrt.content}</p>
				</blockquote>
				</div>
			</div>
		{/each}
	</div>
</section>

<style></style>
