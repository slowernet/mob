const iplocate = async (ipdata_api_key) => {
	try {
		if ((iploc = sessionStorage.iploc) === undefined) {
			const r = await fetch(`https://api.ipdata.co/?api-key=${ipdata_api_key}&fields=city,region_code,country_code,postal`)
			const j = await r.json()
			sessionStorage.iploc = iploc = JSON.stringify(j)
		}
		return iploc
	} catch {}
}
